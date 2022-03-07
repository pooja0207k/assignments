const request=require('request');
request({
    url:"https://api.staging.integrator.io/v1/integrations",
    method:"POST",
    headers:{
        "Authorization":"Bearer {token}"
    },
    body:{
        name:"REST TO NETSUITE VIA PROGRAM"
        },
    json:true},
        function (error, response, body) {
            console.log('error:', error); 
            console.log('statusCode:', response && response.statusCode); 
            console.log('body:', body); 
})
