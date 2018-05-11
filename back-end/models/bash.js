var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BashSchema = new Schema({
  author: String,
  avatar: String,
  content: String,
  bump: Number,
  media: String
});

var Bash = mongoose.model('Bash', BashSchema);

module.exports = Bash;
