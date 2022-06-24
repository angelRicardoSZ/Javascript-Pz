import { Album } from "./album"; 
export class User {
	private album: Album[];

	constructor(private id: number, private username: string, private firstName: string, private isPro: boolean) {
		this.album = [];
	}

	addAlbum(album: Album) {
		this.album.push(album);
	}
	removeAlbum(album: Album) : Album | undefined{
		const indexAlbum = this.album.findIndex(a => a.id === album.id)
		let deletedAlbum;
		if (indexAlbum >= 0) {
			deletedAlbum = this.album[indexAlbum]
			this.album.splice(indexAlbum,1)
		}
		return deletedAlbum;
	}


}