import {MenuTemplate} from 'telegraf-inline-menu';

import {MyContext} from '../my-context.js';

import {menu as settingsMenu} from './settings/index.js';

export const menu = new MenuTemplate<MyContext>(context => context.i18n.t('welcome'));

menu.url('Telegram API Documentation', 'https://core.telegram.org/bots/api');
menu.url('Telegraf Documentation', 'https://telegraf.js.org/');
menu.url('Inline Menu Documentation', 'https://github.com/EdJoPaTo/telegraf-inline-menu');

menu.submenu(context => '⚙️' + context.i18n.t('menu.settings'), 'settings', settingsMenu);
