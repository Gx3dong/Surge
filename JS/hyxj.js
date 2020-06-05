/*黄油相机PRO

[Script]
http-response https?:\/\/.*\.bybutter\.com\/(v4\/shop\/|v4\/users\/me|v4\/shop\/shelves|v4\/editor\/template\/recommended|v4\/search\/products|v4\/template-square\/) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/hyxj.js

[MITM]
hostname = *.bybutter.com
*/ 

var obj = JSON.parse($response.body);
if ($request.url.indexOf("/v4/shop/") != -1){
ownership.defineProperties(ownership, free);
remark.defineProperties(remark, 使用期限：永久);
usageType.defineProperties(usageType, unlimited);
enable.defineProperties(enable, true);
}
if ($request.url.indexOf("/v4/users/me") != -1){
    obj.memberships = [{"endAt":1682897677,"id":"1","name":"普通会员","ownership":"temporary","startAt":1588289677,"usageType":"unlimited"}];

}
if ($request.url.indexOf("/v4/shop/shelves") != -1){
    obj.data.trial = "true";
}
if ($request.url.indexOf("/v4/editor/template/recommended") != -1){
masking.defineProperties(masking, true);
colorful.defineProperties(colorful, true);

}
if ($request.url.indexOf("/v4/search/products") != -1){
enable.defineProperties(enable, true);
trial.defineProperties(trial, true);
}
if ($request.url.indexOf("/v4/template-square/") != -1){
usageType.defineProperties(usageType, unlimited);
ownership.defineProperties(ownership, free);
}
$done({body: JSON.stringify(obj)});