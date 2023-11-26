import {test} from 'node:test';
import {fightDragons} from './magic.js';

await test('can battle the dragon', () => {
	fightDragons();
});
