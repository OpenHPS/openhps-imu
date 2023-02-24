import { DataFrame, SerializableMember, SerializableObject } from "@openhps/core";

@SerializableObject()
export class EvaluationIMUFrame extends DataFrame {
    @SerializableMember()
    public evaluationFrame: DataFrame;
}
