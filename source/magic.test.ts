import test from 'ava';
import {fightDragons} from './magic.js';

test('can battle the dragon', t => {
	t.notThrows(() => fightDragons());
});
