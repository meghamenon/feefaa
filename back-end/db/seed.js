var models = require('../models');

var bashesData = [
{
  author: "Barcamonkey",
  avatar: "https://www.pinterest.com/Trekmonkey/trek-monkey-logos/",
  content: "Real Madrid can go f off",
  media: "https://www.memecenter.com/search/real%20madrid"
},
{
  author: "Messi is God",
  avatar: "https://www.pinterest.com/Trekmonkey/trek-monkey-logos/",
  content: "Barcaaa",
  media: "https://www.memecenter.com/search/real%20madrid"
},
{
  author: "Van Persie",
  avatar: "https://www.pinterest.com/Trekmonkey/trek-monkey-logos/",
  content: "Manchester United Forever!!",
  media: "https://www.memecenter.com/search/real%20madrid"
},
{
  author: "Giroud",
  avatar: "https://www.pinterest.com/Trekmonkey/trek-monkey-logos/",
  content: "nananananana",
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
            avatar: "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/man279.png",
            content: "Whoooooo",
            media: "https://cdn.newsapi.com.au/image/v1/5213e07733cdb9c836bda4ca70d73457",
            bash: [bash[0]]
          },
          {
            author: "Lionel",
            avatar: "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/man279.png",
            content: "Whaaaa",
            media: "https://cdn.images.dailystar.co.uk/dynamic/58/photos/882000/620x/Lionel-Messi-654296.jpg",
            bash: [bash[1]]
          },
          {
            author: "Arsene Wenger",
            avatar: "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/man279.png",
            content: "Gimme Arsenal back bi#$%##",
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
