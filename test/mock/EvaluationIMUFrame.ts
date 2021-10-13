import { SerializableMember, SerializableObject } from "@openhps/core";
import { IMUDataFrame } from "../../src";

@SerializableObject()
export class EvaluationIMUFrame extends IMUDataFrame {
    @SerializableMember()
    public evaluationFrame: IMUDataFrame;
}
