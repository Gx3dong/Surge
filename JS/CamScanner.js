/*
全能扫描王

https:\/\/api-cs.intsig.net\/purchase\/cs\/query_property


hostname = api-cs.intsig.net
*/



var obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry": "1780675200"}}};
$done({body: JSON.stringify(obj)});