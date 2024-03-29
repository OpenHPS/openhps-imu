import { expect } from 'chai';
import 'mocha';
import {
    CallbackSinkNode,
    ModelBuilder,
    CallbackSourceNode,
    Acceleration,
    Absolute2DPosition,
    DataObject,
    AngularVelocity,
    AccelerationUnit,
    Model,
    Orientation,
    AngleUnit,
    DataFrame,
    AbsoluteOrientationSensor,
    Accelerometer,
    GravitySensor,
    LinearAccelerationSensor,
    Gyroscope,
} from '@openhps/core';
import {
    GravityProcessingNode,
    RelativeOrientationProcessingNode,
} from '../../src';
import { CSVDataSource } from '@openhps/csv';
import { EvaluationIMUFrame } from '../mock/EvaluationIMUFrame';

describe('node processing gravity', () => {
    describe('using orientation', () => {
        let model: Model<any, any>;
        let sink: CallbackSinkNode<any> = new CallbackSinkNode();

        before(function(done) {
            ModelBuilder.create()
                .from(new CSVDataSource("test/data/imu/2021-03-0515.10.43.csv", (row: any) => {
                    const frame = new EvaluationIMUFrame();

                    const roll = parseFloat(row['Roll'].replace(',', '.'));
                    const pitch = parseFloat(row['Pitch'].replace(',', '.'));
                    const yaw = parseFloat(row['Azimuth'].replace(',', '.'));

                    frame.addSensor(new AbsoluteOrientationSensor("orientation", Orientation.fromEuler({
                        z: yaw,
                        y: roll,
                        x: pitch,
                        unit: AngleUnit.DEGREE,
                        order: 'XYZ'
                    }), 100));
                    frame.addSensor(new Accelerometer("accelerometer", new Acceleration(
                        parseFloat(row['ax'].replace(',', '.')),
                        parseFloat(row['ay'].replace(',', '.')),
                        parseFloat(row['az'].replace(',', '.'))
                    ).add(new Acceleration(
                        parseFloat(row['gFx'].replace(',', '.')),
                        parseFloat(row['gFy'].replace(',', '.')),
                        parseFloat(row['gFz'].replace(',', '.')),
                        AccelerationUnit.GRAVITATIONAL_FORCE
                    )), 100));
                    frame.evaluationFrame = new DataFrame();
                    frame.evaluationFrame.addSensor(new GravitySensor("gravity", new Acceleration(
                        parseFloat(row['gFx'].replace(',', '.')),
                        parseFloat(row['gFy'].replace(',', '.')),
                        parseFloat(row['gFz'].replace(',', '.')),
                        AccelerationUnit.GRAVITATIONAL_FORCE
                    ), 100));
                    frame.evaluationFrame.addSensor(new Accelerometer("accelerometer", 
                        frame.getSensor(Accelerometer).value.clone().add(frame.evaluationFrame.getSensor(GravitySensor).value), 
                        100));
                    return frame;
                }, {
                    uid: "source",
                    separator: ";",
                }))
                .via(new GravityProcessingNode())
                .to(sink)
                .build().then(m => {
                    model = m;
                    done();
                })
        });

        it('should filter out gravity using orientation', (done) => {
            const errors = [];
            sink.callback = (frame: EvaluationIMUFrame) => {
                const error = frame.getSensor(LinearAccelerationSensor).value
                    .distanceTo(frame.evaluationFrame.getSensor(Accelerometer).value);
                errors.push(error);
            };

            model.once('error', done);
            model.pull({
                count: (model.findNodeByUID("source") as CSVDataSource<any>).size
            }).then(() => {
                const stats = {
                    max: Math.max(...errors),
                    min: Math.min(...errors),
                    avg: errors.reduce((a, b) => a + b, 0) / errors.length
                };
                console.log(stats);
                done();
            }).catch(done);
        });
    });

    // describe('using gyroscope', () => {
    //     let model: Model<any, any>;
    //     let sink: CallbackSinkNode<any> = new CallbackSinkNode();

    //     before(function(done) {
    //         ModelBuilder.create()
    //             .from(new CSVDataSource("test/data/imu/2021-03-0515.10.43.csv", (row: any) => {
    //                 const frame = new EvaluationIMUFrame();
    //                 frame.frequency = 416;
    //                 frame.acceleration = new Acceleration(
    //                     parseFloat(row['ax'].replace(',', '.')),
    //                     parseFloat(row['ay'].replace(',', '.')),
    //                     parseFloat(row['az'].replace(',', '.'))
    //                 );
    //                 frame.angularVelocity = new AngularVelocity(
    //                     parseFloat(row['wx'].replace(',', '.')),
    //                     parseFloat(row['wy'].replace(',', '.')),
    //                     parseFloat(row['wz'].replace(',', '.'))
    //                 );
    //                 frame.evaluationFrame = new IMUDataFrame();
    //                 frame.evaluationFrame.gravity = new Acceleration(
    //                     parseFloat(row['gFx'].replace(',', '.')),
    //                     parseFloat(row['gFy'].replace(',', '.')),
    //                     parseFloat(row['gFz'].replace(',', '.')),
    //                     AccelerationUnit.GRAVITATIONAL_FORCE
    //                 );
    //                 frame.evaluationFrame.linearAcceleration = frame.acceleration.clone();
    //                 frame.acceleration.add(frame.evaluationFrame.gravity);
    //                 return frame;
    //             }, {
    //                 uid: "source",
    //                 separator: ";"
    //             }))
    //             .via(new RelativeOrientationProcessingNode())
    //             .via(new GravityProcessingNode())
    //             .to(sink)
    //             .build().then(m => {
    //                 model = m;
    //                 done();
    //             })
    //     });

    //     it('should filter out gravity using the gyorscope', (done) => {
    //         const errors = [];
    //         sink.callback = (frame: EvaluationIMUFrame) => {
    //             console.log(frame.gravity)
    //             const error = frame.linearAcceleration.distanceTo(frame.evaluationFrame.linearAcceleration);
    //             errors.push(error);
    //         };

    //         model.pull({
    //             count: (model.findNodeByUID("source") as CSVDataSource<any>).size
    //         }).then(() => {
    //             const stats = {
    //                 max: Math.max(...errors),
    //                 min: Math.min(...errors),
    //                 avg: errors.reduce((a, b) => a + b, 0) / errors.length
    //             };
    //             console.log(stats);
    //             done();
    //         })
    //     });
    // });

    it('should filter out gravity from a stationary object', (done) => {
        const object = new DataObject();
        const position = new Absolute2DPosition(0, 0);
        object.setPosition(position);

        ModelBuilder.create()
            .from(new CallbackSourceNode(() => {
                const frame = new DataFrame(object);
                
                frame.addSensor(new Accelerometer("accel", new Acceleration(
                    -0.04360794275999069, 
                    -0.016298960894346237, 
                    1.0199016332626343,
                    AccelerationUnit.GRAVITATIONAL_FORCE
                ), 50));
                frame.addSensor(new Gyroscope("gyro", new AngularVelocity(
                    -0.0010652969463144809, 
                    0, 
                    -0.0021305938926289617), 50));
                return frame;
            }))
            .via(new RelativeOrientationProcessingNode())
            .via(new GravityProcessingNode())
            .to(new CallbackSinkNode((frame: DataFrame) => {
                expect(Math.round(frame.getSensor(GravitySensor).value.z)).to.equal(10);
                done();
            }))
            .build().then(model => {
                return model.pull();
            }).catch(done);
    });

    it('should filter out gravity from a moving object', (done) => {
        const object = new DataObject();
        const position = new Absolute2DPosition(0, 0);
        object.setPosition(position);

        ModelBuilder.create()
            .from(new CallbackSourceNode(() => {
                const frame = new DataFrame(object);
                frame.addSensor(new Accelerometer("accel", new Acceleration(
                    0.16284647583961487,
                    0.18739065527915955,
                    0.730134129524231,
                    AccelerationUnit.GRAVITATIONAL_FORCE
                ), 50));
                frame.addSensor(new Gyroscope("gyro", new AngularVelocity(
                    5.4010555178144175,
                    1.1334759508786076,
                    -0.5773909449024486), 50));
                return frame;
            }))
            .via(new RelativeOrientationProcessingNode())
            .via(new GravityProcessingNode())
            .to(new CallbackSinkNode(frame => {
                done();
            }))
            .build().then(model => {
                return model.pull();
            }).catch(done);
    });
});
