/*
App：鲨鱼记账

hostname = api.shayujizhang.com

QX:先把js文件导入本地
[rewrite_local]
^https:\/\/api.shayujizhang.com\/account\/detail\/info\/ url script-response-body shyjzh.js


Surge4
http-response pattern=^https:\/\/api.shayujizhang.com\/account\/detail\/info\/ requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master
*/  


body = $response.body.replace(/\"vip\":\{\}, '\"vip\":{\"status\":1,\"finish_date\":\"2021-07-10 16:28:58\",\"finish_date_ios\":\"2021.07.10\",\"pre_date\":\"2020-06-10 16:28:58\",\"days\":329,\"last_buy_date\":\"2020-06-10 16:28:58\",\"auto_buy\":0,\"buy_status\":1,\"id\": 901828,\"pre_status\":1
    }')

$done({body});