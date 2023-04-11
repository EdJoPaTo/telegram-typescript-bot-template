import {MenuTemplate} from 'grammy-inline-menu';
import type {MyContext} from '../my-context.js';
import {menu as settingsMenu} from './settings/index.js';

export const menu = new MenuTemplate<MyContext>(ctx => ctx.t('welcome', {name: ctx.from!.first_name}));

menu.url('Telegram API Documentation', 'https://core.telegram.org/bots/api');
menu.url('grammY Documentation', 'https://grammy.dev/');
menu.url('Inline Menu Documentation', 'https://github.com/EdJoPaTo/grammy-inline-menu');

menu.submenu(ctx => '⚙️' + ctx.t('menu-settings'), 'settings', settingsMenu);
