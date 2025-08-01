import {start as startBot} from './bot/index.ts';
import {feedTheDragons} from './magic.ts';

feedTheDragons();

// eslint-disable-next-line @typescript-eslint/no-floating-promises
startBot();
