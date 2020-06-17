/*
全能扫描王

>Gx3dong制作,免费资源群:1077223830.进群不迷路.
>木木团队,欢迎关注公众号:十三座州府

Qx1.0.10：
https:\/\/api-cs.intsig.net\/purchase\/cs\/query_property url script-response-body https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/CamScanner.js


surge4:

[Script]
http-response https:\/\/api-cs.intsig.net\/purchase\/cs\/query_property requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/CamScanner.js


[MITM]
hostname = api-cs.intsig.net
*/



let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry": "1780675200"}}};
$done({body: JSON.stringify(obj)});