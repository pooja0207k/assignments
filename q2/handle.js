var handlebars=require('handlebars');
var fs=require('fs');
var m=fs.readFileSync('inp.json');
var n=JSON.parse(m);
var template=handlebars.compile(fs.readFileSync("q2.hbs").toString());
var xmldata=template({input:n});
console.log(xmldata);