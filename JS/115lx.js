/*
使用方法：

[Script]

# 115 离线任务页面
http-response ^https?:\/\/115\.com\/lx.*$ script-path=https://raw.githubusercontent.com/ikanam/Surge-Scripts/master/115lx.js, requires-body=true

# 115 旧版签到
http-response ^https?:\/\/webapi\.115\.com\/user\/check_sign.*$ script-path=https://raw.githubusercontent.com/ikanam/Surge-Scripts/master/115lx.js, requires-body=true

# 115 新版签到
http-response ^https?:\/\/proapi\.115\.com\/ios\/2\.0\/user\/points_sign(?:\?.*)?$ script-path=https://raw.githubusercontent.com/ikanam/Surge-Scripts/master/115lx.js, requires-body=true


[MITM]
hostname = %APPEND% *.115.com


[URL Rewrite]
^https?:\/\/115\.com\/\?ct=sign$ http://115.com/lx?taskdg=1 header
*/

var body = $response.body;
var url = $request.url;

try {
    if (url.indexOf('/user/check_sign') !== -1) {
        var json = JSON.parse(body);

        if (json.data && typeof json.data === 'object') {
            json.data.is_new_sign = false;
        }

        body = JSON.stringify(json);
    } else if (url.indexOf('/user/points_sign') !== -1) {
        // 新版 points_sign 返回内容可能是二进制或加密数据，
        // 无法按 JSON 解析时保持原响应，避免破坏签到请求。
        try {
            var signJson = JSON.parse(body);

            if (
                signJson.data &&
                typeof signJson.data === 'object' &&
                Object.prototype.hasOwnProperty.call(signJson.data, 'is_new_sign')
            ) {
                signJson.data.is_new_sign = false;
                body = JSON.stringify(signJson);
            }
        } catch (e) {
            // 非 JSON 响应保持不变
        }
    } else {
        body = body.replace("UDown", "XXXXXXXXX");

        var clearJS = `<script type="text/javascript">
        $(function(){
            function actionSheetAction(index) {
                if (index == 4) {
                    return;
                }

                $.ajax({
                    url: '/web/lixian/?ct=lixian&ac=task_clear',
                    dataType: 'json',
                    data: {
                        flag: index
                    },
                    type: 'POST',
                    cache: false,
                    success: function () {
                        window.location.reload();
                    },
                    error: function () {
                        console.log('清空失败');
                    }
                });
            }

            function clearAction() {
                OOFJS.common.actionSheet(
                    '选择清空的操作',
                    [
                        '清空已完成任务',
                        '清空全部任务',
                        '清空失败任务',
                        '清空进行中任务'
                    ],
                    actionSheetAction
                );
            }

            setTimeout(function () {
                if (
                    typeof OOFJS !== 'undefined' &&
                    OOFJS.common &&
                    typeof OOFJS.common.addRightBarItem === 'function'
                ) {
                    OOFJS.common.addRightBarItem('清空', clearAction);
                }
            }, 200);
        });
        </script>`;

        body = body.replace(
            '</body>',
            clearJS + '\n</body>'
        );
    }
} catch (e) {
    console.log('115lx.js error: ' + e);
}

$done({
    body: body
});