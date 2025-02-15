/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Cartesia from "../../../../api/index";
import * as core from "../../../../core";

export const UpdateVoiceRequest: core.serialization.ObjectSchema<
    serializers.UpdateVoiceRequest.Raw,
    Cartesia.UpdateVoiceRequest
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string(),
});

export declare namespace UpdateVoiceRequest {
    interface Raw {
        name: string;
        description: string;
    }
}
