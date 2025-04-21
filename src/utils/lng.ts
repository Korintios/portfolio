import { TFunction } from "i18next";

export function getTranslatedArray<T>(t: TFunction, key: string, defaultValue: T[] = []): T[] {
	const raw = t(key, { returnObjects: true });
	return Array.isArray(raw) ? (raw as T[]) : defaultValue;
}
