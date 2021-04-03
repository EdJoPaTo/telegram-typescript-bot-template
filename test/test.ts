import test from 'ava';

import {fightDragons} from '../source/magic/index.js';

test('can battle the dragon', t => {
	t.notThrows(() => fightDragons());
});
