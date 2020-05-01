/*
#！name=香蕉

[Script]
http-response https?:\/\/.*\.(fuli|xiang(jiao|xiang))apps\.com\/(ucp\/index|getGlobalData|.+\/reqplay\/) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/xjsp.js

[MITM]
hostname = ios.fuliapps.com, apple.fuliapps.com, ios.xiangjiaoapps.com, apple.xiangjiaoapps.com, *.xiangxiangapps.com
*/

var obj = JSON.parse($response.body);
if ($request.url.indexOf("/ucp/index") != -1){
  obj.data.uinfo.down_daily_remainders = "666";
  obj.data.uinfo.play_daily_remainders = "666";
  obj.data.uinfo.minivod_play_daily_remainders = "666";
  obj.data.uinfo.minivod_down_daily_remainders = "666";
  obj.data.uinfo["next_upgrade_need"] = "0";
  obj.data.user.isvip = 1;
  obj.data.user.gicon = "V5";
  obj.data.user.gid = "5";
  obj.data.user.islimitv3 = "5";
  obj.data.user.duetime = "13:05:24"
  obj.data.user.dueday = "2039-05-274"
  obj.data.user.minup = "50";
  obj.data.user.minivod_play_daynum = "500";
  obj.data.user.minivod_down_daynum = "500";
}
if ($request.url.indexOf("/getGlobalData") != -1){
  obj.data.app_launch_times_adshow = "0";
  obj.data.adgroups = "";
  obj.data.iOS_adgroups = "";
}
if ($request.url.indexOf("/vod/show/") != -1){
   obj.data.vodrow.isvip = "0";
   obj.data.vodrow.islimitv3 = "0";
}
if ($request.url.indexOf("/reqplay/") != -1){
  obj.retcode = "0";
   if(obj.data.hasOwnProperty("httpurl_preview")){
  var playurl = obj.data["httpurl_preview"];
  obj.data["httpurl"] = playurl;
  };
}
$done({body: JSON.stringify(obj)});
