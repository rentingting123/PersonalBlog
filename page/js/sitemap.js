
// 文章列表
var blogList = new Vue({
    el: "#blog_list",
    data: {
        blogList: [],
    },
    computed: {

    },
    created: ()=> {
        axios({
            method: "get",
            url: "/queryAllBlog"
        }).then( (resp)=> {
            for (var i = 0 ; i < resp.data.data.length ; i ++) {
                resp.data.data[i].link = "/blog_detail.html?bid=" + resp.data.data[i].id;
            }
            blogList.blogList = resp.data.data
            // .map(item => {
            //     let res =  {
            //         ...item,
            //         ctime: moment(item.ctime).format("YYYY-MM-DD HH:mm:ss")
            //     }
            //     console.log(res,item.ctime,66,88888);
            //     return res
            // });
            // console.log(blogList.blogList)
        });
    }
});