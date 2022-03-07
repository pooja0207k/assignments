const request=require('request');
request({url:"https://api.staging.integrator.io/v1/flows",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer bf626c00d1b842598fd5cb611de13a9a"
},
body:{
    _id: "622542fec9d71b19a63b00e0",
    name: "New flow",
    disabled: false,
    _integrationId: "622542fec9d71b19a63b00e0",
    skipRetries: false,
    pageProcessors: [
        {
            responseMapping: {
                fields: [],
                lists: []
            },
            type: "import",
            _importId: "622546dee1bce1128d191c86"
        }
    ],
    "pageGenerators": [
    {
        "_exportId": "622544be9c00c80fee4234c1"
    },
    {
        "_exportId": "6225454be1bce1128d191be7"
      
    },
    {
        "_exportId": "622545f9e1bce1128d191c14"
       
    }]
}
},function(error,response,body){
    console.log(body);}
)