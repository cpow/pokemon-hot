import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(){
    return faker.name.firstName();
  },
  imageURL: "www.google.com",
  bio: "I am just another pokemon",
  hotVotes: 1,
  notVotes: 0,
});
