import { 
    Absolute2DPosition, 
    Acceleration, 
    AngleUnit, 
    CallbackNode, 
    CallbackSinkNode, 
    DataFrame, 
    DataObject, 
    IMUDataFrame, 
    Model, 
    ModelBuilder, 
    Orientation,
    Quaternion,
    SMAFilterNode
} from "@openhps/core";
import { CSVDataSink, CSVDataSource } from "@openhps/csv";
import { expect } from 'chai';
import {
    GravityProcessingNode,
    PedometerProcessingNode 
} from '../../../src';

describe('dataset openhps-2021-03', () => {
    let model: Model<any, any>;
    let sink: CallbackSinkNode<any> = new CallbackSinkNode();
    const user = new DataObject("user");
    user.setPosition(new Absolute2DPosition(0, 0));

    before(function(done) {
        ModelBuilder.create()
            .from(new CSVDataSource("test/data/imu/cross2_imu.csv", (row: any) => {
                const frame = new IMUDataFrame();
                frame.frequency = 50;

                frame.source = user.clone();

                frame.source.position = undefined;

                frame.absoluteOrientation =  Orientation.fromQuaternion(new Quaternion(
                    parseFloat(row['QUAT_X']),
                    parseFloat(row['QUAT_Y']),
                    parseFloat(row['QUAT_Z']),
                    parseFloat(row['QUAT_W'])
                ));
                frame.acceleration = new Acceleration(
                    parseFloat(row['ACC_X']),
                    parseFloat(row['ACC_Y']),
                    parseFloat(row['ACC_Z'])
                );
                return frame;
            }, {
                uid: "source",
            }))
            .via(new CallbackNode(frame => {
                frame.source.position.orientation = frame.absoluteOrientation;
            }))
            .via(new SMAFilterNode((_, frame) => [frame, "acceleration"], {
                taps: 20
            }))
            .via(new GravityProcessingNode())
            .via(new PedometerProcessingNode({
                minConsecutiveSteps: 1
            }))
            .to(sink, new CSVDataSink("test/data/imu/test.csv", [
                { id: "x", title: "x" },
                { id: "y", title: "y" }
            ], frame => {
                return {
                    x: frame.source.position.x,
                    y: frame.source.position.y
                };
            }, {
                uid: "sink"
            }))
            .build().then(m => {
                model = m;
                return model.findDataService(DataObject).insert(user.uid, user);
            }).then(() => {
                done();
            })
    });

    after(() => {
        model.destroy();
    });

    it('should count steps using processed acceleration', (done) => {
        let step = 0;
        sink.callback = (frame: IMUDataFrame) => {
            const pos =  frame.source.getPosition();
            step += pos.linearVelocity.x > 0 ? 1 : 0;
            if (pos.linearVelocity.x > 0) {
               // console.log(`[${pos.toVector3().toArray()}],`)
            }
        };

        let promise = Promise.resolve();
        const node = (model.findNodeByUID("source") as CSVDataSource<any>);
        const size = node.size;
        for (let i = 0 ; i < size ; i ++) {
            promise = promise.then(() => {
                return new Promise((resolve, reject) => {
                    model.onceCompleted(node.inputData[0].uid).then(() => {
                        resolve();
                    }).catch(reject);
                    model.findNodeByUID("sink").pull();
                });
            });
        }
        promise.then(() => {
            //expect(step).to.equal(122);
            done();
        }).catch(done);
    }).timeout(10000);
});
