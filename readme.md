# telegram-typescript-bot-template

[![Dependency Status](https://david-dm.org/<%= githubUsername %>/<%= githubReponame %>/status.svg)](https://david-dm.org/<%= githubUsername %>/<%= githubReponame %>)
[![Dev Dependency Status](https://david-dm.org/<%= githubUsername %>/<%= githubReponame %>/dev-status.svg)](https://david-dm.org/<%= githubUsername %>/<%= githubReponame %>?type=dev)

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

The bot stores persistent data within the `persist` folder.
So also create this folder before starting it the first time.

```sh
$ mkdir persist
```

Then go ahead and start the bot

```sh
$ npm start
```

### On production

See the Dockerfile.
You can build a container from that.
But this repo isnt about containers.
For information about it take a look elsewhere.

The container is meant to be used with a secret containing your bot token: `/run/secrets/bot-token.txt`.
Alternativly you can supply it via an environment variable named `BOT_TOKEN`.

The container has one volume (`/app/persist`) which will contain persistent data your bot creates.
Make sure to explicitly use that volume (for example make sure its synced or pinned to a host in a multi node setup).

## Basic Folder structure

- `source` contains your TypeScript source files. Subfolders contain specifics about your implementation
  - `bot` for example contains files relevant for the telegram bot
    - `menu` for example contains a specific about the bot, the menu which is shown on /start
  - `magic` contains something relevant for doing magic. It is not relevant for the bot directly but used by it.
- `test` contains test files
- `locales` contains the translations of your bot. That way it can speak multiple languages.
- `dist` will contain the transpiled JavaScript files.
- `persist` will contain persistent data your bot uses. Make sure to keep that data persistent (Backups for example).

## Improve

You think something is missing?
Feel free to add it.
Then everyone can learn that even easier than before :)
