const request=require('request');
request({url:"https://api.staging.integrator.io/v1/exports",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer bf626c00d1b842598fd5cb611de13a9a"
},
body:{
        _id: "622542fec9d71b19a63b00e0",
        name: "Netsuite export salesorder",
        _connectionId: "62178fb30f36bf7cbd9d990f",
        pageSize: 3,
        oneToMany: false,
        sandbox: false,
        netsuite: {
            type: "restlet",
            skipGrouping: true,
            statsOnly: false,
            restlet: {
                recordType: "salesorder",
                searchId: "788333",
                useSS2Restlets: false,
                batchSize: 50
            }
        }
    }},function(error,response,body){
        console.log(body);
    })