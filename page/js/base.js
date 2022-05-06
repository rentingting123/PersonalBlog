var randomTags = new Vue({
    el: "#random_tags",
    data: {
        tags: ['楚辞','写雪','柳树','梅花','爱国','离别']
    }, 
    computed: {
        randomColor: ()=> {
            return ()=> {
                var red = Math.random() * 255;
                var green = Math.random() * 255;
                var blue = Math.random() * 255;
                return "rgb(" + red + ", " + green + ", " + blue + ")";
            }
        },
        randomSize:  ()=> {
            return ()=> {
                var size = (Math.random() * 20 + 12) + "px";
                return size;
            }
        }
    },
    created:  ()=> {
        // axios({
        //     method: "get",
        //     url: "/queryRandomTags"
        // }).then( (resp)=> {
        //     var result = [];
        //     for (var i = 0 ; i < resp.data.data.length ; i ++) {
        //         result.push({text:resp.data.data[i].tag, link:"/?tag=" + resp.data.data[i].tag});
        //     }
        //     randomTags.tags = result;
        //     console.log(randomTags.tags,8888)
        // });
    }
});

var newHot = new Vue({
    el: "#new_hot",
    data: {
        titleList: []
    },
    created: ()=> {
        axios({
            method: "get",
            url: "/queryHotBlog"
        }).then( (resp)=> {
            var result = [];
            for (var i = 0 ; i < resp.data.data.length ; i ++) {
                var temp = {};
                temp.title = resp.data.data[i].title;
                temp.link = "/blog_detail.html?bid=" + resp.data.data[i].id;
                result.push(temp);
            }
            newHot.titleList = result;
        });
    }
});

var newComments = new Vue({
    el: "#new_comments",
    data: {
        commentList: [
            {name: "邓涵", date: "2022-04-15", comment: "江水沉沉帆影过，游鱼到晚透寒波。渡口双双飞白鸟，烟袅，芦花深处隐渔歌。"},
            {name: "路见习", date: "2022-04-22", comment: "忽忆周天子，驱车上玉山。"},
            {name: "陆建新", date: "2022-04-25", comment: "个里愁人肠自断，由来不是此声悲。"},
            {name: "薛彩进", date: "2022-04-26", comment: "你的留言功能不错啊"},
            {name: "萌新", date: "2022-04-27", comment: "征途微雨动春寒，片片飞花马上残"},
            {name: "张三思", date: "2022-04-28", comment: "今我不乐，岁月如驰。"},
            {name: "丁文文", date: "2022-05-01", comment: "载驰载驱，聊以忘忧。"},
            {name: "李青林", date: "2022-05-03", comment: "历览前贤国与家，成由勤俭破由奢。"},
            {name: "薛德", date: "2022-05-04", comment: "俗子胸襟谁识我？英雄末路当磨折。"},
            {name: "顾佳", date: "2022-05-06", comment: "几人曾预南薰曲，终古苍梧哭翠华。"},
            {name: "张召忠", date: "2022-04-08", comment: "还望故乡，郁何垒垒！"}
        ]
    },
    created: ()=> {
        axios({
            method: "get",
            url: "/queryNewComments"
        }).then( (resp)=> {
            console.log(resp);
            var result = [];
            for (var i = 0 ; i < resp.data.data.length ; i ++) {
                var temp = {};
                temp.name = resp.data.data[i].user_name;
                temp.date = resp.data.data[i].ctime;
                temp.comment = resp.data.data[i].comments;
                result.push(temp);
            }
            newComments.commentList = result;
        });
    }
});