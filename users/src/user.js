const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// defines properties of data in collection
const UserSchema = new Schema ({
  name: String,
})
// defines collection (users) and passes schema
// represents the entire collectio of data
const User = mongoose.model('user', UserSchema);

module.exports = User;
