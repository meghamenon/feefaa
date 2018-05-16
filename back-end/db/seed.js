var models = require('../models');

var bashesData = [
{
  author: "Barcamonkey",
  avatar: "https://www.pinterest.com/Trekmonkey/trek-monkey-logos/",
  content: "Real Madrid can go f off",
  bump: 13,
  media: "https://www.memecenter.com/search/real%20madrid"
},
{
  author: "Messi is God",
  avatar: "https://www.pinterest.com/Trekmonkey/trek-monkey-logos/",
  content: "Barcaaa",
  bump: 13,
  media: "https://www.memecenter.com/search/real%20madrid"
},
{
  author: "Van Persie",
  avatar: "https://www.pinterest.com/Trekmonkey/trek-monkey-logos/",
  content: "Manchester United Forever!!",
  bump: 13,
  media: "https://www.memecenter.com/search/real%20madrid"
},
{
  author: "Giroud",
  avatar: "https://www.pinterest.com/Trekmonkey/trek-monkey-logos/",
  content: "nananananana",
  bump: 13,
  media: "https://www.memecenter.com/search/real%20madrid"
},

];

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
            content: "Whoooooo",
            bump: 200,
            media: "https://cdn.newsapi.com.au/image/v1/5213e07733cdb9c836bda4ca70d73457",
            bash: [bash[0]]
          },
          {
            author: "Lionel",
            avatar: "https://imgflip.com/memegenerator/71006498/Sad-Ronaldo",
            content: "Whaaaa",
            bump: 200,
            media: "https://cdn.images.dailystar.co.uk/dynamic/58/photos/882000/620x/Lionel-Messi-654296.jpg",
            bash: [bash[1]]
          },
          {
            author: "Arsene Wenger",
            avatar: "https://imgflip.com/memegenerator/71006498/Sad-Ronaldo",
            content: "Gimme Arsenal back bi#$%##",
            bump: 200,
            media: "https://metrouk2.files.wordpress.com/2018/05/sei_11986984-e1526244484378.jpg?w=748&h=523&crop=1",
            bash: [bash[2]]
          },
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
