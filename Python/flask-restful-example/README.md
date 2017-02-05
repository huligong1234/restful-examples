## 一、Flask快速入门
### 1. 安装Python

### 2. 安装Flask
```shell
$ pip install Flask
```

### 3. 编写最简单的程序
```python
#hello.py
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

if __name__ == '__main__':
    app.run()
```
### 4.运行
```shell
$ python hello.py
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

## 二、参考资料
* [Flask快速入门中文版](http://docs.jinkan.org/docs/flask/index.html)
* [Flask-SQLAlchemy中文版](http://www.pythondoc.com/flask-sqlalchemy/index.html)
* [Flask-RESTful](http://www.pythondoc.com/Flask-RESTful/quickstart.html)
* [使用 Flask 设计 RESTful APIs](http://www.pythondoc.com/flask-restful/index.html)
