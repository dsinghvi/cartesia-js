import { Client } from "../lib/client";
import type {
	CloneOptions,
	CloneResponse,
	CreateVoice,
	HifiCloneOptions,
	LocalizeOptions,
	LocalizeResponse,
	MixVoicesOptions,
	MixVoicesResponse,
	UpdateVoice,
	Voice,
} from "../types";

export default class Voices extends Client {
	async list(): Promise<Voice[]> {
		const response = await this._fetch("/voices");
		return response.json();
	}

	async get(voiceId: string): Promise<Voice> {
		const response = await this._fetch(`/voices/${voiceId}`);
		return response.json();
	}

	async create(voice: CreateVoice): Promise<Voice> {
		const response = await this._fetch("/voices", {
			method: "POST",
			body: JSON.stringify(voice),
		});
		return response.json() as Promise<Voice>;
	}

	async update(id: string, voice: UpdateVoice): Promise<Voice> {
		const response = await this._fetch(`/voices/${id}`, {
			method: "PATCH",
			body: JSON.stringify(voice),
		});
		return response.json() as Promise<Voice>;
	}

	async clone(options: CloneOptions): Promise<CloneResponse> {
		if (options.mode === "clip") {
			const formData = new FormData();
			formData.append("clip", options.clip);
			if (options.enhance !== undefined) {
				formData.append("enhance", options.enhance.toString());
			}

			const response = await this._fetch("/voices/clone/clip", {
				method: "POST",
				body: formData,
			});
			return response.json();
		}

		throw new Error("Invalid mode for clone()");
	}

	async hifiClone(options: HifiCloneOptions): Promise<Voice> {
		if (options.mode !== "clip") {
			throw new Error("Invalid mode for hifiClone()");
		}

		const formData = new FormData();
		formData.append("clip", options.clip);
		formData.append("name", options.name);
		formData.append("description", options.description);
		formData.append("language", options.language);
		formData.append("model_id", options.model_id);
		if (options.enhance !== undefined) {
			formData.append("enhance", options.enhance.toString());
		}
		if (options.transcript) {
			formData.append("transcript", options.transcript);
		}
		if (options.base_voice_id) {
			formData.append("base_voice_id", options.base_voice_id);
		}

		const response = await this._fetch("/voices/clone/hifi", {
			method: "POST",
			body: formData,
		});

		if (!response.ok) {
			if (response.headers.get("content-type")?.includes("application/json")) {
				const errorData = await response.json();
				throw new Error(errorData.message || "HiFi clone failed");
			}
			const errorText = await response.text();
			throw new Error(errorText || "HiFi clone failed");
		}

		const data = await response.json();
		return data as Voice;
	}

	async mix(options: MixVoicesOptions): Promise<MixVoicesResponse> {
		const response = await this._fetch("/voices/mix", {
			method: "POST",
			body: JSON.stringify(options),
		});

		return response.json() as Promise<MixVoicesResponse>;
	}

	async localize(options: LocalizeOptions): Promise<LocalizeResponse> {
		const response = await this._fetch("/voices/localize", {
			method: "POST",
			body: JSON.stringify(options),
		});

		return response.json() as Promise<LocalizeResponse>;
	}
}
