import {
    Acceleration,
    AngularVelocity,
    IMUSensorObject,
    IMUDataFrame,
    Quaternion,
    SourceNode,
    SourceNodeOptions,
} from '@openhps/core';

/**
 * IMU source using the HTML5 browser API for device motion and device orientation.
 *
 * @category Source node
 */
export class IMUBrowserSource extends SourceNode<IMUDataFrame> {
    constructor(options?: SourceNodeOptions) {
        super(options);

        this.once('build', this._onReady.bind(this));
    }

    private _onReady(): void {
        window.addEventListener(
            'devicemotion',
            (event) => {
                // Create a new data frame for the orientation change
                const dataFrame = new IMUDataFrame();
                dataFrame.acceleration = new Acceleration(
                    event.accelerationIncludingGravity.x,
                    event.accelerationIncludingGravity.y,
                    event.accelerationIncludingGravity.z,
                );
                dataFrame.angularVelocity = new AngularVelocity(
                    event.rotationRate.beta,
                    event.rotationRate.gamma,
                    event.rotationRate.alpha,
                );
                dataFrame.linearAcceleration = new Acceleration(
                    event.acceleration.x,
                    event.acceleration.y,
                    event.acceleration.z,
                );

                const source = this.source as IMUSensorObject;
                source.frequency = 1000 / event.interval;
                source.getPosition().angularVelocity = dataFrame.angularVelocity;

                dataFrame.absoluteOrientation = source.getPosition().orientation;
                dataFrame.source = source;
                dataFrame.frequency = source.frequency;

                this.push(dataFrame);
            },
            true,
        );

        window.addEventListener('deviceorientation', (event) => {
            const source = this.source as IMUSensorObject;
            source.getPosition().orientation = Quaternion.fromEuler([event.beta, event.gamma, event.alpha]);
        });

        this.logger('debug', {
            message: 'Browser orientation and motion events registered!',
        });
    }

    public onPull(): Promise<IMUDataFrame> {
        return new Promise<IMUDataFrame>((resolve) => {
            resolve(undefined);
        });
    }
}
