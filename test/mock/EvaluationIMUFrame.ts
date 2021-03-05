import { IMUDataFrame, SerializableMember, SerializableObject } from "@openhps/core";

@SerializableObject()
export class EvaluationIMUFrame extends IMUDataFrame {
    @SerializableMember()
    public evaluationFrame: IMUDataFrame;
}
