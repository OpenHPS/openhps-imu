import { expect } from 'chai';
import 'mocha';
import {
    DataObject,
    Magnetism,
    ModelBuilder,
    GraphBuilder,
    SourceNode,
    CallbackSinkNode,
    Model,
    NodeDataService,
    NodeData,
    DataFrame,
    Magnetometer,
} from '@openhps/core';
import { CSVDataSource } from '@openhps/csv';
import { MagnetometerCalibrationNode } from '../../src';

describe('node', () => {
    describe('processing', () => {
        describe('calibration', () => {
            describe('magnetometer', () => {
                it('should calibrate', (done) => {
                    const source = new CSVDataSource(
                        'test/data/imu/magnetometer_calibration.csv',
                        (row: any) => {
                            const frame = new DataFrame(new Magnetometer("M1", new Magnetism(
                                parseFloat(row['Bx']),
                                parseFloat(row['By']),
                                parseFloat(row['Bz']),
                            ), 1000 / 16));
                            return frame;
                        },
                        {
                            separator: ';',
                        },
                    );

                    ModelBuilder.create()
                        .addShape(
                            GraphBuilder.create()
                                .from((source as any) as SourceNode<any>)
                                .via(
                                    new MagnetometerCalibrationNode({
                                        count: 500,
                                        uid: 'magnetometer',
                                    }),
                                )
                                .to(
                                    new CallbackSinkNode((frame) => {
                                        frame.source;
                                    }),
                                ),
                        )
                        .build()
                        .then((model: Model) => {
                            let promise = model.pull();
                            for (let i = 1; i < 1000; i++) {
                                promise = promise.then(() => model.pull());
                            }
                            promise.then(() => {
                                // Check calibration
                                const service = model.findDataService(NodeData) as NodeDataService<NodeData>;
                                service
                                    .findData('magnetometer', 'M1')
                                    .then((data) => {
                                        expect(data.scaleX).to.not.be.NaN;
                                        expect(data.scaleY).to.not.be.NaN;
                                        expect(data.scaleZ).to.not.be.NaN;
                                        done();
                                    })
                                    .catch(done);
                            });
                        });
                }).timeout(10000);
            });
        });
    });
});
