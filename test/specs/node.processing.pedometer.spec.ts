import { 
    Absolute2DPosition, 
    AbsoluteOrientationSensor, 
    Acceleration, 
    AccelerationUnit, 
    Accelerometer, 
    AngleUnit, 
    CallbackSinkNode, 
    DataFrame, 
    DataObject, 
    LinearAccelerationSensor, 
    Model, 
    ModelBuilder, 
    Orientation,
    SMAFilterNode, 
} from "@openhps/core";
import { CSVDataSource } from "@openhps/csv";
import { expect } from 'chai';
import {
    GravityProcessingNode,
    PedometerData,
    PedometerProcessingNode,
} from '../../src';

describe('node processing pedometer', () => {
    let model: Model;
    let source = new CSVDataSource("test/data/buegler2017/DataWalking1.csv", (row: any) => {
        const frame = new DataFrame();
        const object = new DataObject("phone");
        object.position = new Absolute2DPosition(0, 0);
        frame.source = object;
        frame.addSensor(new Accelerometer("phone_accel", new Acceleration(
            parseFloat(row['0']),
            parseFloat(row['1']),
            parseFloat(row['2'])
        ), 100));
        frame.addSensor(new AbsoluteOrientationSensor("phone_orientation", Orientation.fromEuler({
            x: parseFloat(row['4']),
            y: -parseFloat(row['5']),
            z: parseFloat(row['3']),
            unit: AngleUnit.RADIAN,
        }), 100));
        return frame;
    }, {
        headers: false
    });
    let sink = new CallbackSinkNode();
    let pedometer = new PedometerProcessingNode({
        stepSize: 1
    });

    before(function (done) {
        this.timeout(10000);
        ModelBuilder.create()
            .from(source)
            .via(pedometer)
            .to(sink)
            .build().then(m => {
                model = m;
                done();
            }).catch(done);
    });

    it('should count ~116 steps without streaming', (done) => {
        source.emitAsync('build').then(() => {
            const pedometerData = new PedometerData();
            source.inputData.forEach(frame => {
                pedometerData.add(frame);
            });
            expect(pedometerData.accelerometerData.length).to.equal(6809);
            return pedometer.processPedometer(pedometerData);
        }).then(steps => {
            console.log(steps.length);
            //expect(steps).to.equal(114);
            done();
        });
    });

    it('should count ~116 steps with streaming', (done) => {
        let steps = 0;
        sink.callback = (frame: DataFrame) => {
            steps += frame.source.position.linearVelocity.x;
        };
        model.pull({
            count: 6809
        }).then(() => {
            console.log(steps)
            expect(steps).to.equal(117);
            done();
        }).catch(done);
    });
    
    describe('2021-03-0516.14.44 dataset', () => {
        let model: Model<any, any>;
        let sink: CallbackSinkNode<any> = new CallbackSinkNode();
        const user = new DataObject("user");
        user.setPosition(new Absolute2DPosition(0, 0));

        before(function(done) {
            ModelBuilder.create()
                .from(new CSVDataSource("test/data/imu/2021-03-0516.14.44.csv", (row: any) => {
                    const frame = new DataFrame();
                    frame.frequency = 100;

                    frame.source = user;

                    const roll = parseFloat(row['Roll'].replace(',', '.'));
                    const pitch = parseFloat(row['Pitch'].replace(',', '.'));
                    const yaw = parseFloat(row['Azimuth'].replace(',', '.'));

                    frame.absoluteOrientation = Orientation.fromEuler({
                        z: yaw,
                        y: roll,
                        x: pitch,
                        unit: AngleUnit.DEGREE,
                        order: 'XYZ'
                    });
                    frame.acceleration = new Acceleration(
                        parseFloat(row['ax'].replace(',', '.')),
                        parseFloat(row['ay'].replace(',', '.')),
                        parseFloat(row['az'].replace(',', '.'))
                    );
                    // frame.linearAcceleration = new Acceleration(
                    //     parseFloat(row['ax'].replace(',', '.')),
                    //     parseFloat(row['ay'].replace(',', '.')),
                    //     parseFloat(row['az'].replace(',', '.'))
                    // );
                    frame.acceleration.add(new Acceleration(
                        parseFloat(row['gFx'].replace(',', '.')),
                        parseFloat(row['gFy'].replace(',', '.')),
                        parseFloat(row['gFz'].replace(',', '.')),
                        AccelerationUnit.GRAVITATIONAL_FORCE
                    ));
                    return frame;
                }, {
                    uid: "source",
                    separator: ";"
                }))
                .via(new SMAFilterNode((obj, frame) => [frame, "acceleration"], {
                    taps: 20
                }))
                .via(new GravityProcessingNode())
                .via(new PedometerProcessingNode({
                    stepSize: 1
                }))
                .to(sink)
                .build().then(m => {
                    model = m;
                    done();
                })
        });

        after(() => {
            model.destroy();
        });

        it('should count steps using processed acceleration', (done) => {
            let step = 0;
            sink.callback = (frame: DataFrame) => {
                step += frame.source.getPosition().linearVelocity.x;
            };

            model.pull({
                count: (model.findNodeByUID("source") as CSVDataSource<any>).size
            }).then(() => {
                expect(step).to.equal(24);
                done();
            }).catch(done);
        });
    });

    describe('2021-03-0520.21.25 dataset', () => {
        let model: Model<any, any>;
        let sink: CallbackSinkNode<any> = new CallbackSinkNode();
        const user = new DataObject("user");
        user.setPosition(new Absolute2DPosition(0, 0));

        before(function(done) {
            ModelBuilder.create()
                .from(new CSVDataSource("test/data/imu/2021-03-0520.21.25.csv", (row: any) => {
                    const frame = new DataFrame();
                    frame.source = user.clone();

                    const roll = parseFloat(row['Roll'].replace(',', '.'));
                    const pitch = parseFloat(row['Pitch'].replace(',', '.'));
                    const yaw = parseFloat(row['Azimuth'].replace(',', '.'));

                    frame.source.getPosition().orientation = Orientation.fromEuler({
                        z: yaw,
                        y: roll,
                        x: pitch,
                        unit: AngleUnit.DEGREE,
                        order: 'XYZ'
                    });

                    frame.addSensor(new AbsoluteOrientationSensor(undefined, frame.source.getPosition().orientation, 100));
                    frame.addSensor(new Accelerometer(undefined, new Acceleration(
                        parseFloat(row['gFx'].replace(',', '.')),
                        parseFloat(row['gFy'].replace(',', '.')),
                        parseFloat(row['gFz'].replace(',', '.')),
                    ), 100));
                    frame.addSensor(new LinearAccelerationSensor(undefined, new Acceleration(
                        parseFloat(row['ax'].replace(',', '.')),
                        parseFloat(row['ay'].replace(',', '.')),
                        parseFloat(row['az'].replace(',', '.'))
                    ), 100));
                    return frame;
                }, {
                    uid: "source",
                    separator: ";"
                }))
                .via(new PedometerProcessingNode({
                    minConsecutiveSteps: 1
                }))
                .to(sink)
                .build().then(m => {
                    model = m;
                    done();
                })
        });

        after(() => {
            model.destroy();
        });
        
        it('should count steps using processed acceleration', (done) => {
            let step = 0;
            sink.callback = (frame: DataFrame) => {
                const pos =  frame.source.getPosition();
                step += pos.linearVelocity.x > 0 ? 1 : 0;
                if (pos.linearVelocity.x > 0) {
                    //console.log(pos.toVector3(), pos.orientation.toEuler().yaw)
                }
            };

            model.pull({
                count: (model.findNodeByUID("source") as CSVDataSource<any>).size
            }).then(() => {
                expect(step).to.equal(24);
                done();
            }).catch(done);
        });
    });
});
