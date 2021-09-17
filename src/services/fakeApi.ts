import { songInterface, songs } from "../fakeData";

interface getSong {
	data: songInterface | undefined
}

export function getSong(id: number): Promise<getSong> {
	return new Promise((resolve, reject) => {

		const song = songs.find(song => song.id === id);

		setTimeout(() => {
			if (Math.random() > .5) {
				resolve({
					data: song
				})
			} else {
				reject('Error...')
			}
		}, 0)

	})
}

interface getSongList {
	data: Array<songInterface> | []
}

export function getSongList(selected: string): Promise<getSongList> {
	return new Promise((resolve) => {

		const filtered = songs.filter(song => song.color === selected);

		setTimeout(() => {
			resolve({
				data: selected ? filtered : songs,
			})
		}, 0)

	})
}