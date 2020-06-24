/*
 * @name: 百度云盘资源搜索
 * @Author: 三角【修改自：Tampermonkey 太史子义慈】
 * @source：https://greasyfork.org/zh-CN/scripts/375337-百度网盘资源_搜索引擎_聚合
 * @version: 0.0.1
 * @description: 百度云搜索引擎整合
 * @include: pan.baidu.com 【手机网页版】
 * @createTime: 2020/6/19
 */

(function() {

    /* 遇到这些网站才执行 */
    var whiteList = ['pan.baidu.com'];

    if (whiteList.indexOf(window.location.hostname) < 0) {
        return;
    };

    if(window.location.href.indexOf("wap/home") < 0){
        return;
    }

    var key = encodeURIComponent('三角:百度云搜索:百度云手机网页');
  
    if (window[key]) {
        return;
    };
    
    window[key] = true;
    

    /* 网盘库 */
    function dir_all_ot() {
        var tea = [
            ["https://www.dashengpan.com/", "大圣盘", [
                ["", "https://www.dashengpan.com/search?keyword=%sv%", "bseg_option_1", ],
            ], ],
            ["https://dalipan.com/", "大力盘", [
                ["", "https://www.dalipan.com/search?keyword=%sv%", "bseg_option_1", ],
            ], ],
            ["https://www.xiaozhaolaila.com/", "小昭来啦", [
                ["", "https://www.xiaozhaolaila.com/s/search?q=%sv%", "bseg_option_1", ],
            ], ],
            ["https://www.yunpanjingling.com/", "云盘精灵", [
                ["", "https://www.yunpanjingling.com/search/%sv%", "bseg_option_1", ],
            ], ],
            ["https://www.xiaokesoso.com/", "小可搜搜", [
                ["", "https://www.xiaokesoso.com/s/search?q=%sv%", "bseg_option_2", ],
            ], ],
            ["http://www.panmeme.com/", "盘么么", [
                ["", "http://www.panmeme.com/query?key=%sv%", "bseg_option_2", ],
            ], ],
            ["http://www.xiaobaipan.com/", "小白盘", [
                ["", "http://www.xiaobaipan.com/list-%sv%.html", "bseg_option_2", ],
            ], ],
            ["http://www.rufengso.net/", "如风搜", [
                ["", "http://www.rufengso.net/s/name/%sv%", "bseg_option_2", ],
            ], ],
            ["http://www.slimego.cn/", "史莱姆", [
                ["", "http://www.slimego.cn/search.html?q=%sv%", "bseg_option_2", ],
            ], ],
            ["http://www.kengso.com/", "坑搜网", [
                ["", "http://www.kengso.com/s?wd=%sv%", "bseg_option_2", ],
            ], ],
            ["http://www.repanso.com", "热盘搜", [
                ["", "http://www.repanso.com/q?wd=%sv%", "bseg_option_2", ],
            ], ],
            ["http://www.shiyue.org/", "十月搜索", [
                ["", "http://www.shiyue.org/s/%sv%", "bseg_option_2", ],
            ], ],
            ["https://www.lzpan.com/", "懒盘", [
                ["", "https://www.lzpan.com/search/title?kw=%sv%", "bseg_option_2", ],
            ], ],
            ["http://wx.haogow.com/", "西部维度", [
                ["", "http://wx.haogow.com/so?keyword=%sv%", "bseg_option_2", ],
            ], ],
            ["http://wx.xingtuhua.com/", "商务中国", [
                ["", "http://wx.xingtuhua.com/so?keyword=%sv%", "bseg_option_2", ],
            ], ],
            ["http://www.vpansou.com/", "V盘搜", [
                ["", "http://www.vpansou.com/query?wd=%sv%", "bseg_option_2", ],
            ], ],
            ["http://aizhaomu.com/", "创业招", [
                ["", "http://aizhaomu.com/search/kw%sv%", "bseg_option_2", ],
            ], ],
            ["http://www.sodu123.com/", "搜度", [
                ["", "http://www.sodu123.com/sodu/so.php?q=%sv%", "bseg_option_2", ],
            ], ],

            ["https://www.qzhou.com.cn/", "轻舟网", [
                ["", "https://www.qzhou.com.cn/search?keyword=%sv%", "bseg_option_3", ],
            ], ],
            ["http://www.59pan.com/", "59网盘", [
                ["", "http://www.59pan.com/search/%sv%/", "bseg_option_3", ],
            ], ],
            ["http://www.pansou.com/", "盘搜", [
                ["", "http://www.pansou.com/?q=%sv%", "bseg_option_3", ],
            ], ],
            ["https://www.fastsoso.cn/", "fastsoso", [
                ["", "https://www.fastsoso.cn/search?k=%sv%", "bseg_option_3", ],
            ], ],
            ["http://www.51sopan.cn/", "51搜盘", [
                ["", "http://www.51sopan.cn/s?wd=%sv%", "bseg_option_3", ],
            ], ],
            ["http://www.baiduyunsousou.com/", "暮无雪", [
                ["", "http://www.baiduyunsousou.com/search?kw=%sv%", "bseg_option_3", ],
            ], ],
            ["https://www.dupanbang.com/", "度盘帮", [
                ["", "https://www.dupanbang.com/q/%sv%", "bseg_option_3", ],
            ], ],
            ["http://www.xilinjie.com/", "西林街", [
                ["", "http://www.xilinjie.com/s?q=%sv%&t=pan", "bseg_option_3", ],
            ], ],
            ["http://www.vpanso.com/", "微盘搜", [
                ["", "http://www.vpanso.com/s?wd=%sv%", "bseg_option_3", ],
            ], ],
            ["https://www.xxhh360.com/", "云搜大师", [
                ["", "https://www.xxhh360.com/search?q=%sv%", "bseg_option_3", ],
            ], ],
            ["https://www.esopan.com/", "易搜盘", [
                ["", "https://www.esopan.com/share/kw%sv%", "bseg_option_3", ],
            ], ],
            ["http://www.panpanso.com/", "盘盘搜", [
                ["", "http://www.panpanso.com/baiduwp?qiehuan=1&sousuo=%sv%", "bseg_option_3", ],
            ], ],
            ["http://www.lsdy8.com/bdpan.php", "猎手电影", [
                ["", "http://www.lsdy8.com/bdpan.php?sousuo=%sv%", "bseg_option_3", ],
            ], ],
            ["https://jidanso.com/", "网盘传奇", [
                ["", "https://www.jidanso.com/index.php/search/?q=%sv%", "bseg_option_3", ],
            ], ],
            ["https://pan.here325.com/", "325搜", [
                ["", "https://pan.here325.com/s?q=%sv%", "bseg_option_3", ],
            ], ],
            ["http://chawangpan.com/", "盘搜大师", [
                ["", "http://chawangpan.com/paymentList.html?field=%sv%&pgtype=search&pg=1&type=1&btn=1&flag=1&ctype=1", "bseg_option_3", ],
            ], ],
            ["http://www.jisoupan.com/", "及搜盘", [
                ["", "http://www.jisoupan.com/search/%sv%.html", "bseg_option_3", ],
            ], ],
            ["http://www.jisoupan.com/", "多多下载", [
                ["", "http://www.jisoupan.com/search/%sv%.html", "bseg_option_3", ],
            ], ],
            ["http://www.sowangpan.com/", "搜网盘", [
                ["", "http://www.sowangpan.com/search/%sv%-0-全部-0.html", "bseg_option_3", ],
            ], ],
            ["https://www.soohub.com/", "soohub", [
                ["", "https://www.soohub.com/search/%sv%/1", "bseg_option_3", ],
            ], ],
            ["http://www.xxdown.cn/", "西西", [
                ["", "http://www.xxdown.cn/e/action/ListInfo.php?title=%sv%&mid=1&tempid=10&ph=1", "bseg_option_3", ],
            ], ],
            ["http://www.99baiduyun.com/", "99搜索", [
                ["", "http://www.99baiduyun.com/baidu/%sv%", "bseg_option_3", ],
            ], ],

            ["http://mebook.cc/", "小书屋", [
                ["", "http://mebook.cc/?s=%sv%", "bseg_option_9", ],
            ], ],
            ["http://www.ireadweek.com/index.php", "周读", [
                ["", "http://www.ireadweek.com/index.php?g=portal&m=search&a=index&keyword=%sv%", "bseg_option_9", ],
            ], ],
            ["http://ibooks.org.cn/", "读书小站", [
                ["", "http://ibooks.org.cn/?s=下载 %sv%", "bseg_option_9", ],
            ], ],
            ["https://sobooks.cc/", "sobooks", [
                ["", "https://sobooks.cc/search/%sv%", "bseg_option_9", ],
            ], ],
            ["http://neikuw.com/", "内酷网", [
                ["", "http://neikuw.com/?s=%sv%", "bseg_option_9", ],
            ], ],
            ["https://www.xssousou.com/", "小说搜搜", [
                ["", "https://www.xssousou.com/s/%sv%.html://neikuw.com/?s=%sv%", "bseg_option_9", ],
            ], ],
            ["http://www.tushupan.com", "图书盘", [
                ["", "http://www.tushupan.com/search?query=%sv%", "bseg_option_9", ],
            ], ],

            ["http://www.sosoyunpan.com/", "搜搜云盘", [
                ["", "http://www.sosoyunpan.com/search.asp?wd=%sv%", "bseg_option_4", ],
            ], ],
            ["https://www.panuso.com/", "盘优搜", [
                ["", "https://www.panuso.com/s/%sv%.html", "bseg_option_4", ],
            ], ],
            ["https://pan.90xz.com/", "90网盘", [
                ["", "https://pan.90xz.com/search/%sv%", "bseg_option_4", ],
            ], ],
            ["https://www.dyroy.com/", "乐依分享", [
                ["", "https://www.dyroy.com/html/search.html?q=%sv%", "bseg_option_4", ],
            ], ],
            ["https://www.0933.me/", "网盘资源网", [
                ["", "https://www.0933.me/search.html?wd=%sv%", "bseg_option_4", ],
            ], ],
            ["https://www.sov5.cn/", "SoV5", [
                ["", "https://www.sov5.cn/search?q=%sv%", "bseg_option_4", ],
            ], ],
            ["http://www.zhaoyunpan.cn/", "找云盘", [
                ["", "http://www.zhaoyunpan.cn/share.php?key=%sv%", "bseg_option_4", ],
            ], ],
            ["http://sou.wolfbe.com/", "云搜一下", [
                ["", "http://sou.wolfbe.com/s?q=%sv%", "bseg_option_4", ],
            ], ],
            ["http://www.soupan.info/", "搜盘", [
                ["", "http://www.soupan.info/search.php?q=%sv%", "bseg_option_4", ],
            ], ],
            ["https://tool.lu/pansou/", "在线工具", [
                ["", "https://tool.lu/pansou/index.html?q=%sv%", "bseg_option_4", ],
            ], ],
            ["http://www.pan131.com/", "盘131", [
                ["", "http://www.pan131.com/yun/%sv%/", "bseg_option_4", ],
            ], ],

            ["https://www.baidu.com/s?wd=(pan|yun).baidu.com&ct=1", "百度搜索", [
                ["", "https://www.baidu.com/s?wd=%sv%%20(pan|yun).baidu.com&ct=1", "bseg_option_5", ],
            ], ],
            ["https://www.google.com.hk/search?q=pan%20or%20yun%20.baidu.com", "谷歌搜索", [
                ["", "https://www.google.com.hk/search?q=%sv%%20pan%20or%20yun%20.baidu.com", "bseg_option_5", ],
            ], ],
            ["https://magi.com/search?q=pan.baidu.com", "Magi搜索", [
                ["", "https://magi.com/search?q=%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["https://mijisou.com/?language=zh-CN&q=pan.baidu.com", "秘迹搜索", [
                ["", "https://mijisou.com/?language=zh-CN&q=%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["https://so.mezw.com/Search?wd=pan.baidu.com", "Mazi", [
                ["", "https://magi.com/search?q=%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["https://so.mezw.com/Search?wd=pan.baidu.com", "MEZW", [
                ["", "https://so.mezw.com/Search?wd=%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["https://searx.me/?language=zh-CN&q=pan.baidu.com", "searx", [
                ["", "https://searx.me/?language=zh-CN&q=%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["https://www.sogou.com/web?ie=utf8&query=pan.baidu.com", "搜狗搜索", [
                ["", "https://www.sogou.com/web?ie=utf8&query=%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["https://www.so.com/s?q=pan.baidu.com", "360好搜", [
                ["", "https://www.so.com/s?q=%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["http://www.chinaso.com/search/pagesearch.htm?q=pan.baidu.com", "中国搜索", [
                ["", "http://www.chinaso.com/search/pagesearch.htm?q=%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["https://cn.bing.com/search?q=pan.baidu.com", "必应搜索", [
                ["", "https://cn.bing.com/search?q=%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["https://m.sm.cn/s?q=pan.baidu.com", "神马搜索", [
                ["", "https://m.sm.cn/s?q=%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["http://www.sousuobd.com/?q=pan.baidu.com", "必达搜索", [
                ["", "http://www.sousuobd.com/?q=%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["https://lookao.com/search?q=pan.baidu.com", "lookao", [
                ["", "https://lookao.com/search?q=pan.baidu.com+%sv%", "bseg_option_5", ],
            ], ],
            ["https://dogedoge.com/results?q=pan.baidu.com", "多吉搜索", [
                ["", "https://dogedoge.com/results?q=pan.baidu.com+%sv%", "bseg_option_5", ],
            ], ],
            ["https://www.httpso.cn/pan.baidu.com.html", "网页搜", [
                ["", "https://www.httpso.cn/%sv%%20pan.baidu.com.html", "bseg_option_5", ],
            ], ],
            ["http://www.yhso.com/k/pan.baidu.com", "易好搜", [
                ["", "http://www.yhso.com/k/%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["http://www.saoso.net.cn/web/pan.baidu.com/", "扫搜", [
                ["", "http://www.saoso.net.cn/web/%sv%%20pan.baidu.com/", "bseg_option_5", ],
            ], ],
            ["http://www.bangsou.com/q/pan.baidu.com", "帮搜", [
                ["", "http://www.bangsou.com/q/%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["http://www.dgso.cn/k/pan.baidu.com", "稻谷搜索", [
                ["", "http://www.dgso.cn/k/%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["http://www.ruonu.com/pan.baidu.com.html", "若怒搜索", [
                ["", "http://www.ruonu.com/%sv%%20pan.baidu.com.html", "bseg_option_5", ],
            ], ],
            ["http://i.easou.com/s.m?q=pan.baidu.com", "宜搜", [
                ["", "http://i.easou.com/s.m?q=%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["https://www.ecosia.org/search?q=pan.baidu.com", "ecosia", [
                ["", "https://www.ecosia.org/search?q=%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["https://duckduckgo.com/?q=pan.baidu.com&ia=web", "duckgo", [
                ["", "https://duckduckgo.com/?q=%sv%+pan.baidu.com&ia=web", "bseg_option_5", ],
            ], ],
            ["https://www.webcrawler.com/serp?q=pan.baidu.com", "crawler", [
                ["", "https://www.webcrawler.com/serp?q=%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["https://suche.web.de/web/result?q=pan.baidu.com", "web.de", [
                ["", "https://suche.web.de/web/result?q=%sv%%20pan.baidu.com", "bseg_option_5", ],
            ], ],
            ["https://swisscows.ch/web?query=pan.baidu.com&region=zh-CN", "swisscows", [
                ["", "https://swisscows.ch/web?query=%sv%%20pan.baidu.com&region=zh-CN", "bseg_option_5", ],
            ], ],
            ["https://wangpan.renrensousuo.com/", "众人搜网盘", [
                ["", "https://wangpan.renrensousuo.com/jieguo?sa=网盘搜索&q=%sv%", "bseg_option_5", ],
            ], ],

            ["http://tansuo233.com/", "探索云盘", [
                ["", "http://tansuo233.com/?search=%sv%", "bseg_option_6", ],
            ], ],
            ["https://www.quzhuanpan.com/", "去转盘", [
                ["", "https://www.quzhuanpan.com/source/search.action?q=%sv%", "bseg_option_6", ],
            ], ],
            ["http://www.zhuzhupan.com/", "猪猪盘", [
                ["总线", "http://www.zhuzhupan.com/search?s=100&query=%sv%", "bseg_option_6", ],
                ["1", "http://www.zhuzhupan.com/search?s=1&query=%sv%", "bseg_option_6", ],
                ["2", "http://www.zhuzhupan.com/search?s=2&query=%sv%", "bseg_option_6", ],
                ["3", "http://www.zhuzhupan.com/search?s=3&query=%sv%", "bseg_option_6", ],
                ["4", "http://www.zhuzhupan.com/search?s=4&query=%sv%", "bseg_option_6", ],
                ["5", "http://www.zhuzhupan.com/search?s=5&query=%sv%", "bseg_option_6", ],
                ["6", "http://www.zhuzhupan.com/search?s=6&query=%sv%", "bseg_option_6", ],
                ["7", "http://www.zhuzhupan.com/search?s=7&query=%sv%", "bseg_option_6", ],
                ["8", "http://www.zhuzhupan.com/search?s=8&query=%sv%", "bseg_option_6", ],
            ], ],
            ["https://www.soyunpan.com/", "搜云盘", [
                ["", "https://www.soyunpan.com/search/%sv%-0-全部-0.html", "bseg_option_6", ],
            ], ],
            ["http://www.olecn.com/", "资源下载", [
                ["", "http://www.olecn.com/?s=%sv%", "bseg_option_6", ],
            ], ],

            ["https://www.xiazaisou.com/", "下载搜", [
                ["", "https://www.xiazaisou.com/wangpan?s=%sv%", "bseg_option_7", ],
            ], ],
            ["http://www.13910.com/", "盘找找", [
                ["", "http://www.13910.com/s/?kw=%sv%", "bseg_option_7", ],
            ], ],
            ["http://www.verypan.com/", "verypan", [
                ["", "http://www.verypan.com/index/index/baidusearch?keyword=%sv%", "bseg_option_7", ],
            ], ],
            ["https://www.ttyunsou.com/", "天天云搜", [
                ["", "https://www.ttyunsou.com/s?keyword=%sv%", "bseg_option_7", ],
            ], ],
            ["http://www.wodepan.com/", "我的盘", [
                ["", "http://www.wodepan.com/list/%sv%-1.html", "bseg_option_7", ],
            ], ],
            ["http://www.aiyoweia.com/", "哎呦喂啊", [
                ["", "http://www.aiyoweia.com/search/%sv%", "bseg_option_7", ],
            ], ],
            ["http://www.iwapan.com/", "爱挖盘", [
                ["", "http://www.iwapan.com/so.aspx?wd=%sv%", "bseg_option_7", ],
            ], ],
            ["http://www.xibianyun.com/wp/", "西边云", [
                ["", "http://www.xibianyun.com/wp/search?q=%sv%", "bseg_option_7", ],
            ], ],
            ["http://yun.java1234.com/", "专搜java", [
                ["", "http://yun.java1234.com/search?q=%sv%", "bseg_option_7", ],
            ], ],
            ["https://www.sosobtp.com/", "网盘搜索BT", [
                ["", "https://www.sosobtp.com/search/%sv%", "bseg_option_7", ],
            ], ],
            ["http://baiduyun.6miu.com/", "6miu", [
                ["", "http://baiduyun.6miu.com/word.html?kw=%sv%", "bseg_option_7", ],
            ], ],
            ["http://www.sowp.cn/", "网盘搜搜", [
                ["", "http://www.sowp.cn/list/%sv%-1.html", "bseg_option_7", ],
            ], ],
            ["http://www.friok.com/", "百度盘资源", [
                ["", "http://www.friok.com/?s=%sv%", "bseg_option_7", ],
            ], ],
            ["http://www.pansousou.net/", "盘搜搜", [
                ["", "http://www.pansousou.net/s?wd=%sv%", "bseg_option_7", ],
            ], ],
            ["http://www.sodwz.com/", "网盘资源网", [
                ["", "http://www.sodwz.com/search/type_0_1_%sv%/", "bseg_option_7", ],
            ], ],
            ["http://www.yigeju.cn/", "一个桔", [
                ["", "http://www.yigeju.cn/s.php?kw=%sv%", "bseg_option_7", ],
            ], ],
            ["http://www.pan91.com/", "pan91", [
                ["", "http://www.pan91.com/index/index/search?key=%sv%", "bseg_option_7", ],
            ], ],
            ["http://kaopu.so/", "靠谱搜索", [
                ["", "http://kaopu.so/pan/%sv%", "bseg_option_7", ],
            ], ],
            ["https://www.xiazaisou.com/wangpan", "下载搜", [
                ["", "https://www.xiazaisou.com/wangpan?s=%sv%", "bseg_option_7", ],
            ], ],
            ["http://pan.muyi.so/", "沐依神器", [
                ["", "http://pan.muyi.so/index.php/home/index/result.html?q=%sv%", "bseg_option_7", ],
            ], ],

            ["http://wx01.51caichang.com/", "51网盘", [
                ["", "http://wx01.51caichang.com/so?keyword=%sv%", "bseg_option_8", ],
            ], ],
            ["http://www.58wangpan.com/", "58网盘", [
                ["", "http://www.58wangpan.com/search/kw%sv%", "bseg_option_8", ],
            ], ],
            ["https://www.56wangpan.com/", "56网盘", [
                ["", "https://www.56wangpan.com/search/kw%sv%", "bseg_option_8", ],
            ], ],
            ["https://www.panc.cc/", "胖次搜索", [
                ["", "https://www.panc.cc/s/%sv%/td_0", "bseg_option_8", ],
            ], ],
            ["https://www.pp93.com/", "泡泡", [
                ["史莱姆", "http://www.pp93.com/pp93sou.php?Slime=%sv%", "bseg_option_8", ],
                ["盘搜", "http://www.pp93.com/pp93sou.php?pansou=%sv%", "bseg_option_8", ],
                ["胖次", "http://www.pp93.com/pp93sou.php?panc=%sv%", "bseg_option_8", ],
                ["盘搜搜", "http://www.pp93.com/pp93sou.php?pansoso=%sv%", "bseg_option_8", ],
            ], ],
            ["http://www.daysou.com/", "云搜", [
                ["全量", "http://www.daysou.com/s?q=%sv%&start=0&isget=1&tp=all&cl=0&line=4", "bseg_option_8", ],
                ["加密", "http://www.daysou.com/s?q=%sv%&start=0&isget=1&tp=all&cl=0&line=3", "bseg_option_8", ],
                ["1", "http://www.daysou.com/s?q=%sv%&start=0&isget=1&tp=all&cl=0&line=0", "bseg_option_8", ],
                ["3", "http://www.daysou.com/s?q=%sv%&start=0&isget=1&tp=all&cl=0&line=2", "bseg_option_8", ],
                ["2", "http://www.daysou.com/s?q=%sv%&start=0&isget=1&tp=all&cl=0&line=4", "bseg_option_8", ],
            ], ],
            ["http://www.wanpan.info/", "万盘搜索", [
                ["", "http://www.wanpan.info/k/%sv%", "bseg_option_8", ],
            ], ],
            ["https://www.yumuso.com/", "榆木搜", [
                ["", "https://www.yumuso.com/q/%sv%", "bseg_option_8", ],
            ], ],
            ["http://so.hzbslp.com/", "特多盘", [
                ["", "http://so.hzbslp.com/api.php?pn=1&sr=%sv%", "bseg_option_8", ],
            ], ],

            ["https://uzi8.cn/", "优质吧", [
                ["", "https://uzi8.cn/search/kw%sv%", "bseg_option_8", ],
            ], ],
            ["https://www.xiaobd.net/", "小不点搜索", [
                ["", "https://www.xiaobd.net/m/search?wd=%sv%", "bseg_option_8", ],
            ], ],
            ["https://www.h2ero.com/", "咕咕云", [
                ["", "https://www.h2ero.com/search?keywords=%sv%", "bseg_option_8", ],
            ], ],
            ["https://nyaso.com/", "喵搜动漫", [
                ["", "https://nyaso.com/dong/%sv%.html", "bseg_option_8", ],
            ], ],
            ["https://www.fqsousou.com/", "番茄搜搜", [
                ["", "https://www.fqsousou.com/s/%sv%.html", "bseg_option_8", ],
            ], ],
            ["http://www.sopanba.com/", "搜盘吧", [
                ["", "http://www.sopanba.com/s/name/%sv%", "bseg_option_8", ],
            ], ],
            ["http://wjsou.com/", "文件搜", [
                ["", "http://wjsou.com:8080/s2.jsp?q=%sv%", "bseg_option_8", ],
            ], ],
            ["https://wangpan007.com/", "网盘007", [
                ["", "https://wangpan007.com/share/kw%sv%", "bseg_option_8", ],
            ], ],
            ["https://www.yunpuzi.net/", "云铺子", [
                ["", "https://www.yunpuzi.net/all/s-%sv%.html", "bseg_option_8", ],
            ], ],
            ["https://www.cilimao.io/", "磁力猫", [
                ["", "https://www.cilimao.io/search?word=%sv%&resourceSource=1", "bseg_option_8", ],
            ], ],
            ["https://www.lesouyun.com/", "乐搜云", [
                ["", "https://www.lesouyun.com/s?wd=%sv%", "bseg_option_8", ],
            ], ],
            ["http://www.guanggua.com/", "盘115", [
                ["", "http://www.guanggua.com/search?key=%sv%", "bseg_option_8", ],
            ], ],
            ["http://www.sosuopan.com/", "搜索盘", [
                ["", "http://www.sosuopan.com/search?q=%sv%", "bseg_option_8", ],
            ], ],
            ["http://www.tuoniao.me/", "鸵鸟搜索", [
                ["", "http://www.tuoniao.me/search/%sv%/list", "bseg_option_8", ],
            ], ],
            ["http://www.91sousou.cn/", "91搜搜", [
                ["", "http://www.91sousou.cn/s/%sv%/", "bseg_option_8", ],
            ], ],
            ["https://www.xalssy.com.cn", "搜盘8", [
                ["", "https://www.xalssy.com.cn/search/kw%sv%", "bseg_option_8", ],
            ], ],
            ["https://yunpanem.com/", "云盘恶魔", [
                ["a", "https://yunpanem.com/search/a/%sv%/1.html", "bseg_option_8", ],
                ["f", "https://yunpanem.com/search/f/%sv%/1.html", "bseg_option_8", ],
                ["g", "https://yunpanem.com/search/g/%sv%/1.html", "bseg_option_8", ],
            ], ],
            ["https://www.52sopan.com/", "我爱搜盘", [
                ["", "https://www.52sopan.com/s.php?keyword=%sv%", "bseg_option_8", ],
            ], ],
            ["https://www.aisouziyuan.com/", "爱搜资源", [
                ["", "https://www.aisouziyuan.com/?name=%sv%", "bseg_option_8", ],
            ], ],
            ["http://www.pansoso.com/", "盘搜搜", [
                ["", "http://www.pansoso.com/zh/%sv%", "bseg_option_8", ],
            ], ],
            ["https://www.panhim.com/", "盘他", [
                ["", "https://www.panhim.com/search?query=%sv%", "bseg_option_8", ],
            ], ],
        ];
        return tea;
    }

    var dirall = dir_all_ot();

    /* 创建option */
    function new_option(ih, aid, ns) {
        var new_opt = document.createElement("option");
        new_opt.innerHTML = ih;
        new_opt.setAttribute("id", aid);
        ns.appendChild(new_opt);
    }



    /* 输入检测 */
    function sch_onInput(){
        var m_search = document.getElementById("msearch");
        if (m_search.value.length <= 0) {
           return; 
        }

    }

    /* button事件 */
    function btn_click () {
        new_input_val = document.getElementById("msearch").value;
        new_input_val_len = new_input_val.length;
        if (new_input_val_len > 0) {
            var option_index = document.getElementById("mselect").selectedIndex;
            var pcsearch = dirall[option_index][2][0][1];
            var dti = pcsearch.replace("%sv%", new_input_val);
            window.open(dti);
        } 
    }

    /* 创建布局界面 */
    function create_search_layout() {
        /* 找位置 */
        var main_container = document.getElementsByClassName("main-container");
        var header = main_container[0].firstElementChild;
        header.removeChild(header.childNodes[1]);

        /* 布局元素 */
        var m_span = document.createElement("span");
        var m_search = document.createElement("input");
        var m_button = document.createElement("input");
        var m_div = document.createElement("div");

        /* 创建selecter */
        var m_select = document.createElement('select');
        /* 配置选项 */
        
        for (i in dirall) {
            var v = dirall[i][1];
            var i1 = "new_opt_" + i;
            new_option(v, i1, m_select);
        }
        
        /* 布局属性设置 */
        m_span.style = "position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);";
        m_div.style = "vertical-align: middle;text-align:center";

        console.log(m_span.style.width);
        

        m_search.setAttribute("type","search");
        m_search.setAttribute("id","msearch");
        m_search.setAttribute("placeholder","输入搜索内容");
        m_search.oninput = sch_onInput;
        m_search.style = "height:22px;";
       
        m_select.setAttribute("id","mselect");
        m_select.style = "height:22px;float:left";

        m_button.setAttribute("type","button");
        m_button.setAttribute("value","搜索");
        m_button.style = "background-color: rgb(45, 173, 196);color: cornsilk;border:1px solid;float:right;";
        m_button.setAttribute("height","22px");
        m_button.onclick = btn_click;
        
        /* span放如header中 */
        header.appendChild(m_span);
        
        /* 新增的元素放入span */
        m_div.appendChild(m_select);
        m_div.appendChild(m_button);

        m_span.appendChild(m_search);
        m_span.appendChild(m_div);
    }

    /* 等待页面加载完毕 */
    window.onload = function () {
        
        create_search_layout();
    }
    

  })();