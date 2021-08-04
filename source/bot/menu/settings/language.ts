import {MenuTemplate} from 'telegraf-inline-menu';
import {I18n} from '@grammyjs/i18n';

import {MyContext} from '../../my-context.js';

import {backButtons} from '../general.js';

const availableLocales = new I18n({directory: 'locales'}).availableLocales();

export const menu = new MenuTemplate<MyContext>(context => context.i18n.t('settings.language'));

menu.select('lang', availableLocales, {
	isSet: (context, key) => context.i18n.locale() === key,
	set: (context, key) => {
		context.i18n.locale(key);
		return true;
	},
});

menu.manualRow(backButtons);
