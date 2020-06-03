import {Context as TelegrafContext} from 'telegraf';
import I18n from 'telegraf-i18n';

export interface Session {
	page?: number;
}

export interface MyContext extends TelegrafContext {
	i18n: I18n;
	session: Session;
}
