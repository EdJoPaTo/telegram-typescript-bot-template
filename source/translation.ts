import {readdir} from 'node:fs/promises';
import {Fluent} from '@moebius/fluent';

let AVAILABLE_LOCALES: readonly string[] = [];

export const fluent = new Fluent();

export async function loadLocales() {
	const entries = await readdir('locales');
	const locales = entries.filter(o => o.endsWith('.ftl')).map(o => o.replace(/\.ftl$/, ''));

	for (const locale of locales) {
		// eslint-disable-next-line no-await-in-loop
		await fluent.addTranslation({locales: locale, filePath: `locales/${locale}.ftl`});
	}

	AVAILABLE_LOCALES = locales;
}

export function getAvailableLocales(): readonly string[] {
	return AVAILABLE_LOCALES;
}
