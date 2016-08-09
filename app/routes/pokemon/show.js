import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    debugger;
    return this.get('store').query('pokemon', {id: params.id});
  },
});
