import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['hotVotes:desc'],
  sortedPokemon: Ember.computed.sort('model', 'sortProperties'),
});
