import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  imageURL: DS.attr('string'),
  bio: DS.attr('string'),
  hotVotes: DS.attr('number', {
    defaultValue: 0,
  }),
  notVotes: DS.attr('number', {
    defaultValue: 0,
  }),
});
