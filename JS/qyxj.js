/*
轻言相机unlock vip

>Gx3dong制作,免费资源群:1077223830.进群不迷路.
>木木团队,欢迎关注公众号:十三座州府

QX1.0.10：
[rewrite_local]
https:\/\/.*\.faceu\.mobi\/commerce\/v1\/subscription\/user_info url script-response-body https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/qyxj.js

Surge4:
[Script]
http-response https:\/\/.*\.faceu\.mobi\/commerce\/v1\/subscription\/user_info requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/qyxj.js

[MITM]
hostname = *.faceu.mobi

*/

let obj = JSON.parse($response.body);
    obj["data"]["flag"] = true;
    obj["data"]["start_time"] = 1588318697;
    obj["data"]["end_time"] = 3043035497;
$done({body: JSON.stringify(obj)});
