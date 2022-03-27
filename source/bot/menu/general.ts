import {createBackMainMenuButtons} from 'grammy-inline-menu';

import {MyContext} from '../my-context.js';

export const backButtons = createBackMainMenuButtons<MyContext>(
	ctx => ctx.i18n.t('menu.back'),
	ctx => ctx.i18n.t('menu.main'),
);
