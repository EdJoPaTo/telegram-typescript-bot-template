import type {Context as BaseContext, SessionFlavor} from 'grammy';
import type {FluentContextFlavor} from '@grammyjs/fluent';

export type Session = {
	language_code?: string;
	page?: number;
};

export type MyContext = BaseContext & SessionFlavor<Session> & FluentContextFlavor;
