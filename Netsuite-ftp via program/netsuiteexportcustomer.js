const request=require('request');
request({url:"https://api.staging.integrator.io/v1/exports",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer {token}"
},
body:{
    _id: "622542fec9d71b19a63b00e0",
    name: "Netsuite export customer",
    _connectionId: "62250d3ac9d71b19a63af929",
    asynchronous: true,
    oneToMany: false,
    sandbox: false,
    netsuite: {
        type: "restlet",
        skipGrouping: true,
        statsOnly: false,
        restlet: {
            recordType: "item",
            searchId: "788334",
            useSS2Restlets: false
        }
}}}, function(error,response,body){
    console.log(body);
})
