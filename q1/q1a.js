const parser=require("xml2js");
const xmlfile= `<note>
    <name>Pooja</name>
    <age>20</age>
    <id>2210</id>
</note>`;
parser.parseString(xmlfile,function(err,result){
    console.log("JSON is",result);
});