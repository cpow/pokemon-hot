import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let pokemon = this.store.createRecord('pokemon');
    return pokemon;
  },

  actions: {
    save() {
      const pokemon = this.get('controller.model');
      pokemon.save();
      this.transitionTo('pokemon.show', pokemon);
    },
  }
});
