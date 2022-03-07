const request=require('request');
request({url:"https://api.staging.integrator.io/v1/flows",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer bf626c00d1b842598fd5cb611de13a9a"
},
body:{
    _id: "62250a22c9d71b19a63af855",
    name: "New flow",
    disabled: false,
    _integrationId: "62250a22c9d71b19a63af855",
    skipRetries: false,
    pageProcessors: [
        {
            responseMapping: {
                fields: [],
                lists: []
            },
            type: "import",
            _importId: "62251e1d9c00c80fee422fd6"
        }
    ],
    pageGenerators: [
        {
            _exportId: "622519ee9c00c80fee422f6e"
        }
    ]
}
},function(error,response,body){
    console.log(body);}
)