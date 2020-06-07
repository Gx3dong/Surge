/*
黄油相机PRO

[Script]
http-response https?:\/\/.*\.bybutter\.com\/(v4\/shop\/*|v4\/users\/me|v4\/shop\/shelves|v4\/editor\/template\/recommended|v4\/search\/products|v4\/template-square) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/hyxj.js

[MITM]
hostname = %APPEND% *.bybutter.com
*/ 


re('"ownership":\w+@"memberships":\[\]@"usageType":\w+','"ownership":free@[{\"endAt\":1650842277,\"id\":\"1\",\"name\":\"普通会员\",\"ownership\":\"free\",\"startAt\":1587425677,\"usageType\":\"unlimited\"}]@"usageType":unlimited')

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
} 