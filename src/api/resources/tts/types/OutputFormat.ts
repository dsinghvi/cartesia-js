/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cartesia from "../../../index";

export type OutputFormat = Cartesia.OutputFormat.Raw | Cartesia.OutputFormat.Wav | Cartesia.OutputFormat.Mp3;

export declare namespace OutputFormat {
    interface Raw extends Cartesia.RawOutputFormat {
        container: "raw";
    }

    interface Wav extends Cartesia.WavOutputFormat {
        container: "wav";
    }

    interface Mp3 extends Cartesia.Mp3OutputFormat {
        container: "mp3";
    }
}
