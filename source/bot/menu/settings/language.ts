import {MenuTemplate} from 'grammy-inline-menu';
import {I18n} from '@grammyjs/i18n';

import {MyContext} from '../../my-context.js';

import {backButtons} from '../general.js';

const availableLocales = new I18n({directory: 'locales'}).availableLocales();

export const menu = new MenuTemplate<MyContext>(ctx => ctx.i18n.t('settings.language'));

menu.select('lang', availableLocales, {
	isSet: (ctx, key) => ctx.i18n.locale() === key,
	set(ctx, key) {
		ctx.i18n.locale(key);
		return true;
	},
});

menu.manualRow(backButtons);
