var models = require('../models');

var bashesData = [{
  author: "Barcamonkey",
  avatar: "https://www.pinterest.com/Trekmonkey/trek-monkey-logos/",
  content: "Real Madrid can go f off",
  bump: 13,
  media: "https://www.memecenter.com/search/real%20madrid"
}];

models.Bash.remove({}, function(err, res){
  if(err){
    console.log('Error', err);
    return;
  }
  console.log('Removed all bashes');

  models.Bash.create(bashesData, function(err, bash){
    if(err){
      console.log('Error', err)
      return;
    }

    console.log('Created', bash.length, bash);

    models.Banter.remove({}, function(err, res){
      if(err){
        console.log('Error');
        return;
      }
      console.log('Removed all Banters');

      models.Banter.create(
        [
          {
            author: "Ronaldo",
            avatar: "https://imgflip.com/memegenerator/71006498/Sad-Ronaldo",
            content: "Ronaldo don't cry",
            bump: 200,
            media: "https://tenor.com/view/cristiano-ronaldo-gif-6234372",
            bash: [bash[0]]
          }
        ], function(err, banters){
          if(err){
            console.log('Error', err);
            return;
          }
          console.log('Created', banters.length, 'banters');
          return;
        }
      );
    });
  });
});
