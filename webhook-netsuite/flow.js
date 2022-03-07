const request=require('request');
request({url:"https://api.staging.integrator.io/v1/flows",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer {token}"
},
body:{
    _id: "6225302a9c00c80fee4231f7",
    name: "New flow",
    disabled: false,
    _integrationId: "6225302a9c00c80fee4231f7",
    skipRetries: false,
    pageProcessors: [
        {
            responseMapping: {
                fields: [],
                lists: []
            },
            type: "import",
            _importId: "6225351ee1bce1128d1919b9"
        }
    ],
    pageGenerators: [
        {
            _exportId: "622540959c00c80fee423457"
        }
    ]
}
},function(error,response,body){
    console.log(body);}
)
