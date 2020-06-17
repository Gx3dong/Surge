/*
啪哩啪哩unlock vip
下载：pali.cc

>Gx3dong制作,免费资源群:1077223830.进群不迷路.
>木木团队,欢迎关注公众号:十三座州府

QuanX1.0.10：
[rewrite_local]
https:\/\/api\.gao1gps\.cn\/(v1\/user\/info|v1\/firstpurchase) url script-response-body https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/plpl.js

surge4:

[Script]
http-response https:\/\/api\.gao1gps\.cn\/(v1\/user\/info|v1\/firstpurchase) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/plpl.js

[MITM]
hostname = api.gao1gps.cn
*/

var obj = JSON.parse($response.body);
if ($request.url.indexOf("/v1/user/info") != -1){
obj.response.level = 1;
obj.response.expiry = 1777594638;
obj.response.show_time = 0;
}
$done({body: JSON.stringify(obj)});