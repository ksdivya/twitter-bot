var Twit = require('twit');
var request = require('request');

var T = new Twit({
 consumer_key:'HkjU2VMQFiJnojWlK2kungDeS',
 consumer_key_secret:'czHiKwSwyMk4jP2mXt0q31ZmLGi2qLDl075qlJ3khw47mYPEYo',
 acces_token:'937955235389095936-eXOaFD0ujcp6w6dgS0yzX3KIsOOdPI0',
 access_token_secret:'HmiNA4a5bKUWOnrNCEq8ej4aUmCecqTT3KVX3VRKxa68i'
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
