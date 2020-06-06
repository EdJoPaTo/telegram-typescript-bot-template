import {existsSync, readFileSync} from 'fs';

import {MenuMiddleware} from 'telegraf-inline-menu';
import {Telegraf} from 'telegraf';
// TODO: Something about telegraf-i18n is typed wrong. It requires esModuleInterop to work…
import TelegrafI18n from 'telegraf-i18n';
import TelegrafSessionLocal from 'telegraf-session-local';

import {fightDragons, danceWithFairies} from '../magic';

import {MyContext} from './my-context';
import {menu} from './menu';

const tokenFilePath = existsSync('/run/secrets') ? '/run/secrets/bot-token.txt' : 'bot-token.txt';
const token = readFileSync(tokenFilePath, 'utf8').trim();
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

// TODO: wait for release of telegraf 3.39. Then the bot.catch is properly typed in TypeScript
// Merged but not released yet: https://github.com/telegraf/telegraf/pull/1015
bot.catch((error: any) => {
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
	console.log(new Date(), 'Bot started as', bot.options.username);
}
