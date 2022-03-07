const request=require('request');
request({
    url:"https://api.staging.integrator.io/v1/connections",
headers:{
    Authorization:"Bearer {token}"
},
method:"POST",
json:true,
body:{
type: "ftp",
name: "ftp connection",
sandbox: false,
ftp: {
    type: "sftp",
    hostURI: "celigo.files.com",
    username: "pooja.reddy.kadari@celigo.com",
    password: "******",
    port: 22
   
}
}}, function(error,response,body){

        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode); 
        console.log('body:', body); 
}
)
