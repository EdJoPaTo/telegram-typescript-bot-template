import test from 'ava';

import {fightDragons} from '../source/magic';

test('can battle the dragon', t => {
	t.notThrows(() => fightDragons());
});
