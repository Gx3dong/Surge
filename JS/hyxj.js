/*黄油相机PRO

[Script]
http-response https?:\/\/.*\.bybuttey\.com\/(\/v4\/shop\/|\/v4\/users\/me|\/v4\/shop\/shelves|\/v4\/editor\/template\/recommended|\/v4\/search\/products) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/hyxj.js

[MITM]
hostname = *.bybuttey.com
*/ 

var obj = JSON.parse($response.body);
if ($request.url.indexOf("/v4/shop/") != -1){
    obj.brushes.ownership = "free";
    obj.brushes.remark = "使用期限：永久";
    obj.brushes.usageType = "unlimited"；
    obj.data.enable = "true";
}
if ($request.url.indexOf("/v4/users/me") != -1){
    obj.memberships = [{"endAt":1682897677,"id":"1","name":"普通会员","ownership":"temporary","startAt":1588289677,"usageType":"unlimited"}];

}
if ($request.url.indexOf("/v4/shop/shelves") != -1){
    obj.data.trial = "true"；
}
if ($request.url.indexOf("/v4/editor/template/recommended") != -1){
    obj.enable = "true"；
    obj.trial = "true"；
}
if ($request.url.indexOf("/v4/search/products") != -1){
    obj.enable = "true"；
    obj.trial = "true"；
}

$done({body: JSON.stringify(obj)});