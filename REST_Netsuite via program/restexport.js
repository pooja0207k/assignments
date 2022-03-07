const request=require('request');
request({url:"https://api.staging.integrator.io/v1/exports",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer {token}"
},
body:{
    _id: "62252d84c9d71b19a63afde7",
        name: "Rest export",
       _connectionId:"622512949c00c80fee422e6b",
        oneToMany: false,
        sandbox: false,
        http: {
            relativeURI: "/test/orders",
            method: "GET",
            successMediaType: "json",
            errorMediaType: "json",
            formType: "rest"
        }}},function(error,response,body){
            console.log('body',body)
        })
