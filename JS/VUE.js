body = $response.body.replace(/\"isPremium\":false/, "\"isPremium\":true").replace(/\"valid\":false/, "\"valid\":true")
$done({body});