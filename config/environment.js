/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    firebase: {
      apiKey: "AIzaSyDHF1D60IISc2tONMELAPuc3exXCEsw1VU",
      authDomain: "pokehot-or-pokenot.firebaseapp.com",
      databaseURL: "https://pokehot-or-pokenot.firebaseio.com",
      storageBucket: "pokehot-or-pokenot.appspot.com",
    },
    modulePrefix: 'pokemon-hot',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV['ember-cli-mirage'] = {
      enabled: true
    };
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
