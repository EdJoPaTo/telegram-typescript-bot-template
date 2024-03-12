import {MenuTemplate} from 'grammy-inline-menu';
import type {MyContext} from '../../my-context.js';
import {backButtons} from '../general.js';
import {menu as languageMenu} from './language.js';

export const menu = new MenuTemplate<MyContext>(ctx =>
	ctx.t('settings-body'),
);

menu.submenu('lang', languageMenu, {
	text: ctx => '🏳️‍🌈' + ctx.t('menu-language'),
});

menu.manualRow(backButtons);
