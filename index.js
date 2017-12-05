var Twit = require('twit');
var request = require('request');

var T = new Twit({
 consumer_key:'TOP SECRET KEY',
 consumer_key_secret:'TOP SECRET KEY',
 acces_token:'TOP SECRET KEY',
 access_token_secret:'TOP SECRET KEY'
})

const url= "https://api.forismatic.com/api/1.0/?method=getQuote&key=692375&format=text&lang=en"

function getQuote(callback) {
request(url, function(error, response, body) {
   console.log('error:',error);
   console.log('statusCode:',response && response.statusCode);
   console.log('body:', body);
   callback(body);
  });
}

function postTweet(tweet) {
  console.log(tweet);
  T.post('statuses/update', {status: tweet}, function(err, data, response) {
  console.log(data);
 })
}

getQuote(postTweet)
