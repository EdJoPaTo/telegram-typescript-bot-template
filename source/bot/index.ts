import {existsSync, readFileSync} from 'fs';

import {I18n as TelegrafI18n} from '@edjopato/telegraf-i18n';
import {MenuMiddleware} from 'telegraf-inline-menu';
import {Telegraf} from 'telegraf';
import * as TelegrafSessionLocal from 'telegraf-session-local';

import {fightDragons, danceWithFairies} from '../magic';

import {MyContext} from './my-context';
import {menu} from './menu';

const token = (existsSync('/run/secrets/bot-token.txt') && readFileSync('/run/secrets/bot-token.txt', 'utf8').trim()) ||
	(existsSync('bot-token.txt') && readFileSync('bot-token.txt', 'utf8').trim()) ||
	process.env.BOT_TOKEN;
if (!token) {
	throw new Error('You have to provide the bot-token from @BotFather via file (bot-token.txt) or environment variable (BOT_TOKEN)');
}

const bot = new Telegraf<MyContext>(token);

const localSession = new TelegrafSessionLocal({
	database: 'persist/sessions.json'
});

bot.use(localSession.middleware());

const i18n = new TelegrafI18n({
	directory: 'locales',
	defaultLanguage: 'en',
	defaultLanguageOnMissing: true,
	useSession: true
});

bot.use(i18n.middleware());

bot.command('help', async context => context.reply(context.i18n.t('help')));

bot.command('magic', async context => {
	const combatResult = fightDragons();
	const fairyThoughts = danceWithFairies();

	let text = '';
	text += combatResult;
	text += '\n\n';
	text += fairyThoughts;

	return context.reply(text);
});

const menuMiddleware = new MenuMiddleware('/', menu);
bot.command('start', async context => menuMiddleware.replyToContext(context));
bot.command('settings', async context => menuMiddleware.replyToContext(context, '/settings/'));
bot.use(menuMiddleware.middleware());

bot.catch(error => {
	console.error('telegraf error occured', error);
});

export async function start(): Promise<void> {
	// The commands you set here will be shown as /commands like /start or /magic in your telegram client.
	await bot.telegram.setMyCommands([
		{command: 'start', description: 'open the menu'},
		{command: 'magic', description: 'do magic'},
		{command: 'help', description: 'show the help'},
		{command: 'settings', description: 'open the settings'}
	]);

	await bot.launch();
	console.log(new Date(), 'Bot started as', bot.botInfo?.username);
}
