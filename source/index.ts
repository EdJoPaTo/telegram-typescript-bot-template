import {feedTheDragons} from './magic/index.js';
import {start as startBot} from './bot/index.js';

feedTheDragons();

// eslint-disable-next-line @typescript-eslint/no-floating-promises
startBot();
