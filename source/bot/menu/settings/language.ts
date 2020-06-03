import {MenuTemplate} from 'telegraf-inline-menu';

import {MyContext} from '../../my-context';

import {backButtons} from '../general';

export const menu = new MenuTemplate<MyContext>(context => context.i18n.t('settings.language'));

// TODO: find out why context.i18n.availableLocales() doesnt work
menu.select('lang', ['en', 'de'], {
	isSet: (context, key) => context.i18n.locale() === key,
	set: (context, key) => {
		context.i18n.locale(key);
	}
});

menu.manualRow(backButtons);
