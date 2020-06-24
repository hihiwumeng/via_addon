/*
 * @name: 获取百度云盘提取码
 * @Author: 三角【修改自：Tampermonkey 哩呵】
 * @source：https://greasyfork.org/zh-CN/scripts/378301-网盘助手
 * @version: 0.0.1
 * @description: 获取百度云盘提取码
 * @include: pan.baidu.com 【手机网页版】
 * @createTime: 2020/6/22
 */

(function () {
    
    var whiteList = ['pan.baidu.com', 'api.newday.me'];
    
    if (whiteList.indexOf(window.location.hostname) < 0) {
    return;
    };
    
    var key = encodeURIComponent('三角:获取百度云盘提取码:百度云手机网页');
  
    if (window[key]) {
        return;
    };

    /* 加载第三方库 */
    function createScripte_query(address_str) {
        /* 创建元素 */
        var m_head = document.getElementsByTagName("head");
        var m_script = document.createElement("script");
    
        m_script.src = address_str;
    
        m_head[0].appendChild(m_script);
    
        return m_script;
    }

    /* 获取point */
    function getSharePoint(str) {
        if (str.length < 2) {
            return "0:0";
        }
    
        var path = "";
        var current, last = str[0].charCodeAt();
        var sum = last;
        for (var i = 1; i < str.length; i++) {
            current = str[i].charCodeAt();
            if (i == 1) {
                path = path + "M";
            } else {
                path = path + " L";
            }
            path = path + current + " " + last;
            last = current;
            sum = sum + current;
        }
        path = path + " Z";
        var index = sum % str.length;
        var data = Snap.path.getPointAtLength(path, str[index].charCodeAt());
        return data.m.x + ":" + data.n.y;
    }
    
    /* 修改百度云分享界面 */
    function createLayout_baidu(urlStr) {
    
        var baidu_div = document.getElementsByClassName("extract-content");
        var m_div = document.createElement("div");
        var m_send_a = document.createElement("a");
        
    
        m_div.style = "height:50px;text-align: center;background-color: #06A7FF;border-radius: 50px;font-size: 14px;line-height:48px;margin-top:20px";
    
        m_send_a.setAttribute("href", urlStr);
        m_send_a.setAttribute("target", "_blank");
        m_send_a.innerText = "提取码";
        m_send_a.style = "color: #F9F9F9;font-weight: bold;vertical-align: middle;letter-spacing:4px";
    
        m_div.appendChild(m_send_a);
    
        baidu_div[0].appendChild(m_div);
    }
    
    /* 修改query界面 */
    function createLayout_query(sharePWD) {
        document.body.removeChild(document.body.firstChild);
    
        var m_mainDiv = document.createElement("div");
        var m_subDiv = document.createElement("div");
        var m_img = document.createElement("img");
        var m_sharePWD = document.createElement("p");
    
        m_mainDiv.style = "text-align: center;position:absolute;width:100%; margin-top: 15%;background-attachment: fixed;";
    
        m_img.setAttribute("src", "http://www.hkcgart.com/ueditor/php/upload/image/20170321/1490105403116185.jpg");
        m_img.setAttribute("width", "320px");
        m_img.setAttribute("height", "416px");
    
        m_subDiv.style = "padding-left: 25%;padding-right: 25%;";
    
        m_sharePWD.style = "background-color: black;color: rgb(255, 255, 255);font-size: xxx-large;font-weight: bold;border-radius: 50px;vertical-align: middle;line-height:250%;letter-spacing:4px";
    
        if (sharePWD === null || sharePWD === "") {
            m_sharePWD.innerText = "获取失败";
        } else {
            m_sharePWD.innerText = sharePWD;
        }
    
        document.body.appendChild(m_mainDiv);
        m_mainDiv.append(m_img);
        m_mainDiv.append(m_subDiv);
        m_subDiv.append(m_sharePWD);
    }
    
    
    /* 获取分享密码 */
    function getSharePWD(data) {
        var reg = /"share_pwd":"(.*)"/;
        var sharePWD;
    
        var xhr = new XMLHttpRequest();
        xhr.open(data.method, data.url, true);
    
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
        xhr.send(
            "share_id=" + data.shareID + "&share_link=https://pan.baidu.com/share/init?surl=" + data.shareID + "&share_point=" + data.sharePoint + "&share_source=baidu"
        );

    
        xhr.onreadystatechange = function () {
            /*
            console.log(xhr.status);
            console.log(xhr.readyState);
            console.log(xhr.responseText);
            */
    
            if (xhr.status === 200 && xhr.readyState === 4) {
                console.log(xhr.responseText);
                sharePWD = reg.exec(xhr.responseText)[1].trim();
                console.log(sharePWD);
                createLayout_query(sharePWD);
            }
        };
    }
    
    
    function option_baidu() {
    
        var queryURL = "https://api.newday.me/";
        var reg = /\?surl=(.*)/;
        var shareArg_baidu = reg.exec(window.location.search)[1].trim();
    
        createLayout_baidu(queryURL + shareArg_baidu);
    }
    
    function option_query() {
    
        /* 加载snap库 */
        var script_snap = createScripte_query("https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js");
    
        script_snap.onload = function () {
            var reg = /api.newday.me\/(.*)/;
            var shareID = reg.exec(window.location.href)[1].trim();
            var sharePoint = getSharePoint(shareID);
    
            var data = {
                shareID: shareID,
                sharePoint: sharePoint,
                method: "POST",
                url: "https://api.newday.me/share/disk/query"
            };
    
            console.log(data);
            getSharePWD(data);
    
        }
    
    }
    
    if (window.location.hostname === "pan.baidu.com") {
        option_baidu();
    }
    
    if (window.location.hostname === "api.newday.me") {
        option_query();
    }
})();