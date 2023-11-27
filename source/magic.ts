export function feedTheDragons(): void {
	// Sometimes you need to initialize stuff.
	// Like feeding dragons before you can fight them all day long.
	console.log('Feed the dragons…');

	console.log(
		'Looks like they arnt hungry anymore. But somehow the poeple helping you transporting the food are gone too…',
	);
}

export function fightDragons(): string {
	// In a folder like this you can do stuff not directly related to your Telegram bot.
	// When your bot will need to fight dragons but doesnt do it by itself this is the right place to do it.
	return 'Fought the dragon. Dragon vanished. No treasure. Sad.';
}

export function danceWithFairies(): string {
	const thoughtsWhileDancing = [
		'No one else can see the fairies but you.',
		'People think you are crazy.',
		'But that is ok.',
		'Everyone is.',
	];

	return thoughtsWhileDancing.join('\n');
}
