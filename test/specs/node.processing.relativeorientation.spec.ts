import { expect } from 'chai';
import 'mocha';
import {
    CallbackSinkNode,
    Model,
    ModelBuilder,
    CallbackSourceNode,
    Acceleration,
    TimeService,
    Absolute2DPosition,
    DataObject,
    AngularVelocity,
    AngularVelocityUnit,
    DataFrame,
    Accelerometer,
    Gyroscope,
} from '@openhps/core';
import {
    RelativeOrientationProcessingNode,
} from '../../src';

describe('node', () => {
    describe('processing relative orientation', () => {
        let model: Model;
        let callbackSink: CallbackSinkNode<DataFrame>;
        const time = 0;
        let timeService: TimeService;

        before((done) => {
            callbackSink = new CallbackSinkNode();
            timeService = new TimeService(() => time);
            ModelBuilder.create()
                .addService(timeService)
                .from(new CallbackSourceNode())
                .via(new RelativeOrientationProcessingNode())
                .to(callbackSink)
                .build()
                .then((m) => {
                    model = m;
                    done();
                }).catch(done);
        });

        it('should convert angular velocity to relative rotation', (done) => {
            callbackSink.callback = (frame: DataFrame) => {
                const linearVelocity = frame.source.getPosition().linearVelocity;
                done();
            };

            model.once('error', done);
            const frame = new DataFrame();
            const object = new DataObject();
            object.setPosition(new Absolute2DPosition(0, 0));
            frame.addSensor(new Accelerometer(undefined, new Acceleration(1, 0, 0), 1000));
            frame.addSensor(new Gyroscope(undefined, new AngularVelocity(0, 0, 90, AngularVelocityUnit.DEGREE_PER_SECOND), 1000));
            frame.source = object;

            Promise.resolve(model.push(frame));
        });
    });
});
