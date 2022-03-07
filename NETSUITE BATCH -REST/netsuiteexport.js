const request=require('request');
request({url:"https://api.staging.integrator.io/v1/exports",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer bf626c00d1b842598fd5cb611de13a9a"
},
body:{
    _id: "62252a409c00c80fee42313c",
    name: "Netsuite export",
    _connectionId: "62250d3ac9d71b19a63af929",
    apiIdentifier: "e6daaa7c1a",
    pageSize: 3,
    oneToMany: false,
    sandbox: false,
    netsuite: {
        type: "restlet",
        restlet: {
            recordType: "contact",
            searchId: "788305",
            useSS2Restlets: false,
            batchSize: 50
        }
    }
}}, function(error,response,body){
    console.log(body);
})