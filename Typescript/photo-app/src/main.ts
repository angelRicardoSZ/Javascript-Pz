import { User, Album, Picture, PhotoOrientation } from "./photo-app"; 
const user = new User(1, "angelR","san",true);
const album = new Album(10,"Album 1")
const picture = new Picture(2,"PicTitle", "2020", PhotoOrientation.Panorama)
user.addAlbum(album)
album.addPicture(picture);
console.log("user",user)