import {MenuTemplate} from 'grammy-inline-menu';
import {backButtons} from '../general.js';
import type {MyContext} from '../../my-context.js';
import {menu as languageMenu} from './language.js';

export const menu = new MenuTemplate<MyContext>(ctx => ctx.t('settings-body'));

menu.submenu(ctx => '🏳️‍🌈' + ctx.t('menu-language'), 'lang', languageMenu);

menu.manualRow(backButtons);
