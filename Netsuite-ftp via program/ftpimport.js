const request=require('request');
request({url:"https://api.staging.integrator.io/v1/imports",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer {token}"
},
body:{
    _id: "622542fec9d71b19a63b00e0",
    name: "ftp transfer",
    parsers: [],
    _connectionId: "6225161ec9d71b19a63afaf6",
    oneToMany: false,
    sandbox: false,
    file: {
        fileName: "file-{{timestamp}}.csv",
        type: "csv",
        csv: {
            rowDelimiter: "\n",
            columnDelimiter: ",",
            includeHeader: true,
            wrapWithQuotes: false,
            replaceTabWithSpace: false,
            replaceNewlineWithSpace: true,
            truncateLastRowDelimiter: false
        }
    },
    ftp: {
        directoryPath: "/PoojaReddyKadari/netsuite ftp",
        fileName: "file-{{timestamp}}.csv"
    }
}},function(error,response,body){
    console.log(body);
})
