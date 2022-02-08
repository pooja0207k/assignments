const xml2js=require('xml2js')
const fs=require('fs');
const parser  = new xml2js.Parser();
fs.readFile('./q1.xml',(err,data)=>{
    parser.parseString(data,(err,result)=>{
        if(err){
            console.log("error");
        }
        else{
        console.log(result);
    }
    });
});