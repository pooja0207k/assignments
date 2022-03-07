const request=require('request');
request({
    url:"https://api.staging.integrator.io/v1/exports/622540959c00c80fee423457/7e953241d72a4effa1305b922567b1c2/data",
    method:"POST",
    headers:{
        "Authorization": "Bearer {token}" 
    },json:true,
    body:{
            name:"Pooja",
            age:"20"
        }
    }, function(error,response,body){
    console.log(body);
})
