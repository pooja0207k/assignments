const request=require('request');
request({url:"https://api.staging.integrator.io/v1/exports",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer {token}"
},
body:{
        _id: "622542fec9d71b19a63b00e0",
        name: "Netsuite export item",
        _connectionId: "62178fb30f36bf7cbd9d990f",
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
        }
    }}, function(error,response,body){
        console.log(body);
    }
    )
