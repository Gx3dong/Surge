/*
#!name=啪哩啪哩unlock vip
#!desc=下载：pali.cc

QuanX：
https:\/\/.*\.(mister-zhou&gao1gps)\.cn\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/plpl.js


surge4:

[Script]
http-response https:\/\/.*\.(mister-zhou&gao1gps)\.cn\/v1\/user\/info requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/plpl.js

[MITM]
hostname = *.gao1gps.cn, *.mister-zhou.cn,
*/

var obj = JSON.parse($response.body);
if ($request.url.indexOf("/v1/user/info") != -1){
obj.response.level = 1;
obj.response.expiry = 1777594638;
}
$done({body: JSON.stringify(obj)});
