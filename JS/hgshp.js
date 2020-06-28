/*
APP:黄瓜视频破解会员和付费

>Gx3dong制作,免费资源群:1077223830.进群不迷路.
>木木团队,欢迎关注公众号:十三座州府

下载地址:https://michen.gdyhws.space/jhy7624.html?pkg=cuke0347&accountCode=666&inviteCode=CEN76X

QQ交流群：1077223830

圈X：

[rewrite_local]
https:\/\/.*\.awk2\.work\/(user\/info|mov\/browse2) url script-response-body https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/hgshp.js

[MITM]
hostname = *.awk2.work

Surge4:
直接复制下面内容新建本地模块

[Script]
http-response https:\/\/.*\.awk2\.work\/(user/info|mov\/browse2) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/hgshp.js

[MITM]
hostname = *.awk2.work

*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const expireTime = 1780675200000; // 到期时间:2026-06-06 06:06:06
var day = countDown();

if ($request.url.indexOf("/user/info") != -1){
  obj.data.inviteCnt = 1;
  obj.data.myInviteCode = "CEN76X";
  obj.data.vipEndDate = "2026-06-06";
  obj.data.aliasName = "Gx3dong";
  obj.data.ExpiredDays = parseInt(day);
  obj.data.isPaid = 1;
  obj.data.phone = "QQ群:1077223830";
  obj.data.userId = 16825738;
  obj.data.vipLogo = 4;
  body = JSON.stringify(obj);
};
if ($request.url.indexOf("/mov/browse2") != -1){
  obj.data.hasBuy = true;
  obj.msg = 1;
  body = JSON.stringify(obj);
};

  function countDown(time) {
      var nowTime = +new Date(); // 返回的是当前时间总的毫秒数

      var times = (expireTime - nowTime) / 1000; // times是剩余时间总的秒数 
      var d = parseInt(times / 60 / 60 / 24); // 天
      return d;
  };

$done({body});