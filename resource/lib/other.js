/**
 * Created by lijingwen on 2015-03-03.
 */

$(function () {
    make_weibo_keywords();
    makeTrendjson(trendvalue);
    makeJuleitab()
});


var weibo_keywords_words = [
    "萧亚轩",
    "郭敬明",
    "广东卫视",
    "新浪",
    "王炳翔",
    "刘晓庆",
    "后援会",
    "贾征宇",
    "赛区",
    "男神",
    "马文超",
    "南部",
    "粉丝",
    "评委",
    "现场",
    "晋级",
    "精彩",
    "导师",
    "帅哥",
    "清新",
    "鲜肉",
    "王子",
    "忧郁",
    "腾讯",
    "金秀贤",
    "直播",
    "台湾",
    "海选",
    "舞蹈",
    "选秀",
    "周五",
    "梦想",
    "暖男",
    "杨帅",
    "收官",
    "帅气",
    "独播",
    "金瀚",
    "才艺",
    "女神",
    "身材",
    "好看",
    "孙剑飞",
    "官微君",
    "兄弟",
    "奶油小生",
    "刘文涛",
    "唱歌",
    "搏击",
    "李扬",
    "魔术",
    "西部",
    "身兼数职",
    "梦之声",
    "东部",
    "北部",
    "首播",
    "拉芳",
    "耿斯汉",
    "初选",
    "嘉宾",
    "颜值",
    "鹿晗",
    "黄海波",
    "多多",
    "吴亦凡",
    "仙道彰",
    "肖凯",
    "阿尼",
    "欧巴",
    "浙江",
    "孝敬父母",
    "龙套",
    "赵延龙",
    "李易峰",
    "韩一思",
    "高圆圆",
    "管栎",
    "赵又廷",
    "马力",
    "古典舞",
    "黄征宇",
    "长腿",
    "伊能静",
    "李沙伦",
    "李圣佳"
];
var weibo_keywords_value = [
    "205",
    "166",
    "165",
    "154",
    "141",
    "133",
    "128",
    "118",
    "112",
    "107",
    "100",
    "92",
    "92",
    "83",
    "83",
    "68",
    "63",
    "63",
    "53",
    "52",
    "48",
    "46",
    "41",
    "41",
    "40",
    "40",
    "38",
    "37",
    "36",
    "36",
    "35",
    "35",
    "34",
    "33",
    "33",
    "31",
    "30",
    "28",
    "27",
    "26",
    "26",
    "45",
    "26",
    "25",
    "24",
    "22",
    "22",
    "22",
    "22",
    "18",
    "18",
    "17",
    "17",
    "16",
    "16",
    "15",
    "15",
    "14",
    "14",
    "14",
    "13",
    "13",
    "13",
    "13",
    "13",
    "13",
    "12",
    "12",
    "12",
    "12",
    "12",
    "12",
    "12",
    "11",
    "11",
    "11",
    "11",
    "11",
    "11",
    "10",
    "10",
    "10",
    "9",
    "9",
    "9",
    "9"
];


function make_weibo_keywords() {
    //default
    $('#weibo-keyword-tab span').eq(0).addClass('panel-tab-default-selected');
    GetKeywordChart();
    $('#weibo-keyword-tab span').live('click',function(){
        $('#weibo-keyword-tab span').removeClass('panel-tab-default-selected');
        $(this).addClass('panel-tab-default-selected');
        var id = $(this).attr('id');
        console.log('id:'+id);
        $('#keyword-container > div').css('display','none');
        switch (id){
            case "GetKeywordChart":GetKeywordChart();break;
            case "GetKeywordForm":GetKeywordForm();break;
        }
    });
}

//正负向

var trendvalue = [
    '#中国好男儿# 又整来这货，哪有一点阳刚男儿的样？回想之前无论是加油好男儿还是快男，师洋之流除了被炒了噱头和鸡皮疙瘩还剩下啥？好好做节目，少动歪脑子',
    '【《好男儿》惊现“妖男”网友：画面太美不敢看】上周五晚，广东卫视《中国好男儿》北部试镜会上，出现了一位“妖男”型选手。夸张的造型加上独特的表演方式，让选手徐飞在节目播出后饱受争议。而其三票直接晋级的结果，也让部分网友无法接受，关于节目的选拔标准也受到了质疑： http://t.cn/Rz6eTRJ',
    '【碎念】无聊看中国好男儿28号那期，老豹简直太棒，为什么不让他过。。。一群假脸花瓶都过了。。。',
    '人的审美真的会变，我要是早几年也追着那些小娘炮跑，以前还觉得马雪阳蛮帅的，，不过那时候就觉得刘洲成娘的一笔。。。。。。现在整个至上励合都不敢看了。。。。。。刚才为了围观四妹去看了一下中国好男儿，，，有几个娘的不行的简直受不了。。。。= = 我宁可找一个长得一般男人味更强的。',
    '最近瑶瑶在自己微博上大秀恩爱，网友爆尿此男竟然是选秀节目中国好男儿的选手，这哥们儿真是艳福不浅，这对巨凶居然被他承包了！',
    '周五档最激烈，含金量最高，一旦成功带来的增值效应也最大。四季度以来，从收视看，浙江#奔跑吧兄弟#最成功，深圳#极速前进#较为成功，苏卫#明星到我家#与平台地位相当，芒果#一年级#算是一般，央三#中国正在听#、山东#星球大战#、广东#中国好男儿#已炮灰，天津#百万粉丝#还需再观察。',
    '#中国好男儿#现在网上的爆料越来越多了，不知道是真是假了。',
    '#中国好男儿#没有你说的那么精彩，但是大波儿男好多，可以看[阴险]@三F王 http://t.cn/RzNOC5o',
    '#中国好男儿#最讨厌内定了，花絮里一大批帅哥不选，到了内定的人，烂的要死也夸的天花乱坠，所谓自由发挥还有伴奏或背景音乐也是呵呵了。而且这期开始唱歌开始修音了，当我们聋子啊？！对台湾来的那拨人毫无好感，长那么丑也敢自称帅哥！利晴天不是蔡康永的男宠么，来参加比赛估计打了不少招呼吧……',
    '这几年《中国好XX》盛行，换台间瞥到广东卫视的《中国好男儿》，想吐！男不男，女不女，搔首弄姿的三个嘉宾，再找一帮伪娘，不知性别，然后唱些乱七八糟，不知所云的歌的选手。我不知道这样的节目有何意义，居然敢叫这么牛逼的名字。中国真指望这帮性别都不知道的人就真完了，千万别拿艺术说事，恶心！',
    '#中国好男儿#的确像别人说得是选好看的而不是在乎才艺。我会觉得不公平就算你再帅没有才艺无非就是在舞台上摆酷耍帅那又能红多久最起码有才艺的人可以走实力派的路线后天可以经过包装不是吗？我赞同有才艺的人最讨厌像刘晓庆那样的人你还不是整容过还挑剔别人应该把你换掉省得有才华的人都被你扼杀了。',
    '中国好男儿南部地区的选拔糟糕透了，外形不错，才艺也不算太差的就待定。才艺很普通，外形也不算好的就直接晋级！本来觉得南部地区很有看头的，看来是期待越大，失望越大[鄙视][鄙视][鄙视]',
    '#中国好男儿#真是不知道说好的理性和控制通过率的郭恶人呢？看到他都是在通过[打脸][打脸][打脸][打脸]',
    '【@伊能静 无法参与#中国好男儿#录制声明】说是为了延长选手招募期限，播出调整至11月13日、14日起广东卫视逢周四、周五21:20播出，12月12日起逢周五21:20播出； 因录制变动，@刘晓庆、@郭敬明 两位可以参与录制，而#伊能静#某些原因缺席录制，目前节目组正积极联络新任导师人选。PS:一切因出场费吧？',
    '#中国好男儿##小平湖迎来大明星# 萧亚轩被发话：挑好男儿跟挑男友的标准一样吗？'
];



var nagativeList = [];

function makeTrendjson(trendvalue){
    var positivecount = 1919,nagativecount = 403,neutralitycount =175;
//    var str='';
//    for(var i in trendjson){
//        str = trendjson[i].substring(0,1);
//        if(str == "p"){
//            positivecount++;
//        }
//        else if(str == "n"){
//            nagativecount++;
////            nagativeList.push({
////                'nagative':trendjson[i].substring(2),
////                'value':trendvalue[i]
////            });
//        }
//        else{
//            neutralitycount++;
//        }
//    }
    console.log('P:'+positivecount+" N:"+nagativecount+' M:'+neutralitycount);

    var trendhtml='';
    for (var j = 0; j <trendvalue.length; j++) {
            trendhtml += '<tr>' +
                '<td class="serial-number">' +Number(j+1)+ '</td>' +
                '<td>' + trendvalue[j] + '</td>' +
                '</tr>';
        }

    console.log(trendhtml)
        $('#weibo-trend').html(trendhtml);


//    //分页
//    var selectcount = 20;
//    var total_count = nagativeList.length;
//    var total_page = Math.ceil((nagativeList.length) / selectcount);
//    $('#trend-total-count').html(total_count);
//    $('#trend-total-page').html(total_page);
//
//    var pages = '';
//    for (var k = 0; k < total_page; k++) {
//        pages += '<div page="' + (k + 1) + '" class="page-num">' + (k + 1) + '</div>';
//    }
//    $('#weibotrend-page .pages').html(pages);
//
//    //默认第一页
//    getpage(1);
//    $('#weibotrend-page .pages div').eq(0).addClass('page-num-select');
//    //点击页数
//    $('#weibotrend-page .pages div').bind('click', function () {
//        getpage($(this).attr('page'));
//        $('#weibotrend-page .pages div').removeClass('page-num-select');
//        $(this).addClass('page-num-select');
//        $('#weibotrend-page #current-page').html($(this).attr('page'));
//    });
//    function getpage(n) {
//        //alert(Number(selectcount*(n-1))+'-'+Number(selectcount*(n-1)+(selectcount-1)));
//        var trendhtml = '';
//        var start = Number(selectcount * (n - 1));
//        var end = '';
//        //last
//        if (total_count - Number(selectcount * (n - 2) + (selectcount)) < selectcount) {
//            end = total_count - 1;
//        }
//        else {
//            end = Number(selectcount * (n - 1) + (selectcount - 1))
//        }
//        for (var j = start; j <= end; j++) {
//            trendhtml += '<tr>' +
//                '<td class="serial-number">' +Number(j+1)+ '</td>' +
//                '<td>' + nagativeList[j].nagative + '</td>' +
//                '<td>' + nagativeList[j].value + '</td>' +
//                '</tr>';
//        }
//        console.log('haiyou:' + Number(total_count - Number(selectcount * (n - 2) + (selectcount))));
//
//
//        $('#weibo-trend').html(trendhtml);
//    }
    makeTrendChart();

    function makeTrendChart(){
             AmCharts.makeChart("trend-chart", {
            "type": "pie",
            "dataProvider": [{
                "title": "正向",
                "value": positivecount
            }, {
                "title": "负向",
                "value": nagativecount
            },
                {
                    "title": "中立",
                    "value": neutralitycount
                }],
            "titleField": "title",
            "valueField": "value",
            "labelRadius": 5,
            "radius": "40%",
            "innerRadius": "60%",
            "labelText": "[[title]]",
            "balloonText": "[[title]]:<b>([[percents]]%)</b>"
        });
    }



}

var juleijson=[
    {
        'title':'暖男贾征宇白手起家，身兼数职孝敬父母',
        'topic':[
            '中国好男儿',
            '身兼数职',
            '每月',
            '白手起家',
            '暖男',
            '一万',
            '贾征宇',
            '害羞',
            '深情',
            '孝敬父母'
        ],
        'value':[
            '0.033174',
            '0.013069',
            '0.013069',
            '0.010799',
            '0.009988',
            '0.009696',
            '0.008983',
            '0.008918',
            '0.007361',
            '0.007264'

        ]
    },
    {
        'title':'收官之战，刘晓庆身着白色透视礼服现身',
        'topic':[
            '中国好男儿',
            '刘晓庆',
            '之战',
            '收官',
            '现身',
            '白色',
            '海选',
            '身材',
            '身着',
            '透视',
            '礼服',
            '蕾丝',
            '少女'

        ],
        'value':[
            '0.023428',
            '0.020761',
            '0.019166',
            '0.018714',
            '0.017952',
            '0.01769',
            '0.017618',
            '0.017547',
            '0.017476',
            '0.017476',
            '0.017476',
            '0.017476',
            '0.015999'

        ]
    },

    {
        'title':'刘文涛撞脸萧亚轩弟弟，魔术舞蹈结合',
        'topic':[
            '好男儿',
            '中国',
            '视频',
            '腾讯',
            '萧亚轩',
            '全网',
            '独播',
            '弟弟',
            '撞脸',
            '刘文涛',
            '舞蹈',
            '魔术',
            '结合'
        ],
        'value':[
            '0.046265',
            '0.04377',
            '0.03073',
            '0.028065',
            '0.027498',
            '0.026251',
            '0.025911',
            '0.013438',
            '0.011397',
            '0.010886',
            '0.010433',
            '0.010149',
            '0.009639'

        ]
    },
    {
        'title':'孙剑飞自编古典舞，忧郁王子范儿',
        'topic':[
            '好男儿',
            '中国',
            '忧郁',
            '古典舞',
            '油纸伞',
            '自编',
            '手执',
            '王子',
            '愁肠',
            '肢体',
            '万千',
            '孙剑飞',
            '气质',
            '跳',
            '艺术家'

        ],
        'value':[
            '0.034042',
            '0.032775',
            '0.016942',
            '0.014567',
            '0.013538',
            '0.013538',
            '0.013459',
            '0.012271',
            '0.011955',
            '0.011321',
            '0.011321',
            '0.010767',
            '0.009738',
            '0.009659',
            '0.009026'

        ]
    },
    {
        'title':'杨帅舞蹈刚柔并济，实力强大',
        'topic':[
            '好男儿',
            '中国',
            '翻滚',
            '杨帅',
            '舞蹈',
            '说',
            '强大',
            '实力',
            '阳刚',
            '阴柔',
            '娱乐',
            '并济',
            '真正',
            '兼具',
            '柔情'

        ],
        'value':[
            '0.035569',
            '0.032093',
            '0.015066',
            '0.013729',
            '0.009896',
            '0.00847',
            '0.008024',
            '0.007756',
            '0.007756',
            '0.007489',
            '0.007311',
            '0.007222',
            '0.007132',
            '0.006776',
            '0.006776'

        ]
    },
    {
        'title':'中国好男儿十二强诞生',
        'topic':[
            '中国好男儿',
            '表现',
            '节目',
            '全国',
            '十二',
            '拭目以待',
            '强',
            '选秀',
            '选手',
            '奶油小生'
        ],
        'value':[
            '0.042339',
            '0.014783',
            '0.014752',
            '0.013873',
            '0.013371',
            '0.013025',
            '0.012994',
            '0.012209',
            '0.012084',
            '0.011048'

        ]
    }



];

function makeJuleitab(){
    var tab = '';
    for(var i=0;i<juleijson.length;i++){
        tab+='<span eq="'+i+'">话题'+Number(Number(i)+Number(1))+'</span>';
    }
    $('#weibo-julei-tab').html(tab);
    //default
    GetJuleiJson(0);
    //MakeJuleiChart(0);
    //click
    $('#weibo-julei-tab span').live('click',function(){
        var it = $(this);
        GetJuleiJson(it.attr('eq'));
        //MakeJuleiChart(it.attr('eq'));
    });
}

function GetJuleiJson(index) {
    $('#weibo-julei-tab span').removeClass('weibo-julei-tab-selected');
    $('#weibo-julei-tab span').eq(index).addClass('weibo-julei-tab-selected');
    var juleihtml =''
    for(var i in juleijson[index].topic){
        juleihtml += '<tr>' +
            '<td class="serial-number">'+Number(Number(i)+Number(1))+'</td>' +
            '<td>' + juleijson[index].topic[i] + '</td>' +
            '<td>' + juleijson[index].value[i] + '</td>' +
            '</tr>';
    }
    $('#julei-title').html(juleijson[index].title);
    $('#weibo-julei').html(juleihtml);
}

function MakeJuleiChart(index){
    var json = [];
    for(var i in juleijson[index].topic){
        var x = 10+i;
        var y = 15+Math.random();
        json.push({
            "word":juleijson[index].topic[i],
            "value":juleijson[index].value[i],
            "x":x,
            "y":y
        });
    }

        AmCharts.makeChart("julei-chart", {
        "type": "xy",
        "pathToImages": "http://www.amcharts.com/lib/3/images/",
        "dataProvider": json,
        "valueAxes": [{
            "position":"bottom",
            "axisAlpha": 0
        }, {
            "axisAlpha": 0,
            "position": "left"
        }],
        "startDuration": 1.5,
            "marginTop": 0,
            "marginRight": 0,
            "marginLeft": 0,
            "marginBottom": 0,
            "autoMargins": false,
        "graphs": [{
            "fillColors":"#FFD073",
            "labelText": "[[word]]",
            "balloonText": "[[word]]:<b>[[value]]</b>",
            "bullet": "circle",
            "bulletBorderAlpha": 0.2,
            "bulletAlpha": 0.8,
            "lineAlpha": 0,
            "fillAlphas": 0,
            "valueField": "value",
            "xField": "x",
            "yField": "y",
            "maxBulletSize": 110
        }]
    });
 }

function GetKeywordChart(){
    $('#keyword-chart-body').css('display','block');
    var json = [];
    for(var i in weibo_keywords_words){
        var x = Math.floor(Math.random()*60+2);
        var y = Math.floor(Math.random()*70+5);
        json.push({
            "word":weibo_keywords_words[i],
            "value":weibo_keywords_value[i],
            "x":x,
            "y":y
        });
    }

    AmCharts.makeChart("keyword-chart", {
        "type": "xy",
        "pathToImages": "http://www.amcharts.com/lib/3/images/",
        "dataProvider": json,
        "valueAxes": [{
            "position":"bottom",
            "axisAlpha": 0
        }, {
            "axisAlpha": 0,
            "position": "left"
        }],
        "startDuration": 1.5,
        "marginTop": 0,
        "marginRight": 0,
        "marginLeft": 0,
        "marginBottom": 0,
        "autoMargins": false,
        "graphs": [{
            "fillColors":"#FFD073",
            "labelText": "[[word]]",
            "balloonText": "[[word]]:<b>[[value]]</b>",
            "bullet": "circle",
            "bulletBorderAlpha": 0.2,
            "bulletAlpha": 0.8,
            "lineAlpha": 0,
            "fillAlphas": 0,
            "valueField": "value",
            "xField": "x",
            "yField": "y",
            "maxBulletSize": 150
        }]
    });
}

function GetKeywordForm(){
    $('#keyword-form-body').css('display','block');
    var weibo_keywords = [];
    for (var i in weibo_keywords_words) {
        weibo_keywords.push({
            'keyword': weibo_keywords_words[i],
            'value': weibo_keywords_value[i]
        });
    }

    //分页
    var selectcount = 10;
    var total_count = weibo_keywords.length;
    var total_page = Math.ceil((weibo_keywords.length) / selectcount);
    $('#total-count').html(total_count);
    $('#total-page').html(total_page);

    var pages = '';
    for (var k = 0; k < total_page; k++) {
        pages += '<div page="' + (k + 1) + '" class="page-num">' + (k + 1) + '</div>';
    }
    $('#weibokeword-page .pages').html(pages);

    //默认第一页
    getpage(1);
    $('#weibokeword-page .pages div').eq(0).addClass('page-num-select');
    //点击页数
    $('#weibokeword-page .pages div').bind('click', function () {
        getpage($(this).attr('page'));
        $('#weibokeword-page .pages div').removeClass('page-num-select');
        $(this).addClass('page-num-select');
        $('#weibokeword-page #current-page').html($(this).attr('page'));
    });
    function getpage(n) {
        //alert(Number(selectcount*(n-1))+'-'+Number(selectcount*(n-1)+(selectcount-1)));
        var keywordshtml = '';
        var start = Number(selectcount * (n - 1));
        var end = '';
        //last
        if (total_count - Number(selectcount * (n - 2) + (selectcount)) < selectcount) {
            end = total_count - 1;
        }
        else {
            end = Number(selectcount * (n - 1) + (selectcount - 1))
        }
        for (var j = start; j <= end; j++) {
            keywordshtml += '<tr>' +
                '<td class="serial-number">' +Number(j+1)+ '</td>' +
                '<td>' + weibo_keywords[j].keyword + '</td>' +
                '<td>' + weibo_keywords[j].value + '</td>' +
                '</tr>';
        }
        console.log('haiyou:' + Number(total_count - Number(selectcount * (n - 2) + (selectcount))));


        $('#weibo-keywords').html(keywordshtml);
    }
}