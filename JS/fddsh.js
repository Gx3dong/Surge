/*
APP:樊登读书VIP

Gx3dong制作,免费资源群:1077223830.进群不迷路.木木团队,欢迎关注公众号:十三座州府

QQ交流群:1077223830

QuanX1.0.10：
[rewrite_local]
https:\/\/.*\.dushu\.io\/* url script-request-body https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/fddsh.js

Surge4:
[Script]
http-request https:\/\/.*\.dushu\.io\/* requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/fddsh.js

[MITM]
hostname = *.dushu.io

*/

body = $request.body.replace(/\"token\":\"[^"]*\"/g, '\"token\":\"20200601MAomDKKlaUEALAHWGaE\"');
$done({body});