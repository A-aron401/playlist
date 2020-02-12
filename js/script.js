var songNames=['Guilty Conscience','Potential','All for us','SUGAR','everything i wanted','Say So','Garden','Glitter','Paradise','Doin Time','Recess','Come Thru'];
 var songImage=["https://images.genius.com/67273ef0e66a1fc4c54b6451e678da88.1000x1000x1.jpg","https://media.pitchfork.com/photos/5d97a05532a22700089555c5/1:1/w_320/overit.jpeg","https://m.media-amazon.com/images/I/81Knq0TQueL._SS500_.jpg","https://images.genius.com/6556a7bc436345dc5a0ebd14a7008317.1000x1000x1.jpg","https://cdn.shopify.com/s/files/1/2171/7009/products/everythingFlexi_1024x.png?v=1573762313","https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Doja_Cat_-_Hot_Pink.png/220px-Doja_Cat_-_Hot_Pink.png","https://upload.wikimedia.org/wikipedia/en/b/bf/SZA_-_Ctrl_cover.png","https://upload.wikimedia.org/wikipedia/en/0/06/070_Glitter_EP_Cover.jpg","https://images.genius.com/093f70e1f1eaeab9125e380e4a27b466.1000x1000x1.jpg","https://www.nme.com/wp-content/uploads/2019/08/Lana-Del-Rey-Norman-Fucking-Rockwell-1.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Melanie_Martinez_-_K-12.png/220px-Melanie_Martinez_-_K-12.png","https://media.pitchfork.com/photos/5d97a05532a22700089555c5/1:1/w_320/overit.jpeg"]
 var songArtist=[]
songNames.forEach(function(song) {
    $(".songName").append("<p>"+ song + "</p>");
})
 songImage.forEach(function(image) {
    $(".songImage").append(`<img class="album" src="${image}">`);
 

});