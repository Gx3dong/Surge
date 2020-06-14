/*
黄油相机
QX：脚本下载到script下面
[rewrite_local]
https:\/\/api4\.bybutter\.com\/(v4\/users\/me|v4\/shop\/.*) url script-response-body hyxj.js

surge4:
[Script]
http-response https:\/\/api4\.bybutter\.com\/(v4\/users\/me|v4\/shop\/.*) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/hyxj.js

[MITM]
hostname = %APPEND% api4.bybutter.com
*/

body = $response.body.replace(/\"ownership\":\"\w+\"/g, '\"ownership\":"free"').replace(/\"usageType\":\"\w+\"/g, '\"usageType\":"unlimited"').replace(/\"memberships\":\[\]/g, "\"memberships\":[{\"endAt\":1650842277,\"id\":\"1\",\"name\":\"普通会员\",\"ownership\":\"temporary\",\"startAt\":1587425677,\"usageType\":\"unlimited\"}]")
$done({body});