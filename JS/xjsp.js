/*
香蕉

[Script]
http-response https?:\/\/.*\.lagoapps\.com\/(ucp\/index|getGlobalData) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/xjsp.js

[MITM]
hostname = *.lagoapps.com
*/00

var obj = JSON.parse($response.body);
if ($request.url.indexOf("/ucp/index") != -1){
obj.data.uinfo.down_daily_remainders = "999";
obj.data.uinfo.play_daily_remainders = "999";
obj.data.uinfo.minivod_play_daily_remainders = "999";
obj.data.uinfo.minivod_down_daily_remainders = "999";
obj.data.user.mobi = "QQ群:1077223830";
}
if ($request.url.indexOf("/getGlobalData") != -1){
  delete obj.data.adgroups;
  delete obj.data.iOS_adgroups;
}

$done({body: JSON.stringify(obj)});
