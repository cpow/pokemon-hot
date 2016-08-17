import { test } from 'qunit';
import moduleForAcceptance from 'pokemon-hot/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | pokemon/rate');

test('visiting /pokemon/rate', function(assert) {
  visit('/pokemon/rate');

  andThen(function() {
    assert.equal(currentURL(), '/pokemon/rate');
    assert.ok(find('.jumbotron h1').text().trim().includes('Gotta'),
        'user sees landing page message');
  });
});

test('visiting /pokemon/rate', function(assert) {
  let pikachu = server.create('pokemon', {
    name: 'pikachu',
    imageURL: 'http://vignette2.wikia.nocookie.net/supersmashbrosfanon/images/7/77/Pikachu.png/revision/latest?cb=20131028234047',
    bio: 'pika-chuuuu',
    hotVotes: 1,
    notVotes: 0,
  });
  let currentVote = pikachu.hotVotes;

  visit('/pokemon/rate');

  click('a.continue-to-rating');

  andThen(function() {
    assert.equal(find('.name').text().trim(), pikachu.name, 'pikachu shows up');
  });

  click('a:contains(HOT!!)');

  andThen(function() {
    assert.equal(find('.hot-votes').text().trim(), currentVote + 1);
  });

  click('a.get-more-pokemon');

  andThen(function() {
    assert.equal(currentRouteName(), "pokemon.index");
  });
});
