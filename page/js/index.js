var everyDay = new Vue({
    el: "#every_day",
    data: {
        content: ""
    },
    computed: {
        getContent: ()=> {
            console.log(this.content,999999)
            return this.content;
        }
    },
    created: ()=> {
        axios({
            method: "get",
            url: "/queryEveryDay"
        }).then((resp)=> {
           
            everyDay.content = resp.data.data[0].content;
            console.log(resp.data.data[0].content,everyDay.content,111)
        }).catch( (resp)=> {
            console.log("请求失败");
        });
    }
});

var articleList = new Vue({
    el: "#article_list",
    data: {
        page: 1,
        pageSize: 5,
        count: 100,
        pageNumList: [],
        articleList: [
            {   title: "过楚宫",
                content: "巫峡迢迢旧楚宫，至今云雨暗丹枫。微生尽恋人间乐，只有襄王忆梦中。",
                date: "2022-04-28",
                views: "101",
                tags: "诗歌 词曲",
                id: "1",
                link: ""
            },
            {   title: "劝学",
                content: `君子曰：学不可以已。

                　　青，取之于蓝，而青于蓝；冰，水为之，而寒于水。木直中绳，輮以为轮，其曲中规。虽有槁暴，不复挺者，輮使之然也。故木受绳则直，金就砺则利，君子博学而日参省乎己，则知明而行无过矣。
                
                　　故不登高山，不知天之高也；不临深溪，不知地之厚也；不闻先王之遗言，不知学问之大也。干、越、夷、貉之子，生而同声，长而异俗，教使之然也。诗曰：“嗟尔君子，无恒安息。靖共尔位，好是正直。神之听之，介尔景福。”神莫大于化道，福莫长于无祸。
                
                　　吾尝终日而思矣，不如须臾之所学也；吾尝跂而望矣，不如登高之博见也。登高而招，臂非加长也，而见者远；顺风而呼，声非加疾也，而闻者彰。假舆马者，非利足也，而致千里；假舟楫者，非能水也，而绝江河。君子生非异也，善假于物也。(君子生 通：性)
                
                　　南方有鸟焉，名曰蒙鸠，以羽为巢，而编之以发，系之苇苕，风至苕折，卵破子死。巢非不完也，所系者然也。西方有木焉，名曰射干，茎长四寸，生于高山之上，而临百仞之渊，木茎非能长也，所立者然也。蓬生麻中，不扶而直；白沙在涅，与之俱黑。兰槐之根是为芷，其渐之滫，君子不近，庶人不服。其质非不美也，所渐者然也。故君子居必择乡，游必就士，所以防邪辟而近中正也。
                
                　　物类之起，必有所始。荣辱之来，必象其德。肉腐出虫，鱼枯生蠹。怠慢忘身，祸灾乃作。强自取柱，柔自取束。邪秽在身，怨之所构。施薪若一，火就燥也，平地若一，水就湿也。草木畴生，禽兽群焉，物各从其类也。是故质的张，而弓矢至焉；林木茂，而斧斤至焉；树成荫，而众鸟息焉。醯酸，而蜹聚焉。故言有招祸也，行有招辱也，君子慎其所立乎！
                
                　　积土成山，风雨兴焉；积水成渊，蛟龙生焉；积善成德，而神明自得，圣心备焉。故不积跬步，无以至千里；不积小流，无以成江海。骐骥一跃，不能十步；驽马十驾，功在不舍。锲而舍之，朽木不折；锲而不舍，金石可镂。蚓无爪牙之利，筋骨之强，上食埃土，下饮黄泉，用心一也。蟹六跪而二螯，非蛇鳝之穴无可寄托者，用心躁也。(江海 一作：江河)`,
                date: "2022-04-28",
                views: "101",
                tags: "诗歌 词曲",
                id: "1",
                link: ""
            },
            {   title: "白雪歌送武判官归京",
                content: `北风卷地白草折，胡天八月即飞雪。
                忽如一夜春风来，千树万树梨花开。
                散入珠帘湿罗幕，狐裘不暖锦衾薄。
                将军角弓不得控，都护铁衣冷难着。(难着 一作：犹著)
                瀚海阑干百丈冰，愁云惨淡万里凝。
                中军置酒饮归客，胡琴琵琶与羌笛。
                纷纷暮雪下辕门，风掣红旗冻不翻。
                轮台东门送君去，去时雪满天山路。
                山回路转不见君，雪上空留马行处。`,
                date: "2022-04-28",
                views: "101",
                tags: "诗歌 词曲",
                id: "1",
                link: ""
            },
            {   title: "春江花月夜",
                content: `春江潮水连海平，海上明月共潮生。
                滟滟随波千万里，何处春江无月明！
                江流宛转绕芳甸，月照花林皆似霰。
                空里流霜不觉飞，汀上白沙看不见。
                江天一色无纤尘，皎皎空中孤月轮。
                江畔何人初见月？江月何年初照人？
                人生代代无穷已，江月年年望相似。(望相似 一作：只相似)
                不知江月待何人，但见长江送流水。
                白云一片去悠悠，青枫浦上不胜愁。
                谁家今夜扁舟子？何处相思明月楼？
                可怜楼上月裴回，应照离人妆镜台。(裴回 一作：徘徊)
                玉户帘中卷不去，捣衣砧上拂还来。
                此时相望不相闻，愿逐月华流照君。
                鸿雁长飞光不度，鱼龙潜跃水成文。
                昨夜闲潭梦落花，可怜春半不还家。
                江水流春去欲尽，江潭落月复西斜。
                斜月沉沉藏海雾，碣石潇湘无限路。
                不知乘月几人归，落月摇情满江树。(落月 一作：落花)`,
                date: "2022-04-28",
                views: "101",
                tags: "诗歌 词曲",
                id: "1",
                link: ""
            },
            {   title: "定风波·莫听穿林打叶声",
                content: `三月七日，沙湖道中遇雨，雨具先去，同行皆狼狈，余独不觉。已而遂晴，故作此(词)。

                莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。
                料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴。`,
                date: "2022-04-28",
                views: "101",
                tags: "诗歌 词曲",
                id: "1",
                link: ""
            },
            {   title: "稚子弄冰",
                content: `稚子金盆脱晓冰，彩丝穿取当银钲。(银钲 一作：银铮)
                敲成玉磬穿林响，忽作玻璃碎地声。(玻璃 一作：玻瓈)`,
                date: "2022-04-28",
                views: "101",
                tags: "诗歌 词曲",
                id: "1",
                link: ""
            },
            {   title: "两小儿辩日",
                content: `孔子东游，见两小儿辩斗，问其故。(辩斗 一作：辩日)
                一儿曰：“我以日始出时去人近，而日中时远也。”
                一儿曰：“我以日初出远，而日中时近也。”
                一儿曰：“日初出大如车盖，及日中则如盘盂，此不为远者小而近者大乎？”
                一儿曰：“日初出沧沧凉凉，及其日中如探汤，此不为近者热而远者凉乎？”
                孔子不能决也。
                两小儿笑曰：“孰为汝多知乎？”`,
                date: "2022-04-28",
                views: "101",
                tags: "诗歌 词曲",
                id: "1",
                link: ""
            }
        ]
    },
    computed: {
        jumpTo: ()=> {
            return  (page)=> {
                this.getPage(page, this.pageSize);
            }
        },
        getPage: ()=> {
            return  (page, pageSize)=> {
                var searcheUrlParams = location.search.indexOf("?") > -1 ? location.search.split("?")[1].split("&") : "";
                var tag = "";
                for (var i = 0 ; i < searcheUrlParams.length ; i ++) {
                    if (searcheUrlParams[i].split("=")[0] == "tag") {
                        try {
                            tag = searcheUrlParams[i].split("=")[1];
                        }catch (e) {
                            console.log(e);
                        }
                    }
                }
                if (tag == "") {//不是查询情况
                    axios({
                        method: "get",
                        url: "/queryBlogByPage?page=" + (page - 1) + "&pageSize=" + pageSize
                    }).then((resp)=> {
                        var result = resp.data.data;
                        var list = [];
                        for (var i = 0 ; i < result.length ; i ++) {
                            var temp = {};
                            temp.title = result[i].title;
                            temp.content = result[i].content;
                            temp.date = result[i].ctime;
                            temp.views = result[i].views;
                            temp.tags = result[i].tags;
                            temp.id = result[i].id;
                            temp.link = "/blog_detail.html?bid=" + result[i].id;
                            list.push(temp);
                        }
                        articleList.articleList = list;
                        articleList.page = page;
                    }).catch( (resp)=> {
                        console.log("请求错误");
                    });
                    axios({
                        method: "get",
                        url: "/queryBlogCount"
                    }).then((resp)=> {
                        articleList.count = resp.data.data[0].count;
                        articleList.generatePageTool;
                    });
                } else {
                    axios({
                        method: "get",
                        url: "/queryByTag?page=" + (page - 1) + "&pageSize=" + pageSize + "&tag=" + tag
                    }).then((resp)=> {
                        var result = resp.data.data;
                        var list = [];
                        for (var i = 0 ; i < result.length ; i ++) {
                            var temp = {};
                            temp.title = result[i].title;
                            temp.content = result[i].content;
                            temp.date = result[i].ctime;
                            temp.views = result[i].views;
                            temp.tags = result[i].tags;
                            temp.id = result[i].id;
                            temp.link = "/blog_detail.html?bid=" + result[i].id;
                            list.push(temp);
                        }
                        articleList.articleList = list;
                        articleList.page = page;
                    }).catch( (resp)=> {
                        console.log("请求错误");
                    });

                    axios({
                        method: "get",
                        url: "/queryByTagCount?tag=" + tag
                    }).then((resp)=> {
                        articleList.count = resp.data.data[0].count;
                        articleList.generatePageTool;
                    });
                }

            }
        },
        generatePageTool: ()=> {
            var nowPage = this.page;
            var pageSize = this.pageSize;
            var totalCount = this.count;
            var result = [];
            result.push({text:"<<", page: 1});
            if (nowPage > 2) {
                result.push({text: nowPage - 2, page:nowPage - 2});
            }
            if (nowPage > 1) {
                result.push({text: nowPage - 1, page:nowPage - 1});
            }
            result.push({text: nowPage, page:nowPage});
            if (nowPage + 1 <= (totalCount + pageSize - 1) / pageSize) {
                result.push({text:nowPage + 1, page: nowPage + 1});
            }
            if (nowPage + 2 <= (totalCount + pageSize - 1) / pageSize) {
                result.push({text:nowPage + 2, page: nowPage + 2});
            }
            result.push({text:">>", page: parseInt((totalCount + pageSize - 1) / pageSize)});
            this.pageNumList = result;
            return result;
        }
    },
    created: ()=> {
        this.getPage(this.page, this.pageSize);
    }
});