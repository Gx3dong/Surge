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
  obj.data.user.duetime = "2026-06-06 23:59:59";
}
if ($request.url.indexOf("/getGlobalData") != -1){
  obj.data.app_launch_times_adshow = "0";
  obj.data.adgroups = "";
  obj.data.iOS_adgroups = "";
}
$done({body: JSON.stringify(obj)});