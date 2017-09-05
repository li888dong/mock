const Mock = require('mockjs');
let data = Mock.mock("/greating/hello","get",{
  "array|3-10": [
    {
      "id":"@id",
      "name":"@cname",//@name英文名 @cname中文名  @cfirst姓@clast名
      "line":"@cword(3,10)",//几个汉字
      "salary|00001-99999": 50,
      "brun":'@date("yyyy-MM-dd")',//随机格式时间
      "color":'@color',
      "favarator":"@paragraph",//一段文章
      "url":"@url",
      "email":"@email",
      "address":"@region@province@city@county",
      "random":'@pick(["a", "e", "i", "哈哈", "你好"])',//取随机内容
      "increment":"@increment(100)"//递增100
    }
  ]
})

console.log(JSON.stringify(data,null,4))