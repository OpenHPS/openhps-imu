import 'reflect-metadata';
import { expect } from 'chai';
import 'mocha';
import { AngularVelocity, CalibrationNode, DataFrame, Gyroscope, Model, ModelBuilder, Vector3 } from '@openhps/core';
import { IMUCalibrationService } from '../../src';

describe('IMUCalibrationService', () => {
    let model: Model;
    let service: IMUCalibrationService = new IMUCalibrationService();

    before((done) => {
        ModelBuilder.create()
            .addService(service)
            .from()
            .via(new CalibrationNode({
                service: IMUCalibrationService
            }))
            .to()
            .build().then(m => {
                model = m;
                done();
            });
    });

    describe('calibrate()', () => {
        
        it('should trigger user actions', (done) => {
            service.calibrate(1000, (step) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(); // User is ready
                    }, 10); // User reaction
                });
            }).then(() => {
                done();
            }).catch(done);
        });

        it('should perform calibration of the gyroscope', (done) => {
            service.calibrate(1000, (step) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(); // User is ready
                    }, 10); // User reaction
                });
            }).then(() => {
                done();
            }).catch(done);
            setTimeout(() => {
                const sensor = new Gyroscope('test');

                sensor.value = new AngularVelocity(1, 1, 1);
                model.push(new DataFrame(sensor.clone()))
                sensor.value = new AngularVelocity(2, 2, 2);
                model.push(new DataFrame(sensor.clone()))
                sensor.value = new AngularVelocity(3, 3, 3);
                model.push(new DataFrame(sensor.clone()))
            }, 100);
        });

    });
});
