import type {Context as BaseContext, SessionFlavor} from 'grammy';
import type {I18nFlavor} from '@grammyjs/i18n';

export type Session = {
	page?: number;
};

export type MyContext = BaseContext & SessionFlavor<Session> & I18nFlavor;
