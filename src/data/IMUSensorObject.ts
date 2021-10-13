import { SerializableObject, SerializableMember, DataObject, Magnetism, Acceleration } from '@openhps/core';

@SerializableObject()
export class IMUSensorObject extends DataObject {
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
}
