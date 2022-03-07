const request=require('request');
request({url:"https://api.staging.integrator.io/v1/flows",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer {token}"
},
body:{
    _id: "62252281e1bce1128d191779",
    name: "New flow",
    disabled: false,
    _integrationId: "62252281e1bce1128d191779",
    skipRetries: false,
    pageProcessors: [
        {
            responseMapping: {
                fields: [],
                lists: []
            },
            type: "import",
            _importId: "622528ba9c00c80fee423109"
        }
    ],
    pageGenerators: [
        {
            _exportId: "622526a7e1bce1128d1917e1"
        }
    ]
}
},function(error,response,body){
    console.log(body);}
)
