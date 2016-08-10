import Ember from 'ember';

export default Ember.Controller.extend({
  pokemonCount: Ember.computed.alias('model.length'),
  currentPokemon: '',
  isInitialScreen: Ember.computed.equal('currentPokemon', ''),
  voted: false,

  actions: {
    getRandomPokemon() {
      this.set('voted', false);
      let count = this.get('pokemonCount');
      let randomNumber = Math.floor((Math.random() * count));
      this.set('currentPokemon', this.get('model').objectAt(randomNumber));
    },
    vote(hotOrNot) {
      this.get('currentPokemon').incrementProperty(hotOrNot, 1);
      this.get('currentPokemon').save();
      this.set('voted', true);
    }
  },
});
