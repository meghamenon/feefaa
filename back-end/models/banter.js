var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  Bash = require('./bash')

var BanterSchema = new Schema({
  author: String,
  avatar: String,
  content: String,
  bump: Number,
  media: String,
  bash: [Bash.schema]
});

var Banter = mongoose.model('Banter', BanterSchema);

module.exports = Banter;
