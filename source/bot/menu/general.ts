import {createBackMainMenuButtons} from 'grammy-inline-menu';
import type {MyContext} from '../my-context.js';

export const backButtons = createBackMainMenuButtons<MyContext>(
	ctx => ctx.t('menu-back'),
	ctx => ctx.t('menu-main'),
);
