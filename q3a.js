const request = require('request');
const fs=require('fs');
request('http://www.google.com', (error, response, body)=>{

    fs.writeFile('3.html',body ,err=>{
  if(err) return err; 
});
});