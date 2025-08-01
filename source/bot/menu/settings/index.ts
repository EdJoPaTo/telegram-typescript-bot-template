import {MenuTemplate} from 'grammy-inline-menu';
import type {MyContext} from '../../my-context.ts';
import {backButtons} from '../general.ts';
import {menu as languageMenu} from './language.ts';

export const menu = new MenuTemplate<MyContext>(ctx =>
	ctx.t('settings-body'));

menu.submenu('lang', languageMenu, {
	text: ctx => '🏳️‍🌈' + ctx.t('menu-language'),
});

menu.manualRow(backButtons);
