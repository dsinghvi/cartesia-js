/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Cartesia from "../../../../api/index";
import * as core from "../../../../core";
import { ContextId } from "./ContextId";

export const WebSocketBaseResponse: core.serialization.ObjectSchema<
    serializers.WebSocketBaseResponse.Raw,
    Cartesia.WebSocketBaseResponse
> = core.serialization.object({
    contextId: core.serialization.property("context_id", ContextId.optional()),
    statusCode: core.serialization.property("status_code", core.serialization.number()),
    done: core.serialization.boolean(),
});

export declare namespace WebSocketBaseResponse {
    interface Raw {
        context_id?: ContextId.Raw | null;
        status_code: number;
        done: boolean;
    }
}
