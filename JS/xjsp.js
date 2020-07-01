/*
香蕉视频全功能破解和去广告

>Gx3dong制作,免费资源群:1077223830.进群不迷路.
>木木团队,欢迎关注公众号:十三座州府

下载地址：下载地址:http://VQD5QD.xjapp390.club?inviteCode=VQD5QD

QQ交流群：1077223830

圈X：
下载这个js到本地Script下面
再去复制一下内容到对应的配置

[rewrite_local]
# > 会员
https:\/\/.*\.(lagoapps|guoguoapps|pipiapps).com url request-header Cookie:.+ request-header Cookie: xxx_api_auth=3666393732366333343132363833646163623438313064646532653661393135
# > 去广告
https?:\/\/.*\.(lagoapps|guoguoapps|pipiapps)\.com\/(ucp\/index|getGlobalData|.+\/reqplay\/) url script-response-body https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/xjsp.js

[MITM]
hostname = *.guoguoapps.com, *.pipiapps.com, *.lagoapps.com

Surge4:
直接复制下面内容新建本地模块

[Header Rewrite]
https:\/\/.*\.(lagoapps|guoguoapps|pipiapps).com header-replace Cookie xxx_api_auth=3666393732366333343132363833646163623438313064646532653661393135

[Script]
http-response https?:\/\/.*\.(lagoapps|guoguoapps|pipiapps)\.com\/(ucp\/index|getGlobalData|.+\/reqplay\/) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/xjsp.js

[MITM]
hostname = %APPEND% *.guoguoapps.com, *.pipiapps.com, *.lagoapps.com

*/

var obj = JSON.parse($response.body);
if ($request.url.indexOf("/ucp/index") != -1){
obj.data.uinfo.down_daily_remainders = "999";
obj.data.uinfo.play_daily_remainders = "999";
obj.data.uinfo.minivod_play_daily_remainders = "999";
obj.data.uinfo.minivod_down_daily_remainders = "999";
obj.data.user.mobi = "QQ群:1077223830";
}
if ($request.url.indexOf("/getGlobalData") != -1){
  delete obj.data.adgroups;
  delete obj.data.iOS_adgroups;
}
if ($request.url.indexOf("/reqplay/") != -1){
  obj.retcode = "0";
  if(obj.data.hasOwnProperty("httpurl_preview")){
  var playurl = obj.data["httpurl_preview"];
  obj.data["httpurl"] = playurl;
  };
}

$done({body: JSON.stringify(obj)});
