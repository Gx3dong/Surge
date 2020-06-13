/*
鲨鱼记账Vip破解
>附带"真实的会员倒计时"

hostname = api.shayujizhang.com

圈X：
https:\/\/api\.shayujizhang\.com\/account\/detail\/info url script-response-body shyjzh.js

Surge4:
http-response https:\/\/api\.shayujizhang\.com\/account\/detail\/info requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/shyjzh.js

hostname = api.shayujizhang.com
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const expireTime = 1780675200000; // 到期时间:2026-06-06 06:06:06
var day = countDown();

if ($request.url.indexOf("/account/detail/info") != -1){
obj.data.vip = {
    "status": 1,
    "finish_date": "2026-06-06 06:06:06",
    "finish_date_ios": "2026.06.06",
    "pre_date": "2020-06-10 16:28:58",
    "days": parseInt(day),
    "last_buy_date": "2020-06-11 03:17:09",
    "auto_buy": 0,
    "buy_status": 1,
    "id": 901828,
    "pre_status": 1
  };
body = JSON.stringify(obj);
};
  
  function countDown(time) {
      var nowTime = +new Date(); // 返回的是当前时间总的毫秒数

      var times = (expireTime - nowTime) / 1000; // times是剩余时间总的秒数 
      var d = parseInt(times / 60 / 60 / 24); // 天
      return d;
  }

$done({body});