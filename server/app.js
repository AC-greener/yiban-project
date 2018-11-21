const path = require('path')
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

//解析post请求体中的内容
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



//设置跨域请求
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});

//设置视图引擎
// app.set('views', path.join(__dirname, 'public'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// app.use(express.static(path.join(__dirname, 'public')));

app.post('/postform', function(req, res){
  console.log(req.body)
  res.end('ok啦')
});


app.listen(3000, function() {
  console.log('app listening on port 3000!');
})
// supervisor app.js
