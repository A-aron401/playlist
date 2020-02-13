var songNames=['Guilty Conscience','Potential','All for us','SUGAR','everything i wanted','Say So','Garden','Glitter','Paradise','Doin Time','Recess','Come Thru'];
 var songImage=["https://images.genius.com/67273ef0e66a1fc4c54b6451e678da88.1000x1000x1.jpg","https://media.pitchfork.com/photos/5d97a05532a22700089555c5/1:1/w_320/overit.jpeg","https://m.media-amazon.com/images/I/81Knq0TQueL._SS500_.jpg","https://images.genius.com/6556a7bc436345dc5a0ebd14a7008317.1000x1000x1.jpg","https://cdn.shopify.com/s/files/1/2171/7009/products/everythingFlexi_1024x.png?v=1573762313","https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Doja_Cat_-_Hot_Pink.png/220px-Doja_Cat_-_Hot_Pink.png","https://upload.wikimedia.org/wikipedia/en/b/bf/SZA_-_Ctrl_cover.png","https://upload.wikimedia.org/wikipedia/en/0/06/070_Glitter_EP_Cover.jpg","https://images.genius.com/093f70e1f1eaeab9125e380e4a27b466.1000x1000x1.jpg","https://www.nme.com/wp-content/uploads/2019/08/Lana-Del-Rey-Norman-Fucking-Rockwell-1.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Melanie_Martinez_-_K-12.png/220px-Melanie_Martinez_-_K-12.png","https://media.pitchfork.com/photos/5d97a05532a22700089555c5/1:1/w_320/overit.jpeg"]
 var songArtist=['070 Shake', 'Summer Walker','Laberinth,Zendaya','BROCKHAMPTON',' billie eilish','Doja Cat','SZA','070 Shake','Bazzi','Lana del ray','Melanie Martinez','Summer Walker']
 var songLength=['3:35','2:56','3:14','3:25','4:07','3:59','3:31','4:19','2:49','4:26','3:51','3:00']
 var songLink=['https://www.youtube.com/watch?v=X0t8zeEiqEY','https://www.youtube.com/watch?v=ebckRRogyx0','https://www.youtube.com/watch?v=k-9DOwrLdkg','https://www.youtube.com/watch?v=kUpnbnunETE','https://www.youtube.com/watch?v=EgBJmlPo8Xw','https://www.youtube.com/watch?v=uAYG46w1SCA','https://www.youtube.com/watch?v=HTgUwtoLl_o','https://www.youtube.com/watch?v=2Qk6MR75-KI','https://www.youtube.com/watch?v=x90WLRa5uGo','https://www.youtube.com/watch?v=qolmz4FlnZ0','https://www.youtube.com/watch?v=WH8QnOdlrQg','https://www.youtube.com/watch?v=JPmedvFuhNw']
songNames.forEach(function(song) {
    $(".songName").append("<p class='songs'>"+ song + "</p>");
})
 songImage.forEach(function(image) {
    $(".songImage").append(`<img class="album" src="${image}">`);
 })
 songArtist.forEach(function(name) {
    $(".songArtist").append("<p class='names'>"+ name + "</p>");
 }) 
 songLength.forEach(function(time) {
    $(".songLength").append("<p class='time'>"+ time + "</p>");
 })
 songLink.forEach(function(link) {
    $(".songLink").append("<p class='link'>"+ link + "</p>");
});