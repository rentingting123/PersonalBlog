
// 文章详情
var editBlog = new Vue({
    el: "#edit_blog",
    data: {
        bid:-1,
        title: "",
        content: "",
        tags: "",
        isAdd: true
    },
    computed: {
        submitBlog: function() {
            return function () {
              var content = $("#editor").html();
              var title = $("#title").val();
              var tags = $("#tags").val();
              if (title === "") {
                alert("标题不能为空");
                return false;
              } else if (tags === "") {
                alert("标签不能为空");
                return false;
              } else if (content === "") {
                alert("文章内容不能为空");
                return false;
              }
                // 新增
                if(editBlog.isAdd){
                    axios({
                        url: "/addBlog?title=" + title + "&tags=" + tags,
                        method: "post",
                        data:content,
                        success: function (resp) {
                            console.log(resp)
                        var result = JSON.parse(resp);
                        alert(result.msg);
                        },
                        error: function (resp) {
                        console.log(resp);
                        },
                    });
                }else{
                    // 编辑 
                    axios({
                        url: "/editBlog?id=" + editBlog.bid + "&title=" + title + "&tags=" + tags,
                        method: "post",
                        data: content,
                        success: function (resp) {
                        var result = JSON.parse(resp);
                        alert(result.msg);
                        },
                        error: function (resp) {
                        console.log(resp);
                        },
                    });
                }
            //   window.history.go(-1);
            }
        }
    },
    created:  ()=> {
        var searcheUrlParams = location.search.indexOf("?") > -1 ? location.search.split("?")[1].split("&") : "";
        if (searcheUrlParams == "") {
            return;
        }
        var bid = -1;
      
        for (var i = 0 ; i < searcheUrlParams.length ; i ++) {
            if (searcheUrlParams[i].split("=")[0] == "bid") {
                try {
                    bid = parseInt(searcheUrlParams[i].split("=")[1]);
                }catch (e) {
                    console.log(e);
                }
            }
        }
        axios({
            method: "get",
            url: "/queryBlogById?bid=" + bid
        }).then( (resp)=> {
            var result = resp.data.data[0];
            editBlog.title = result.title;
            editBlog.content = result.content;
            editBlog.tags = result.tags;
            editBlog.isAdd = bid !== -1 ? false :  true
            editBlog.bid = bid
            console.log(bid,editBlog.isAdd,'searcheUrlParams')
        }).catch( (resp)=> {
            console.log("请求失败");
        });
    }
});
