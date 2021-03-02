import {
    SerializableObject,
    SerializableMember,
    DataFrame,
    Magnetism,
    Acceleration,
    LinearVelocity,
    AngularVelocity,
    Quaternion,
} from '@openhps/core';

@SerializableObject()
export class IMUDataFrame extends DataFrame {
    @SerializableMember()
    public frequency: number;
    @SerializableMember()
    public magnetism: Magnetism;
    @SerializableMember()
    public acceleration: Acceleration;
    @SerializableMember()
    public linearAcceleration: Acceleration;
    @SerializableMember()
    public gravity: Acceleration;
    @SerializableMember()
    public relativeOrientation: Quaternion;
    @SerializableMember()
    public absoluteOrientation: Quaternion;
    @SerializableMember()
    public geomagneticOrientation: Quaternion;
    @SerializableMember()
    public linearVelocity: LinearVelocity;
    @SerializableMember()
    public angularVelocity: AngularVelocity;
}
