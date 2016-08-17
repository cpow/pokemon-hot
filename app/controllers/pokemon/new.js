import Ember from 'ember';

export default Ember.Controller.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    save() {
      let pokemon = this.store.createRecord('pokemon', {
        name: this.get('name'),
        imageURL: this.get('imageURL'),
        bio: this.get('bio'),
      });
      pokemon.save();
      this.get('flashMessages').success("good job!");

      this.setProperties({
        name: '',
        imageURL: '',
        bio: '',
      });
    },
  }
});
