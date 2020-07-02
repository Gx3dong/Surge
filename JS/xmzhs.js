/*
熊猫助手黄金版By木木

>Gx3dong制作,免费资源群:1077223830.进群不迷路.
>木木团队,欢迎关注公众号:十三座州府

QX1.0.10：
[rewrite_local]
http:/\/usapi.tongbu.com\/v.html url script-response-body https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/xmzhs.js

Surge4:
[Script]
http-response http:/\/usapi.tongbu.com\/v.html requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/xmzhs.js

[MITM]
hostname = usapi.tongbu.com

*/

var obj = JSON.parse($response.body);

if ($request.url.indexOf(/v.html) != -1){
obj = {
  "Code": 0,
  "Data": {
    "ActualTotal": 0.0,
    "ClientShow": 0,
    "CreateTime": "2018-01-29",
    "InvalidDays": 999,
    "InvalidTime": "2029-01-25",
    "Status": 1,
    "Udid": "fdc2037e2041684081fe1bc42eb52d2aa8816a58",
    "Uid": 0,
    "NextTime": null,
    "SubscribeVip": 1
  },
  "Message": null
}
}

$done({body: JSON.stringify(obj)});
