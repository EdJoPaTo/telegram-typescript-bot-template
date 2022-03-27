import {Context as BaseContext, SessionFlavor} from 'grammy';
import {FluentContextFlavor} from '@grammyjs/fluent';

export interface Session {
	language_code?: string;
	page?: number;
}

export type MyContext = BaseContext & SessionFlavor<Session> & FluentContextFlavor;
