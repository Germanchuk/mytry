export interface songInterface {
	id: number
	title: string
	bpm: number
	key: string
	color: string
}

export interface Part {
	text: string
	id: number
	title: string
}

export const songs: Array<songInterface> = [
	{
		id: 1,
		color: '#ffc107',
		title: 'Oceans',
		bpm: 128,
		key: 'Bm',
	},
	{
		id: 2,
		color: '#ffc107',
		title: 'Way Maker',
		bpm: 72,
		key: 'D',
	},
	{
		id: 3,
		color: '#03a9f4',
		title: 'King of my heart',
		bpm: 70,
		key: 'G',
	},
	{
		id: 4,
		color: '#8bc34a',
		title: 'Under the Bridge',
		bpm: 128,
		key: 'Bm',
	},
	{
		id: 5,
		color: '#ffc107',
		title: 'Ride',
		bpm: 72,
		key: 'D',
	},
	{
		id: 6,
		color: '#03a9f4',
		title: 'No Longer',
		bpm: 70,
		key: 'G',
	},
	{
		id: 7,
		color: '#8bc34a',
		title: 'Holiday',
		bpm: 128,
		key: 'Bm',
	},
	{
		id: 8,
		color: '#03a9f4',
		title: 'Na na na',
		bpm: 72,
		key: 'D',
	},
	{
		id: 9,
		color: '#8bc34a',
		title: 'Wake',
		bpm: 70,
		key: 'G',
	},
	{
		id: 10,
		color: '#03a9f4',
		title: 'Toxic city',
		bpm: 128,
		key: 'Bm',
	},
	{
		id: 11,
		color: '#8bc34a',
		title: 'Rosenrot',
		bpm: 72,
		key: 'D',
	},
	{
		id: 12,
		color: '#03a9f4',
		title: 'My mind',
		bpm: 70,
		key: 'G',
	},
	{
		id: 13,
		color: '#8bc34a',
		title: 'Integer',
		bpm: 128,
		key: 'Bm',
	},
	{
		id: 14,
		color: '#ffc107',
		title: 'No solutions',
		bpm: 72,
		key: 'D',
	},
	{
		id: 15,
		color: '#03a9f4',
		title: 'Table & chair',
		bpm: 70,
		key: 'G',
	},
	{
		id: 16,
		color: '#8bc34a',
		title: 'Sweet donuts',
		bpm: 128,
		key: 'Bm',
	},
	{
		id: 17,
		color: '#8bc34a',
		title: 'My randomiser',
		bpm: 72,
		key: 'D',
	},
	{
		id: 18,
		color: '#03a9f4',
		title: 'Never again',
		bpm: 70,
		key: 'G',
	},
	{
		id: 19,
		color: '#8bc34a',
		title: 'Sometimes',
		bpm: 128,
		key: 'Bm',
	},
	{
		id: 20,
		color: '#03a9f4',
		title: 'Joke',
		bpm: 72,
		key: 'D',
	},
	{
		id: 21,
		color: '#8bc34a',
		title: 'Road home',
		bpm: 70,
		key: 'G',
	},
];

export const partsExample: Array<Part> = [
	{
		id: 1,
		title: 'Verse 1',
		text: 'You call me out upon the waters\nThe great unknown\nWhere feet may fail\nAnd there I find You in the mystery\nIn oceans deep\nMy faith will stand',
	},
	{
		id: 2,
		title: 'Chorus',
		text: 'And I will call upon Your name\nAnd keep my eyes above the waves\nWhen oceans rise\nMy soul will rest in Your embrace\nFor I am Yours\nYou are mine',
	},
	{
		id: 3,
		title: 'Verse 2',
		text: 'Your grace abounds in deepest waters\nYour sovereign hand\nWill be my guide\nWhere feet may fail and fear surrounds me\nYou`ve never failed\nAnd You won`t start now',
	},
	{
		id: 4,
		title: 'Chorus',
		text: 'And I will call upon Your name\nAnd keep my eyes above the waves\nWhen oceans rise\nMy soul will rest in Your embrace\nFor I am Yours\nYou are mine',
	},
	{
		id: 5,
		title: 'Bridge',
		text: 'Spirit lead me where my trust is without borders\nLet me walk upon the waters\nWherever You would call me\nTake me deeper than my feet could ever wander\nAnd my faith will be made stronger\nIn the presence of my Savior',
	},
	{
		id: 6,
		title: 'Bridge',
		text: 'Spirit lead me where my trust is without borders\nLet me walk upon the waters\nWherever You would call me\nTake me deeper than my feet could ever wander\nAnd my faith will be made stronger\nIn the presence of my Savior',
	},
	{
		id: 7,
		title: 'Bridge',
		text: 'Spirit lead me where my trust is without borders\nLet me walk upon the waters\nWherever You would call me\nTake me deeper than my feet could ever wander\nAnd my faith will be made stronger\nIn the presence of my Savior',
	},
	{
		id: 8,
		title: 'Chorus',
		text: 'And I will call upon Your name\nAnd keep my eyes above the waves\nWhen oceans rise\nMy soul will rest in Your embrace\nFor I am Yours\nYou are mine',
	},
];