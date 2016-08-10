import Ember from 'ember';

export default Ember.Route.extend({
  allPokemon: null,

  model() {
    return this.store.findAll('pokemon');
  },
});
