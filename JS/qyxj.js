/*
#!name=轻言相机unlock vip
#!desc=轻言相机破解订阅

[Script]
http-response https:\/\/.*\.faceu\.mobi\/commerce\/v1\/subscription\/user_info requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/qyxj.js

[MITM]
hostname =*.faceu.mobi

*/

var obj = JSON.parse($response.body);

obj.data.flag = ture;
obj.data.start_time = 1588318697;
obj.data.end_time = 3043035497;

$done({body: JSON.stringify(obj)});
