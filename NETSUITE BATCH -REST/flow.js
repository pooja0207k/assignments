const request=require('request');
request({url:"https://api.staging.integrator.io/v1/flows",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer bf626c00d1b842598fd5cb611de13a9a"
},
body:{
    _id: "62252a409c00c80fee42313c",
    name: "New flow",
    disabled: false,
    _integrationId: "62252a409c00c80fee42313c",
    skipRetries: false,
    pageProcessors: [
        {
            responseMapping: {
                fields: [],
                lists: []
            },
            type: "import",
            _importId: "62252c7d9c00c80fee42317e"
        }
    ],
    pageGenerators: [
        {
            _exportId: "62252c20e1bce1128d191874"
        }
    ]
}
},function(error,response,body){
    console.log(body);}
)