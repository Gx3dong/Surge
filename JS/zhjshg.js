/*
指尖时光unlock vip

QuanX：
https:\/\/integral\.dasyibalang\.com\/User* url script-response-body zhjshg.js


surge4:

[Script]
http-response https:\/\/integral\.dasyibalang\.com\/User* requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/zhjshg.js

[MITM]
hostname = integral.dasyibalang.com
*/


body = $response.body.replace(/\"VIP\": \d/g, "\"VIP\": 1")
$done({body});