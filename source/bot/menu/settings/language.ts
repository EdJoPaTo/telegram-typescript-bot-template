import {MenuTemplate} from 'grammy-inline-menu';

import {backButtons} from '../general.js';
import {getAvailableLocales} from '../../../translation.js';
import {MyContext} from '../../my-context.js';

export const menu = new MenuTemplate<MyContext>(ctx => ctx.t('settings-language'));

menu.select('lang', getAvailableLocales, {
	isSet: (ctx, key) => (ctx.session.language_code ?? ctx.from?.language_code ?? 'en') === key,
	async set(ctx, key) {
		ctx.session.language_code = key;
		await ctx.fluent.renegotiateLocale();
		return true;
	},
});

menu.manualRow(backButtons);
