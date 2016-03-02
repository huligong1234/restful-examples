# 基于Express框架的Restful示例项目

## 一、通过命令行创建一个Express项目
安装express应用生成工具
> npm install express-generator -g

查看命令帮助
> express -h 

通过express命令创建一个express项目
> express express-restful-example

通过express命令创建一个express项目,使用handlebars模板引擎
> express express-restful-example -e --hbs

安装项目依赖
 > cd express-restful-example && npm install

运行项目
 > SET DEBUG=express-restful-example:* & npm start
	 