/*
微商水印相机

>Gx3dong制作,免费资源群:1077223830.进群不迷路.
>木木团队,欢迎关注公众号:十三座州府

QuanX1.0.10:
[rewrite_local]
https:\/\/user\.edujia.com\/\/user\/ws\/vip\/(query\/info.do|main\/query\/info.do) url script-response-body https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/wshshyxj.js


Surge4:
[Script]
http-response https:\/\/user\.edujia.com\/\/user\/ws\/vip\/(query\/info.do|main\/query\/info.do) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Gx3dong/Surge/master/JS/wshshyxj.js



[MITM]
hostname = user.edujia.com
*/




var obj = JSON.parse($response.body);
if ($request.url.indexOf("//user/ws/vip/query/info.do") != -1){
    obj.data.object.isVip = 1;
    obj.data.object.buyType = 3;
    obj.data.object.expireTime = "永久";
}
if ($request.url.indexOf("//user/ws/vip/main/query/info.do") != -1){
   obj.data.object.isVip = 1;
   obj.data.object.buyType = 3;
}
$done({body: JSON.stringify(obj)});
