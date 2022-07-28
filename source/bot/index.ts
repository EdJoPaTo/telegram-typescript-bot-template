import * as process from 'node:process';

import {Bot, session} from 'grammy';
import {FileAdapter} from '@grammyjs/storage-file';
import {generateUpdateMiddleware} from 'telegraf-middleware-console-time';
import {html as format} from 'telegram-format';
import {MenuMiddleware} from 'grammy-inline-menu';
import {useFluent} from '@grammyjs/fluent';

import {fightDragons, danceWithFairies} from '../magic.js';
import {fluent, loadLocales} from '../translation.js';
import {menu} from './menu/index.js';
import {MyContext, Session} from './my-context.js';

const token = process.env['BOT_TOKEN'];
if (!token) {
	throw new Error('You have to provide the bot-token from @BotFather via environment variable (BOT_TOKEN)');
}

const bot = new Bot<MyContext>(token);

bot.use(session({
	initial: (): Session => ({}),
	storage: new FileAdapter(),
}));

bot.use(useFluent({
	defaultLocale: 'en',
	fluent,
	localeNegotiator: ctx => ctx.session.language_code ?? ctx.from?.language_code ?? 'en',
}));

if (process.env['NODE_ENV'] !== 'production') {
	// Show what telegram updates (messages, button clicks, ...) are happening (only in development)
	bot.use(generateUpdateMiddleware());
}

bot.command('help', async ctx => ctx.reply(ctx.t('help')));

bot.command('magic', async ctx => {
	const combatResult = fightDragons();
	const fairyThoughts = danceWithFairies();

	let text = '';
	text += combatResult;
	text += '\n\n';
	text += fairyThoughts;

	return ctx.reply(text);
});

bot.command('html', async ctx => {
	let text = '';
	text += format.bold('Some');
	text += ' ';
	text += format.spoiler('HTML');
	await ctx.reply(text, {parse_mode: format.parse_mode});
});

const menuMiddleware = new MenuMiddleware('/', menu);
bot.command('start', async ctx => menuMiddleware.replyToContext(ctx));
bot.command('settings', async ctx => menuMiddleware.replyToContext(ctx, '/settings/'));
bot.use(menuMiddleware.middleware());

bot.catch(error => {
	console.error('ERROR on handling update occured', error);
});

export async function start(): Promise<void> {
	await loadLocales();

	// The commands you set here will be shown as /commands like /start or /magic in your telegram client.
	await bot.api.setMyCommands([
		{command: 'start', description: 'open the menu'},
		{command: 'magic', description: 'do magic'},
		{command: 'html', description: 'some html _mode example'},
		{command: 'help', description: 'show the help'},
		{command: 'settings', description: 'open the settings'},
	]);

	await bot.start({
		onStart(botInfo) {
			console.log(new Date(), 'Bot starts as', botInfo.username);
		},
	});
}
