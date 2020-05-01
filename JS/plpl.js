/*
#！name=啪哩啪哩unlock vip

[Script]
http-response https:\/\/api\.gao1gps\.cn\/v1\/user\/info requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/plpl.js

[MITM]
hostname = api.gao1gps.cn
*/

var obj = JSON.parse($response.body);
obj.response.level = "1";
obj.response.expiry = "1777594638"；

$done({body: JSON.stringify(obj)});
