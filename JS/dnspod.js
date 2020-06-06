/*
Appstore Speed up download (By langkhach)

[Host]
*.itunes.apple.com = script:Dnspod
[Script]
Dnspod = type=dns,script-path=https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/dnspod.js,script-update-interval=-1
*/

const url = 'http://119.29.29.29/d?dn=' + $domain;
if ($network.v4.primaryInterface === 'en0') {
  $httpClient.get(url, function(error, response, data) {
    if (error) {
      $done({server: '8.8.8.8'});
    } else {
      $done({addresses: data.split(';'), ttl: 600});
    }
  });
} else {
  $done({server: '8.8.8.8'});
}