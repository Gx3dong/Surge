/*
APP:我的壁纸库

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

body = $response.body.replace(/\"com\.apalonapps\.wallpaperspys\.7d\_3dt\_SUB00010\":\{[^€]*\}\}/g, '\"com\.apalonapps\.wallpaperspys\.7d\_3dt\_SUB00010\":\{\"is_valid\":true,\"cancelled\":false,\"may_expire\":true,\"is_trial\":true,\"is_intro\":false,\"transaction_id\":\"250000681084079\",\"cancel_reason\":\"user\",\"purchase_date_ms\":\"1692068928000\",\"expired\":true,\"expires_date_ms\":\"1692328128000\",\"remaining_time_ms\":\"171750000\"\}\},\"consumable_inapp\":\[\],\"hash\":\"8ab353252a9532dde08abeea69bc6b30\"\}\}')
$done({body});




