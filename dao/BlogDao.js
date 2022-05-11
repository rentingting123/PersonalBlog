var dbutil = require("./DBUtil");
// 插入文章
function insertBlog(title, content, tags, views, ctime, utime, success) {
    var insertSql = "insert into blog (`title`, `content`, `tags`, `views`, `ctime`, `utime`) values (?, ?, ?, ?, ?, ?)";
    var params = [title, content, tags, views, ctime, ctime];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}
// 修改文章
function editBlog(id, title, content, tags, views, ctime, utime, success) {
    // update blog set views = views + 1 where id = ?;
    var insertSql = "update blog set `title` = ?, `content` = ?, `tags` = ?, `ctime` = ?, `utime` = ? where id = ?";
    // var insertSql = "update blog set (`title`, `content`, `tags`, `views`, `ctime`, `utime`) values ( ?, ?, ?, ?, ?, ?) WHERE(`id`) values (?)";
    var params = [ title, content, tags, views, ctime, ctime, id];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}
// 删除文章
function deleteBlog(id,success ) {
    // DELETE FROM `my_blog`.`blog` WHERE (`id` = '48');
    var insertSql = "DELETE FROM blog  WHERE(`id` = ?)";
    var params = [id];
    console.log(params,'333 数据库');
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}
// 查询文章分页
function queryBlogByPage(page, pageSize, success) {
    var insertSql = "select * from blog order by id desc limit ?, ?;";
    var params = [page * pageSize, pageSize];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}
// 查询文章数量
function queryBlogCount(success) {
    var querySql = "select count(1) as count from blog;";
    var params = [];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}
// 查询文章详情
function queryBlogById(id, success) {
    var querySql = "select * from blog where id = ?;";
    var params = [id];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}
// 查询全部文章
function queryAllBlog(success) {
    var querySql = "select * from blog order by id desc;";
    var params = [];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}
// 增加浏览次数
function addViews(id, success) {
    var querySql = "update blog set views = views + 1 where id = ?;";
    var params = [id];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}
// 查询热门文章
function queryHotBlog(size, success) {
    var querySql = "select * from blog order by views desc limit ?;";
    var params = [size];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

module.exports.insertBlog = insertBlog; 
module.exports.editBlog = editBlog; 
module.exports.deleteBlog = deleteBlog; 

module.exports.queryBlogByPage = queryBlogByPage;
module.exports.queryBlogCount = queryBlogCount;
module.exports.queryBlogById = queryBlogById;
module.exports.queryAllBlog = queryAllBlog;
module.exports.addViews = addViews;
module.exports.queryHotBlog = queryHotBlog;