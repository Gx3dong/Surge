/*
鲨鱼记账

hostname = api.shayujizhang.com

圈X：
https:\/\/api\.shayujizhang\.com\/account\/detail\/info\/* url script-response-body shyjzh.js

Surge4:
http-response https:\/\/api\.shayujizhang\.com\/account\/detail\/info\/* requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/shyjzh.js

hostname = api.shayujizhang.com
*/

var obj = JSON.parse($response.body);
obj.data.vip = {
    "status": 1,
    "finish_date": "2021-02-05 16:28:58",
    "finish_date_ios": "2021.02.05",
    "pre_date": "2020-06-10 16:28:58",
    "days": 236,
    "last_buy_date": "2020-06-11 03:17:09",
    "auto_buy": 0,
    "buy_status": 1,
    "id": 901828,
    "pre_status": 1
  },
$done({body: JSON.stringify(obj)});