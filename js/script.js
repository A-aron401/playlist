let song1 = {
    artist:" 070Shake ",
    songName:" Guilty Conscience ",
    songimg:"https://images.genius.com/67273ef0e66a1fc4c54b6451e678da88.1000x1000x1.jpg",
    length:' 3:35 ',
    link:" https://www.youtube.com/watch?v=X0t8zeEiqEY "
}
let song2 ={
    artist:" Summer Walker ",
    songName:" Potential ",
    songimg:"https://media.pitchfork.com/photos/5d97a05532a22700089555c5/1:1/w_320/overit.jpeg",
    length:" 2:56 ",
    link:" https://www.youtube.com/watch?v=ebckRRogyx0 "
}
let song3 ={
     artist:" Zendaya,Laberinth ",
    songName:" All for us ",
    songimg:"https://m.media-amazon.com/images/I/81Knq0TQueL._SS500_.jpg",
    length:" 3:14 ",
    link:" https://www.youtube.com/watch?v=k-9DOwrLdkg "
}
let song4 ={
     artist:" BROCKHAMPTON ",
    songName:" Sugar ",
    songimg:"https://images.genius.com/6556a7bc436345dc5a0ebd14a7008317.1000x1000x1.jpg",
    length:" 3:25 ",
    link:" https://www.youtube.com/watch?v=kUpnbnunETE "
}
let song5 ={
     artist:" billie eilish ",
    songName:" everything i wanted ",
    songimg:"https://cdn.shopify.com/s/files/1/2171/7009/products/everythingFlexi_1024x.png?v=1573762313",
    length:' 4:07 ',
    link:" https://www.youtube.com/watch?v=EgBJmlPo8Xw "
}
let song6 ={
     artist:" Doja Cat ",
    songName:" Say so ",
    songimg:"https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Doja_Cat_-_Hot_Pink.png/220px-Doja_Cat_-_Hot_Pink.png",
    length:' 3:59 ',
    link:" https://www.youtube.com/watch?v=uAYG46w1SCA "
}
let song7 ={
     artist:" Sza ",
    songName:" Garden ",
    songimg:"https://upload.wikimedia.org/wikipedia/en/b/bf/SZA_-_Ctrl_cover.png",
    length:' 3:31 ',
    link:" https://www.youtube.com/watch?v=HTgUwtoLl_o "
}
let song8 ={
     artist:" 070Shake ",
    songName:" Glitter ",
    songimg:"https://upload.wikimedia.org/wikipedia/en/0/06/070_Glitter_EP_Cover.jpg",
    length:" 4:19 ",
    link:" https://www.youtube.com/watch?v=2Qk6MR75-KI "
}
let song9 ={
     artist:" Bazzi ",
    songName:" Paradise ",
    songimg:"https://images.genius.com/093f70e1f1eaeab9125e380e4a27b466.1000x1000x1.jpg",
    length:" 2:49 ",
    link:" https://www.youtube.com/watch?v=2Qk6MR75-KI "
}
let song10 ={
     artist:" Lana Del Ray ",
    songName:" Doin Time ",
    songimg:"https://www.nme.com/wp-content/uploads/2019/08/Lana-Del-Rey-Norman-Fucking-Rockwell-1.jpg",
    length:" 4:26 ",
    link:" https://www.youtube.com/watch?v=x90WLRa5uGo "
}
let song11 ={
     artist:" Melanie Martinez ",
    songName:" Recess ",
    songimg:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Melanie_Martinez_-_K-12.png/220px-Melanie_Martinez_-_K-12.png",
    length:" 3:51 ",
    link:" https://www.youtube.com/watch?v=qolmz4FlnZ0 "
}
let song12 ={
     artist:" Summer Walker ",
    songName:" Come thru ",
    songimg:"https://media.pitchfork.com/photos/5d97a05532a22700089555c5/1:1/w_320/overit.jpeg",
    length:" 3:00 ",
    link:" https://www.youtube.com/watch?v=JPmedvFuhNw "
}
var allSongs =[song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11,song12];
 allSongs.forEach(function(song) {
    $(".songArtist").append(song.artist);
    $(".songName").append(song.songName);
    $(".songLength").append(song.length);
    $(".songLink").append(song.link);
    $(".songImage").append(`<img class="album" src="${song.songimg}"></img>`);
 })
 