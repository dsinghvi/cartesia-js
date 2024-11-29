/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cartesia from "../../../index";

export interface GenerationRequest {
    /** The ID of the model to use for the generation. See [Models](/build-with-sonic/models) for available models. */
    modelId: string;
    transcript: string;
    voice: Cartesia.TtsRequestVoiceSpecifier;
    language?: Cartesia.SupportedLanguage;
    outputFormat: Cartesia.WebSocketRawOutputFormat;
    /**
     * The maximum duration of the audio in seconds. You do not usually need to specify this.
     * If the duration is not appropriate for the length of the transcript, the output audio may be truncated.
     */
    duration?: number;
    contextId: Cartesia.ContextId;
    /**
     * Whether this input may be followed by more inputs.
     * If not specified, this defaults to `false`.
     */
    continue?: boolean;
    /** Whether to return word-level timestamps. */
    addTimestamps?: boolean;
}
