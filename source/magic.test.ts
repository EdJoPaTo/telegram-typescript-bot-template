import {test} from 'node:test';
import {fightDragons} from './magic.ts';

await test('can battle the dragon', () => {
	fightDragons();
});
