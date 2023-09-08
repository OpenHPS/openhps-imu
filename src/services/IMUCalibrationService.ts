import { Service, SourceNode } from "@openhps/core";

/**
 * IMU calibration service
 */
export class IMUCalibrationService extends Service {
    protected node: SourceNode;

    constructor() {
        super();
        this.on('build', this._onBuild.bind(this));
    }

    private _onBuild(): Promise<void> {
        return new Promise((resolve, reject) => {

        });
    }

    calibrate(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.node.pull()
        });
    }
}

export interface IMUCalibrationOptions {

}
