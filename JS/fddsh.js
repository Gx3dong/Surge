/*
APP:樊登读书

Gx3dong制作,免费资源群:1077223830.进群不迷路.木木团队,欢迎关注公众号:十三座州府

QQ交流群:1077223830

QuanX1.0.10：
[rewrite_local]
https:\/\/.*\.dushu\.io\/* url script-request-body https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/fddsh.js
https:\/\/.*\.dushu\.io\/uesrInfo url script-response-body https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/fddsh.js

surge4:

[Script]
http-request https:\/\/.*\.dushu\.io\/* requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/fddsh.js
http-response https:\/\/.*\.dushu\.io\/uesrInfo requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/fddsh.js

[MITM]
hostname = *.dushu.io

*/

let body = $request.body.replace(/\"token\":\"[^"]*\"/g, '\"token\":\"20200601MAomDKKlaUEALAHWGaE\"');
let url = $request.url;
let obj = JSON.parse(body);
if (url.indexOf("/userInfo") != -1) {
obj.username = Gx3dong;
obj.avatarUrl = "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL3xC3su7xUBWxfcZAtvJVqt6a6XN6SfN8e90HcVa6Z67mKmhdib71ad8Gw8tcQf1QwnV41KRCAocA/132";

body = JSON.stringify(obj)
}
$done({body});