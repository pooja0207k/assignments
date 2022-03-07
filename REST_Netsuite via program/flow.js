const request=require('request');
request({url:"https://api.staging.integrator.io/v1/flows",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer {token}"
},
body:{
    _id: "62252d84c9d71b19a63afde7",
    name: "New flow",
    disabled: false,
    _integrationId: "62252d84c9d71b19a63afde7",
    skipRetries: false,
    pageProcessors: [
        {
            responseMapping: {
                fields: [],
                lists: []
            },
            type: "import",
            _importId: "62252f05c9d71b19a63afe19"
        }
    ],
    pageGenerators: [
        {
            _exportId: "62252e11c9d71b19a63afdfb"
        }
    ]
}
},function(error,response,body){
    console.log(body);}
)
