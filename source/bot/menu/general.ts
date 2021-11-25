import {createBackMainMenuButtons} from 'grammy-inline-menu';

import {MyContext} from '../my-context.js';

export const backButtons = createBackMainMenuButtons<MyContext>(
	context => context.i18n.t('menu.back'),
	context => context.i18n.t('menu.main'),
);
