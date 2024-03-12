import {MenuTemplate} from 'grammy-inline-menu';
import {getAvailableLocales} from '../../../translation.js';
import type {MyContext} from '../../my-context.js';
import {backButtons} from '../general.js';

export const menu = new MenuTemplate<MyContext>(ctx =>
	ctx.t('settings-language'),
);

menu.select('lang', {
	choices: getAvailableLocales,
	isSet: async (ctx, key) => await ctx.i18n.getLocale() === key,
	async set(ctx, key) {
		await ctx.i18n.setLocale(key);
		return true;
	},
});

menu.manualRow(backButtons);
