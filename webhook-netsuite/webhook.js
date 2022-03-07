const request=require('request');
request({url:"https://api.staging.integrator.io/v1/exports",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer {token}"
},
body:{
    _id: "6225302a9c00c80fee4231f7",
    name: "Webhook listener via program",
    type: "webhook",
    sandbox: false,
    webhook: {
        provider: "custom",
        verify: "secret_url",
        token: "7e953241d72a4effa1305b922567b1c2",
        algorithm: "sha1",
        encoding: "base64",
        key: "******",
        username: "pooja.reddy.kadari@celigo.com",
        password: "******"
    }}
},function(error,response,body){
    console.log(body);
})
