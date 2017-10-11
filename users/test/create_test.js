const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user' , () => {
    // creates an instance of a user (joe is a record of a user)
    // nothing is saved to the database
    const joe = new User({ name: 'Joe' })
    // save to DB
    joe.save();
    
  });
});
