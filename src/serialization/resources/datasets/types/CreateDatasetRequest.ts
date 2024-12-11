/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Cartesia from "../../../../api/index";
import * as core from "../../../../core";

export const CreateDatasetRequest: core.serialization.ObjectSchema<
    serializers.CreateDatasetRequest.Raw,
    Cartesia.CreateDatasetRequest
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace CreateDatasetRequest {
    interface Raw {
        name: string;
    }
}
