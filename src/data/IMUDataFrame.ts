import {
    SerializableObject,
    SerializableMember,
    DataFrame,
    Magnetism,
    Acceleration,
    LinearVelocity,
    AngularVelocity,
    Orientation,
} from '@openhps/core';

@SerializableObject()
export class IMUDataFrame extends DataFrame {
    @SerializableMember()
    frequency: number;
    @SerializableMember()
    magnetism: Magnetism;
    @SerializableMember()
    acceleration: Acceleration;
    @SerializableMember()
    linearAcceleration: Acceleration;
    @SerializableMember()
    gravity: Acceleration;
    @SerializableMember()
    relativeOrientation: Orientation;
    @SerializableMember()
    absoluteOrientation: Orientation;
    @SerializableMember()
    linearVelocity: LinearVelocity;
    @SerializableMember()
    angularVelocity: AngularVelocity;
}
