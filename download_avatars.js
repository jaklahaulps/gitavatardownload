var request = require('request');
var key = '0da5fa54714cb8998bceafdc95f59511031c34f8';
var fs = require('fs');
var proc = process.argv
//var filepath = './avatars/'

function getRepoContributors(repoOwner, repoName, cb) {
  if (repoOwner !== undefined && repoName !== undefined){

    var options = {
      url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
      headers: {
        'User-Agent': 'request',
        Authorization: 'token ' + key
      }}
    request(options, function(err, res, body){
      cb(err, JSON.parse(body));
    });
    } else{
    console.log('Requires input.')
  };
}

function downloadImageByURL(url, filePath){
  request.get(url)               // Note 1
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
       })
       .pipe(fs.createWriteStream(filePath));
       console.log (filePath)
};



console.log('Welcome to the Github Avatar Downloader!');

getRepoContributors(proc[2], proc[3], function(err, result){
  for (var i = 0; i < result.length; i++ ){
    //console.log(result);
    var filePath = './avatarImg/' + result[i].login + '.jpg'; //avatar file path is not working for me
    var urlPaths = result[i].avatar_url;
    console.log(urlPaths)

    downloadImageByURL(urlPaths, filePath);
  }
  console.log("Errors", err);
});