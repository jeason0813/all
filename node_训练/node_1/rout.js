const s=require('./modle/ajax_fx');
const url=require('url');
const querystring=require('querystring');
module.exports={
  callback:function (data,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
    res.write(data);
    res.end('结束了');
  },
  login:function(req,res){
    /*get请求
    var rdata=url.parse(req.url,true).query;*/

    var post = '';
    req.on('data',function(chunk){
      post+=chunk;
    });
    req.on('end',function(){
      post=querystring.parse(post);
      console.log(post);
    });
    function call(data,res){
      res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
      datastr=String(data);
      const arr=['name','pwd'];
      var re=null;
      for(var i=0;i<arr.length;i++){
        re=new RegExp('{'+arr[i]+'}','g');
        if(post[arr[i]]){
          datastr=datastr.replace(re,post[arr[i]]);//datgstr是指当前所有网页代码；
          console.log(datastr)
        }else{
          datastr=datastr.replace(re,'未同步');//datgstr是指当前所有网页代码；
          console.log(datastr)
        }
      }
      res.write(datastr);
      res.end('结束了');
    }
    s.readfile('./view/login.html',call,res);
  },
  z:function(req,res){
    s.readfile('./view/down.html',this.callback,res);
  },
  nourl:function (req,res) {
    s.readfile('./view/nourl.html',this.callback,res);
  },
  writefile:function(req,res){
    s.writefile('./view/write.txt','这是我写入的文件，谢谢！！',this.callback,res);
  },
  all:function (req,res) {
    s.readfile('./view/all.html',this.callback,res);
  },
  readImg:function (req,res) {
    res.writeHead(200,{'Content-Type':'image/jpeg'});
    s.readImg('./view/img/resd.jpg',res);
  },
  cssreset:function(req,res){
    s.readfile('./view/css/cssreset.css',this.callback,res);
  }
}
