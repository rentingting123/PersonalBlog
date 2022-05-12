
// 每日一句
var everyDay = new Vue({
	el: "#every_day",
	data: {
		content: ""
	},
	computed: {
		getContent: () => {
			return this.content;
		}
	},
	created: function () {
		axios({
			method: "get",
			url: "/queryEveryDay"
		}).then((resp) => {

			everyDay.content = resp.data.data[0].content;
			console.log(resp.data.data[0].content, everyDay.content, 111)
		}).catch((resp) => {
			console.log("请求失败");
		});
	}
});


var articleListFun = new Vue({
	el: "#article_list",
	data: {
		page: 1,
		pageSize: 6,
		count: 100,
		pageNumList: [],
		articleList: []
	},
	computed: {
		jumpTo: function () {
			return function (page) {
				this.getPage(page, this.pageSize);
			}
		},
		getPage: function () {
			return function (page, pageSize) {
				var searcheUrlParams = location.search.indexOf("?") > -1 ? location.search.split("?")[1].split("&") : "";
				var tag = "";
				for (var i = 0; i < searcheUrlParams.length; i++) {
					if (searcheUrlParams[i].split("=")[0] == "tag") {
						try {
							tag = searcheUrlParams[i].split("=")[1];
						} catch (e) {
							console.log(e);
						}
					}
				}
				if (tag == "") {//不是查询情况
					axios({
						method: "get",
						url: "/queryBlogByPage?page=" + (page - 1) + "&pageSize=" + pageSize
					}).then((resp) => {
						var result = resp.data.data;
						var list = [];
						for (var i = 0; i < result.length; i++) {
							var temp = {};
							temp.title = result[i].title;
							temp.content = result[i].content;
							temp.date = result[i].ctime;
							temp.views = result[i].views;
							temp.tags = result[i].tags;
							temp.id = result[i].id;
							// temp.utime = timeUtil.dateFtt("yyyy-MM-dd hh:mm:ss",result[i].utime)
							temp.link = "/blog_detail.html?bid=" + result[i].id;
							list.push(temp);
						}
						console.log(list, 99999)
						articleListFun.articleList = list;
						articleListFun.page = page;
					}).catch((resp) => {
						console.log("请求错误");
					});
					axios({
						method: "get",
						url: "/queryBlogCount"
					}).then((resp) => {
						articleListFun.count = resp.data.data[0].count;
						articleListFun.generatePageTool;
					});
				} else {
					axios({
						method: "get",
						url: "/queryByTag?page=" + (page - 1) + "&pageSize=" + pageSize + "&tag=" + tag
					}).then((resp) => {
						var result = resp.data.data;
						var list = [];
						for (var i = 0; i < result.length; i++) {
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
						articleListFun.articleList = list;
						articleListFun.page = page;
					}).catch((resp) => {
						console.log("请求错误");
					});

					axios({
						method: "get",
						url: "/queryByTagCount?tag=" + tag
					}).then((resp) => {
						articleListFun.count = resp.data.data[0].count;
						articleListFun.generatePageTool;
					});
				}

			}
		},
		generatePageTool: function () {
			var nowPage = this.page;
			var pageSize = this.pageSize;
			var totalCount = this.count;
			var result = [];
			result.push({ text: "<<", page: 1 });
			if (nowPage > 2) {
				result.push({ text: nowPage - 2, page: nowPage - 2 });
			}
			if (nowPage > 1) {
				result.push({ text: nowPage - 1, page: nowPage - 1 });
			}
			result.push({ text: nowPage, page: nowPage });
			if (nowPage + 1 <= (totalCount + pageSize - 1) / pageSize) {
				result.push({ text: nowPage + 1, page: nowPage + 1 });
			}
			if (nowPage + 2 <= (totalCount + pageSize - 1) / pageSize) {
				result.push({ text: nowPage + 2, page: nowPage + 2 });
			}
			result.push({ text: ">>", page: parseInt((totalCount + pageSize - 1) / pageSize) });
			this.pageNumList = result;
			return result;
		}
	},
	created: function () {
		this.getPage(this.page, this.pageSize);
	}
});