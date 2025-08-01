import {MenuTemplate} from 'grammy-inline-menu';
import {getAvailableLocales} from '../../../translation.ts';
import type {MyContext} from '../../my-context.ts';
import {backButtons} from '../general.ts';

export const menu = new MenuTemplate<MyContext>(ctx =>
	ctx.t('settings-language'));

menu.select('lang', {
	choices: getAvailableLocales,
	isSet: async (ctx, key) => await ctx.i18n.getLocale() === key,
	async set(ctx, key) {
		await ctx.i18n.setLocale(key);
		return true;
	},
});

menu.manualRow(backButtons);
