/*
使用方法：
注意：该脚本无破解离线功能,只是给新版115的App添加创建离线任务的方法。
1.在[Script]分组下添加下面这行配置
http-response ^http:\/\/115\.com\/lx.*$ script-path=https://raw.githubusercontent.com/ikanam/Surge-Scripts/master/115lx.js, requires-body=true
http-response ^https?:\/\/webapi\.115\.com\/user\/check_sign.*$ script-path=https://raw.githubusercontent.com/ikanam/Surge-Scripts/master/115lx.js, requires-body=true
2.[MITM]分组添加hostname = *.115.com
3.在115Aapp中通过网页打开http://115.com/lx?taskdg=1(可在记录中保存该地址打开, 也可添加下面的配置将首页的签到按钮跳转重定向到离线下载页面)
[URL Rewrite]
^http:\/\/115\.com\/\?ct=sign$ http://115.com/lx?taskdg=1 header
4.快速创建下载任务的快捷指令: https://www.icloud.com/shortcuts/31e3a877cec340a48192aa081e25c05e
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