/*
app:我的壁纸库
基于app版本2.12.1

>Gx3dong制作,免费资源群:1077223830.进群不迷路.
>木木团队,欢迎关注公众号:十三座州府

QuanX1.0.10:
[rewrite_local]
https:\/\/.*\.platforms\.team\/apple\/verifyTransaction url script-response-body https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/wdbzk.js

Surge4:
[Script]
http-response https:\/\/.*\.platforms\.team\/apple\/verifyTransaction requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/wdbzk.js


[MITM]
hostname = *.platforms.team

*/
var obj = JSON.parse($response.body);


obj.data = {
    "is_valid":true,
    "may_expire":false,
    "is_offer_eligible":true,
    "in_app":{
        "com.apalonapps.wallpaperspys.7d_3dt_SUB00010":{
            "is_valid":true,
            "cancelled":false,
            "may_expire":true,
            "is_trial":true,
            "is_intro":false,
            "transaction_id":"550000539399999",
            "cancel_reason":"user",
            "purchase_date_ms":"1577961210000",
            "expired":false,
            "expires_date_ms":"4070890131000",
            "remaining_time_ms":"2247793000"
        }
    },
    "consumable_inapp":[],
    "hash":"5773ec1ddfbdf45fc1d00e1fcbch5hg6"
};



$done({body: JSON.stringify(obj)});




