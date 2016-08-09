import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let pokemon = this.store.createRecord('pokemon');
    return pokemon;
  },

  actions: {
    savePokemon(pokemon) {
      pokemon.save().then(() => {
        this.transitionTo('pokemon.show', pokemon.get('id'));
      });
    },
  }
});
