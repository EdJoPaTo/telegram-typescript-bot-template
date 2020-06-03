# telegram-typescript-bot-template

[![NPM Version](https://img.shields.io/npm/v/telegram-typescript-bot-template.svg)](https://www.npmjs.com/package/telegram-typescript-bot-template)
[![node](https://img.shields.io/node/v/telegram-typescript-bot-template.svg)](https://www.npmjs.com/package/telegram-typescript-bot-template)
[![Build Status](https://travis-ci.com/<%= githubUsername %>/telegram-typescript-bot-template.svg?branch=master)](https://travis-ci.com/<%= githubUsername %>/telegram-typescript-bot-template)
[![Dependency Status](https://david-dm.org/<%= githubUsername %>/telegram-typescript-bot-template/status.svg)](https://david-dm.org/<%= githubUsername %>/telegram-typescript-bot-template)
[![Dev Dependency Status](https://david-dm.org/<%= githubUsername %>/telegram-typescript-bot-template/dev-status.svg)](https://david-dm.org/<%= githubUsername %>/telegram-typescript-bot-template?type=dev)

> Template for Telegram bots written in TypeScript

If you havnt written TypeScript before dont be scared about it.
It is nearly the same as JavaScript.
But it does provide more helpful informations before something is going wrong on runtime.

I learned a lot about JavaScript when getting using TypeScript.


## Install

```sh
$ npm install
```


## Start the bot

### Locally for development

Write to the @BotFather on Telegram and create your bot.
You will get a token that looks like this: `123:abc`.
Create a file `bot-token.txt` and put it in there.

```sh
$ npm start
```

### On production

See the Dockerfile.
You can build a container from that.
But this repo isnt about containers.
Take a look about information about it elsewhere.

The container is meant to be used with a secret containing your bot token: `/run/secrets/bot-token.txt`

## Basic Folder structure

- `source` contains your TypeScript source files. Subfolders contain specifics about your implementation
  - `bot` for example contains files relevant for the telegram bot
    - `menu` for example contains a specific about the bot, the menu which is shown on /start
  - `magic` contains something relevant for doing magic. It is not relevant for the bot directly but used by it.
- `test` contains test files
- `locales` contains the translations of your bot. That way it can speak multiple languages.
- `dist` will contain the transpiled JavaScript files.

## Improve

You think something is missing?
Feel free to add it.
Then everyone can learn that even easier than before :)
