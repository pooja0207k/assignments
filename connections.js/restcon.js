const request=require('request');
request({
    url:"https://api.staging.integrator.io/v1/connections",
    headers:{
        "Authorization":"Bearer {token}"
    },
    method:"POST",
    json:true,
    body:{
        name: "Rest Connection via program",
        sandbox: false,
        type: "http",
        http: {
            formType: "rest",
            mediaType: "json",
            baseURI: "https://3jno0syp47.execute-api.us-west-2.amazonaws.com",
            ping: {
                relativeURI: "/test/orders",
                method: "GET"
            },
            rateLimit: {
                failValues: []
            },
            unencrypted: {
                field: "value"
            },
            encrypted: "******",
            auth: {
                type: "custom"
            }
        }
    }
    },
    function(error,response,body){
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode); 
        console.log('body:', body);
    }
)
