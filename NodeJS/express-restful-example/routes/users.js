var express = require('express');
var router = express.Router();

var users = [
        {id:1,name:"jack"},
        {id:2,name:"tom"}
];


var user_1 = {id:1,name:"jack"};

var user_oper = {
    "retCode":200,
    "message":""
};

//查询列表
router.get('/', function(req, res, next) {
    res.contentType('application/json;charset=utf-8');//返回的数据类型
    res.send(JSON.stringify(users));//给客户端返回一个json格式的数据
    res.end();
});

//查询单个对象
router.get('/:id', function(req, res, next) {
    res.contentType('application/json;charset=utf-8');
    res.send(JSON.stringify(user_1));
    //req.param('id')
    res.end();
});

//删除
router.delete('/:id', function(req, res, next) {
    res.contentType('application/json;charset=utf-8');
    res.send(JSON.stringify(user_oper));
    res.end();
});

//修改
router.put('/:id', function(req, res, next) {
    res.contentType('application/json;charset=utf-8');
    res.send(JSON.stringify(user_oper));
    res.end();
});

//保存
router.post('/', function(req, res, next) {
    //console.log(req.body);
    res.contentType('application/json;charset=utf-8');
    res.send(JSON.stringify(user_oper));
    res.end();
});

module.exports = router;
