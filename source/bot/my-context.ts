import type {I18nFlavor} from '@grammyjs/i18n';
import type {Context as BaseContext, SessionFlavor} from 'grammy';

export type Session = {
	page?: number;
};

export type MyContext = BaseContext & SessionFlavor<Session> & I18nFlavor;
