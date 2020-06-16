/*
迅雷VIP
注：使用前请先登陆一个账号
下载：微信关注公众号（蕾妹帮帮忙）或者https://ithunder-ota.a.88cdn.com/download-guide/step1.html?from=gzhlm

QuanX1.0.10：
[rewrite_local]
https:\/\/.*\.xunlei\.com\/xluser\.core\.login\/v3\/loginkey url script-response-body https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/xuelei.js

surge4:

[Script]
http-response https:\/\/.*\.xunlei\.com\/xluser\.core\.login\/v3\/loginkey requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/xuelei.js

[MITM]
hostname = *.xunlei.com
*/

var obj = JSON.parse($response.body);
if ($request.url.indexOf("/xluser.core.login/v3/loginkey") != -1){
obj = {
  "account": "701",
  "error": "success",
  "errorCode": "0",
  "error_description": "Success",
  "expires_in": 1036500,
  "isCompressed": "0",
  "isSetPassWord": "1",
  "keepAliveMinPeriod": "30",
  "keepAlivePeriod": "300",
  "loginKey": "lk10.647e134b1a3781fcff26abf3aba40af0fb19062472e0fa3add838e671fca1a9f525a2f31e0c20ec173a963e4d94dd532",
  "nickName": "Gx3dong",
  "platformVersion": "11",
  "protocolVersion": "301",
  "secureKey": "sk100.beaeb29a41ab47f8f4e59fe16d1c89d9",
  "sequenceNo": "1",
  "sessionID": "0B0837A7D88D3FCB38C3F53591F2166E",
  "timestamp": "1592340678",
  "userID": "710195646",
  "userName": "",
  "userNewNo": "1420465537",
  "version": "1",
  "vipList": [{
    "expireDate": "20210903",
    "isAutoDeduct": "0",
    "isRemind": "0",
    "isVip": "1",
    "isYear": "1",
    "payId": "5",
    "payName": "年费支付方式",
    "register": "20200223",
    "vasid": "2",
    "vasType": "5",
    "vipDayGrow": "25",
    "vipGrow": "4105",
    "vipLevel": "4"
  }]
}
}
$done({body: JSON.stringify(obj)});