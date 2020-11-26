/*
APP:黄瓜视频破解会员和付费

>Gx3dong制作,免费资源群:1077223830.进群不迷路.
>木木团队,欢迎关注公众号:十三座州府

下载地址:https://647nhjt.ye6nwi.space/djt0814.html?pkg=cuke0001&accountCode=666&inviteCode=CEN76X

QQ交流群：1077223830

圈X：

[rewrite_local]
https:\/\/api1000\.gdqeb\.com\/(user\/info|mov\/browse2) url script-response-body https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/hgshp.js

[MITM]
hostname = api1000.cvxia.com

Surge4:
直接复制下面内容新建本地模块

[Script]
http-response https:\/\/api1000\.gdqeb\.com\/(user/info|mov\/browse2) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/hgshp.js

[MITM]
hostname = api1000.gdqeb.com

*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const expireTime = 1780675200000; // 到期时间:2026-06-06 06:06:06
var day = countDown();

if ($request.url.indexOf("/user/info") != -1){
obj= {
  "code": 0,
  "data": [{
    "readLevel": 0,
    "haveExtendInfo": 0,
    "firstRechargeTime": "2020-06-26",
    "subchannelCode": "official000",
    "gameLink": "",
    "todayDownNum": 0,
    "extrViewNumber": 0,
    "appCode": "002101",
    "dailyViewNum": 10,
    "myInviteCode": "CEN76X",
    "inviteCnt": 1,
    "nextLevelNeed": 0,
    "leftViewNum": 10,
    "vipExpiredDate": "",
    "potato_url": "https://lynnconway.me/hgav30",
    "state": 1,
    "certSignStatus": 0,
    "vipEndDate": "2026-06-06",
    "hasCompleteInfo": 0,
    "aliasName": "Gx3dong",
    "ExpiredDays": parseInt(day),
    "level": 0,
    "totalBalance": 0,
    "appVer": "0",
    "limitDownNum": 0,
    "birth": "",
    "isPaid": 1,
    "isMaxLevel": 0,
    "oldDriver": 0,
    "phone": "QQ群:1077223830",
    "name": null,
    "job": "",
    "nextLevelNum": 0,
    "preferenceCustom": "",
    "gender": 1,
    "hasJoinPotatoGroup": 0,
    "supUserId": 0,
    "companion": null,
    "maxInviteCnt": null,
    "userBrowCnt": 0,
    "tagIds": "",
    "icon": "/icon/7.jpg",
    "title": "",
    "pkg": "cuke0001",
    "userCode": null,
    "tagNames": "",
    "countryCode": "+86",
    "hasDownloadApplication": 0,
    "channelCode": "01",
    "gameId": "",
    "oriAppVer": "118",
    "userCls": 2,
    "exceedPercent": 0,
    "gmtCreate": "2019-04-30",
    "downloadApplication": 0,
    "userId": 16825738,
    "vipLogo": 4,
    "joinPotatogroup": 0,
    "appid": "",
    "vcoinLeft": 0,
    "isExpired": 1,
    "hasSign": false
  }],
  "enumCode": "SUCCESS",
  "msg": "1",
  "success": true
}
};
if ($request.url.indexOf("/mov/browse2") != -1){
obj.data.hasBuy = true;
obj.msg = 1;
};

  function countDown(time) {
      var nowTime = +new Date(); // 返回的是当前时间总的毫秒数

      var times = (expireTime - nowTime) / 1000; // times是剩余时间总的秒数 
      var d = parseInt(times / 60 / 60 / 24); // 天
      return d;
  };
body = JSON.stringify(obj);
$done({body});