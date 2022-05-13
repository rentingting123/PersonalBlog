
// 文章列表
var blogList = new Vue({
	el: "#blog_list",
	data: {
		blogList: [],
	},
	computed: {
		deleteBlogId: function () {
			return function (id) {
				axios({
					method: "get",
					url: "/deleteBlog?id=" + id,
				}).then((resp) => {
					alert(resp.data.msg);
					this.getList()
				});
			}
		},
		getList: function(){
			return function (id) {
				axios({
					method: "get",
					url: "/queryAllBlog"
				}).then((resp) => {
					for (var i = 0; i < resp.data.data.length; i++) {
						resp.data.data[i].link = "/blog_detail.html?bid=" + resp.data.data[i].id;
					}
					blogList.blogList = resp.data.data
				});
			}
		}
	},
	created: function() {
		console.log(1111);
		this.getList()
	}
});