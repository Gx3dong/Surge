/*
APP:黄瓜视频单独破解付费

>Gx3dong制作,免费资源群:1077223830.进群不迷路.
>木木团队,欢迎关注公众号:十三座州府

下载地址:https://michen.gdyhws.space/jhy7624.html?pkg=cuke0347&accountCode=666&inviteCode=CEN76X

QQ交流群：1077223830

圈X：

[rewrite_local]
https:\/\/api1000\.gdqeb\.club\/mov\/browse2 url script-response-body https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/hgUnPay.js

[MITM]
hostname = api1000.gdqeb.club

Surge4:
直接复制下面内容新建本地模块

[Script]
http-response https:\/\/api1000\.gdqeb\.club\/mov\/browse2 requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/hgUnPay.js

[MITM]
hostname = api1000.gdqeb.club

*/

body = $response.body.replace(/\"hasBuy\":\w+/g, "\"hasBuy\":true").replace(/\"msg\":"[^""]*"/g, '\"msg\":\"1\"')
$done({body});