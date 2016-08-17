export default function(server) {
  server.create('pokemon', {
    imageURL: 'http://vignette2.wikia.nocookie.net/camphalfbloodroleplay/images/7/77/Pikachu.png/revision/latest?cb=20141004224742',
    name: 'pikachu',
    bio: 'I am pikachu, you know me. You know who I am. Just vote already!',
    hotVotes: 25,
    notVotes: 10,
  });
  server.create('pokemon', {
    imageURL: 'http://vignette1.wikia.nocookie.net/pokemon/images/a/ab/143Snorlax_AG_anime.png/revision/latest?cb=20140924022330',
    name: 'snorlax',
    bio: 'My name is snorlax and I\'m TIIIREEEEDD',
    hotVotes: 13,
    notVotes: 8,
  });
  server.create('pokemon', {
    imageURL: 'http://vignette3.wikia.nocookie.net/genealogy/images/a/a7/Rattata_001.png/revision/latest?cb=20141127051929',
    name: 'rattata',
    bio: 'You know rattata, he is sleak and quick and HANDSOME',
    hotVotes: 20,
    notVotes: 15,
  });
  server.create('pokemon', {
    imageURL: 'http://vignette3.wikia.nocookie.net/es.pokemon/images/a/a4/Charmander_(anime_AG).png/revision/latest?cb=20120906023057',
    name: 'charmander',
    bio: 'I am charmander, and I really know how to heat things up!',
    hotVotes: 40,
    notVotes: 5,
  });
}
