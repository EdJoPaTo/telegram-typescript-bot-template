import {start as startBot} from './bot/index.js';
import {feedTheDragons} from './magic.js';

feedTheDragons();

// eslint-disable-next-line @typescript-eslint/no-floating-promises
startBot();
