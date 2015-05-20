function playSomeSound(genre){
  SC.get('/tracks', {
    genres: genre,
  }, function(tracks){
    var random = Math.floor(Math.random()*49);
  SC.oEmbed(tracks[random].uri, {auto_play:true}, document.getElementById('player'));
  });
}

window.onload = function(){
  SC.initialize({
    client_id: 'ef10d229673c01a84693af525e10e933'
  });

  var menuLinks = document.getElementsByClassName('genre');
  for(var i=0; i<menuLinks.length; i++) {
    var menuLink = menuLinks[i];
    menuLink.onclick = function(e) {
      e.preventDefault();
      playSomeSound(menuLink.innerHTML);
    };
  };
};
