import Ember from 'ember';

export default Ember.Controller.extend({
  pokemonCount: Ember.computed.alias('model.length'),
  currentPokemon: '',
  isInitialScreen: Ember.computed.equal('currentPokemon', ''),
  votedPokemon: [],
  voted: false,
  votingComplete: false,


  findRandomNumberWithoutOverlaps: function() {
    let count = this.get('pokemonCount');
    let randomNumber = Math.floor((Math.random() * count));
    if (this.get('votedPokemon').includes(randomNumber)) {
      return this.findRandomNumberWithoutOverlaps();
    }
    return randomNumber;
  },

  actions: {
    getRandomPokemon() {
      this.set('voted', false);
      if (this.get('votedPokemon.length') === this.get('pokemonCount')) {
        this.get('flashMessages')
          .success("Congratulations, you've voted for all the pokemon!");
        this.transitionToRoute('pokemon.index');
      } else {
        let randomNumber = this.findRandomNumberWithoutOverlaps();
        this.set('currentPokemon', this.get('model').objectAt(randomNumber));
        this.get('votedPokemon').push(randomNumber);
      }
    },
    vote(hotOrNot) {
      this.get('currentPokemon').incrementProperty(hotOrNot, 1);
      this.get('currentPokemon').save();
      this.set('voted', true);
    }
  },
});
