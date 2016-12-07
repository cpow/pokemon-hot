import FirebaseAdapter from 'emberfire/adapters/firebase';
import DS from 'ember-data';
import config from '../config/environment';

let adapter;

if (config.environment === 'test'){
  adapter = DS.JSONAPIAdapter.extend({});
} else {
  adapter = FirebaseAdapter.extend({});
}

export default adapter;
