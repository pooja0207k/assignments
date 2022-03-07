const request=require('request');
request({url:"https://api.staging.integrator.io/v1/exports",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer bf626c00d1b842598fd5cb611de13a9a"
},
body:{
    _id: "62250a22c9d71b19a63af855",
        name: "Rest export",
       _connectionId:"62185d4697769c75085a7b10",
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