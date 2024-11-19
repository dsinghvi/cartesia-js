/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The language that the given voice should speak the transcript in.
 *
 * Options: English (en), French (fr), German (de), Spanish (es), Portuguese (pt), Chinese (zh), Japanese (ja), Hindi (hi), Italian (it), Korean (ko), Dutch (nl), Polish (pl), Russian (ru), Swedish (sv), Turkish (tr).
 */
export type SupportedLanguage =
    | "en"
    | "fr"
    | "de"
    | "es"
    | "pt"
    | "zh"
    | "ja"
    | "hi"
    | "it"
    | "ko"
    | "nl"
    | "pl"
    | "ru"
    | "sv"
    | "tr";

export const SupportedLanguage = {
    En: "en",
    Fr: "fr",
    De: "de",
    Es: "es",
    Pt: "pt",
    Zh: "zh",
    Ja: "ja",
    Hi: "hi",
    It: "it",
    Ko: "ko",
    Nl: "nl",
    Pl: "pl",
    Ru: "ru",
    Sv: "sv",
    Tr: "tr",
} as const;
