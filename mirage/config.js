export default function() {
  this.get('/');
  this.get('/new');
  this.get('/pokemons');
  this.get('/pokemons/:id');
  this.post('/pokemons');
}
