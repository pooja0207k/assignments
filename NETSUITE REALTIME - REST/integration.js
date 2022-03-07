const request=require('request');
request({
    url:"https://api.staging.integrator.io/v1/integrations",
    method:"POST",
    headers:{
        "Authorization":"Bearer bf626c00d1b842598fd5cb611de13a9a"
    },
    body:{
        name:"NETSUITE REALTIME TO REST VIA PROGRAM"
        },
    json:true},
        function (error, response, body) {
            console.log('error:', error); 
            console.log('statusCode:', response && response.statusCode); 
            console.log('body:', body); 
})