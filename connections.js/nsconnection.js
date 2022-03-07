const request=require('request');
request({
    url:"https://api.staging.integrator.io/v1/connections",
    method:"POST",
    headers:{
        "Authorization":"Bearer {token}"
    },
    json:true,
    body:{
          
        type: "netsuite",
        name: "Netsuite Connection",
        offline: false,
        sandbox: false,
        
        netsuite: {
            account: "TSTDRV1323005",
            roleId: "3",
            requestLevelCredentials: true,
            dataCenterURLs: {
                restDomain: "https://tstdrv1323005.restlets.api.netsuite.com",
                webservicesDomain: "https://tstdrv1323005.suitetalk.api.netsuite.com",
                systemDomain: "https://tstdrv1323005.app.netsuite.com"
            },
            tokenId: "******",
            tokenSecret: "******",
            _iClientId: "621874fb97769c75085a7f72",
            authType: "token-auto"
        }  
          
    }
    },
    function (error, response, body) {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode); 
        console.log('body:', body); 
}
)
