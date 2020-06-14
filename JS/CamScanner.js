/*
全能扫描王


QuanX：
https:\/\/api-cs.intsig.net\/purchase\/cs\/query_property url script-response-body CamScanner.js


surge4:

[Script]
http-response https:\/\/api-cs.intsig.net\/purchase\/cs\/query_property requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/CamScanner.js

hostname = api-cs.intsig.net
*/



let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry": "1780675200"}}};
$done({body: JSON.stringify(obj)});