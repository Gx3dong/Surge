/*
指尖时光unlock vip

>Gx3dong制作,免费资源群:1077223830.进群不迷路.
>木木团队,欢迎关注公众号:十三座州府

QuanX：
[rewrite_local]
https:\/\/integral\.dasyibalang\.com\/User* url script-response-body https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/zhjshg.js

Surge4:
[Script]
http-response https:\/\/integral\.dasyibalang\.com\/User* requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/zhjshg.js

[MITM]
hostname = integral.dasyibalang.com
*/


body = $response.body.replace(/\"VIP\": \d/g, "\"VIP\": 1")
$done({body});