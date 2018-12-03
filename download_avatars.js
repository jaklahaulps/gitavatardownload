var request = require('request');
var key = '0da5fa54714cb8998bceafdc95f59511031c34f8';

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      Authorization: 'token ' + key
    }
  }
}

request(options, function(errm res, body){
  cb(err, body);
});

console.log('Welcome to the Github Avatar Downloader!');

getRepoContributors("jquery", "jquery", function(err, result){
  console.log("Errors", err);
  console.log("Result:", result);
}