import {MenuTemplate} from 'telegraf-inline-menu';

import {backButtons} from '../general.js';
import {MyContext} from '../../my-context.js';

import {menu as languageMenu} from './language.js';

export const menu = new MenuTemplate<MyContext>(context => context.i18n.t('settings.body'));

menu.submenu(context => '🏳️‍🌈' + context.i18n.t('menu.language'), 'lang', languageMenu);

menu.manualRow(backButtons);
