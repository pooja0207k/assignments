const request=require('request');
request({url:"https://api.staging.integrator.io/v1/imports",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer bf626c00d1b842598fd5cb611de13a9a"
},
body:{
    _id: "62252a409c00c80fee42313c",
        name: "Rest Import via program",
        parsers: [],
        _connectionId: "622512949c00c80fee422e6b",
        oneToMany: false,
        lookups: [],
        mapping: {
            fields: [
                {
                    extract: "id",
                    generate: "id"
                },
                {
                    extract: "Date",
                    generate: "date"
                }
            ]
        },
        http: {
            relativeURI: [
                "/test/orders"
            ],
            method: [
                "POST"
            ],
            body: [],
            batchSize: 1,
            requestMediaType: "json",
            successMediaType: "json",
            errorMediaType: "json",
            sendPostMappedData: true,
            formType: "rest"
        }
    }}, function(error,response,body){
        console.log(body);
    })