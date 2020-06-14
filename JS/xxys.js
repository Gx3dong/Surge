/*
小小影视 unlock Vip

QX:（地址加这个）
https:\/\/.*\.xxjjappss\.com\/(vod\/reqplay\/|ucp/index|getGlobalData) url script-response-body https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/xxys.js

Surge:
http-response https:\/\/.*\.xxjjappss\.com\/(vod\/reqplay\/|ucp/index|getGlobalData) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/xxys.js
这是通过NobyDa大佬的基础上修改好的，小小影视的脚本

mitm加下面的
[MITM]
hostname= *.xxjjappss.com

小小影视下载地址：http://IDINEK.xiaoxiaoys1.com/?inviteCode=IDINEK
*/

const path1 = "/ucp/index";
const path2 = "/vod/reqplay/";
const ad = "/getGlobalData";
let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.data.uinfo["down_daily_remainders"] = "666";
	obj.data.uinfo["play_daily_remainders"] = "666";
	obj.data.uinfo["curr_group"] = "5";
	obj.data.user["isvip"] = "1";
	obj.data.user["goldcoin"] = "666";
}
if ($request.url.indexOf(path2) != -1){
	obj.retcode = "0";
}

if ($request.url.indexOf(ad) != -1) {
delete obj.data.adrows;
delete obj.data.adgroups;
delete obj.data.iOS_adgroups;
obj.data.app_launch_times_adshow =0;
}
$done({body: JSON.stringify(obj)});
