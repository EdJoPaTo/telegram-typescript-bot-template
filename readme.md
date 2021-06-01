# telegram-typescript-bot-template

[![dependencies Status](https://status.david-dm.org/gh/EdJoPaTo/telegram-typescript-bot-template.svg)](https://david-dm.org/EdJoPaTo/telegram-typescript-bot-template)
[![devDependencies Status](https://status.david-dm.org/gh/EdJoPaTo/telegram-typescript-bot-template.svg?type=dev)](https://david-dm.org/EdJoPaTo/telegram-typescript-bot-template?type=dev)

> Template for Telegram bots written in TypeScript

If you haven't written TypeScript before, don't be scared of it.
It is nearly the same as JavaScript.
But it provides more helpful information before something goes wrong during the runtime.

I learned a lot about JavaScript itself when I started diving into TypeScript.


## Install

```sh
$ npm install
```


## Start the bot

### Local development

Write to the @BotFather on Telegram and create your bot.
You will get a token that looks like this: `123:abc`.
Create a file `bot-token.txt` and put it in there.

The bot stores persistent data within the `persist` folder.
So also create this folder before starting it for the first time.

```sh
$ mkdir persist
```

Then go ahead and start the bot

```sh
$ npm start
```

### Production

See the Dockerfile.
You can build a container using it.
But this repo isn't about containers.
For more information about them, take a look elsewhere.

The container is meant to be used with a secret containing your bot token: `/run/secrets/bot-token.txt`.
Alternatively, you can supply it via the environment variable named `BOT_TOKEN`.

The container has one volume (`/app/persist`) which will contain persistent data your bot creates.
Make sure to explicitly use that volume (for example, make sure it's synced or tied to the host in a multi-node setup).

## Basic Folder structure example

- `source` contains your TypeScript source files. Subfolders contain specifics about your implementation
  - `bot` may contain files relevant for the telegram bot
    - `menu` may contain specifics about the bot, the menu that is shown on /start
  - `magic` may contain something relevant for doing magic. It is not relevant to the bot directly but it is used by it.
- `test` contains test files
- `locales` contains translation strings for your bot. That way it can speak multiple languages.
- `dist` will contain transpiled JavaScript files.
- `persist` will contain persistent data your bot uses. Make sure to keep that data persistent (Backups for example).

## Improve

Do you think something is missing?
Feel free to add it.
Then everyone can learn that even easier than before :)
