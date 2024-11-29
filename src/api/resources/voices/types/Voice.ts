/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cartesia from "../../../index";

export interface Voice {
    id: Cartesia.VoiceId;
    /** The ID of the user who owns the voice. */
    user_id: string;
    /** Whether the voice is publicly accessible. */
    is_public: boolean;
    /** The name of the voice. */
    name: string;
    /** The description of the voice. */
    description: string;
    /** The date and time the voice was created. */
    created_at: string;
    embedding: Cartesia.Embedding;
    language: Cartesia.SupportedLanguage;
    base_voice_id?: Cartesia.BaseVoiceId;
}
