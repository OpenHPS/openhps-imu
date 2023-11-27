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
    DataFrame,
    Accelerometer,
    KalmanFilterNode,
} from '@openhps/core';
import {
    AccelerationProcessingNode,
} from '../../src';

describe('node', () => {
    describe('processing acceleration', () => {
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
                .via(new KalmanFilterNode(
                    (object: Accelerometer) => { // Select the property that you want to filter
                        return [{ 
                            key: "accelerometer-value-blahblah",    // Key ensures the name of the value for storage
                            value: object.value                     // Value that we want to filter
                        }];	
                    },
                    (key: string, value: Acceleration, object: Accelerometer) => { // Modify the property
                        object.value = value;   // Value is the filtered value, so we update it
                    },
                    {   // @see {@link https://cheever.domains.swarthmore.edu/Ref/Kalman/MatrixKalman.html}
                        R: 1,   // measurement noise covariance
                        A: 1,   // state gain
                        B: 1,   // input gain
                        C: 1,   // measurement vector
                        Q: 1,   // process noice covariance
                        objectFilter: (object: DataObject) => object instanceof Accelerometer, // Only filter accelerometers
                    },
                ))
                .via(new AccelerationProcessingNode())
                .to(callbackSink)
                .build()
                .then((m) => {
                    model = m;
                    done();
                });
        });

        it('should convert acceleration to linear velocity', (done) => {
            callbackSink.callback = (frame: DataFrame) => {
                const linearVelocity = frame.source.getPosition().velocity.linear;
                console.log(linearVelocity);
                done();
            };

            const frame = new DataFrame();
            const object = new DataObject();
            object.setPosition(new Absolute2DPosition(0, 0));
            frame.addSensor(new Accelerometer("A1",  new Acceleration(1, 0, 0), 1000));
            frame.source = object;

            Promise.resolve(model.push(frame));
        });
    });
});
