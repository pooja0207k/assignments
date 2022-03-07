const request=require('request');
request({url:"https://api.staging.integrator.io/v1/imports",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer bf626c00d1b842598fd5cb611de13a9a"
},
body:{
    
        _id: "62250a22c9d71b19a63af855",
            name: "SLACK IMPORT",
            parsers: [],
            _connectionId: "62166bd60f36bf7cbd9d4759",
            oneToMany: false,
            assistant: "slack",
            sandbox: false,
            assistantMetadata: {
                resource: "chat",
                version: "latest",
                operation: "chat_postmessage"
            },
            lookups: [],
            mapping: {
                fields: [
                    {
                        generate: "channel",
                        hardCodedValue: "rough"
                    },
                    {
                        extract: "customername",
                        generate: "text"
                    },
                    {
                        generate: "as_user",
                        hardCodedValue: "pooja.reddy.kadari"
                    }
                ]
            },
            http: {
                relativeURI: [
                    "chat.postMessage"
                ],
                method: [
                    "POST"
                ],
                body: [
                    null
                ],
                batchSize: 1,
                requestMediaType: "urlencoded",
                successMediaType: "json",
                errorMediaType: "json",
                requestType: [],
                strictHandlebarEvaluation: true,
                sendPostMappedData: true,
                formType: "assistant",
                response: {
                    resourceIdPath: [
                        null
                    ],
                    successPath: [
                        "ok"
                    ],
                    successValues: [
                        [
                            "true"
                        ]
                    ],
                    failPath: [],
                    failValues: [],
                    resourcePath: []
                }
            },
            rest: {
                relativeURI: [
                    "chat.postMessage"
                ],
                method: [
                    "POST"
                ],
                body: [
                    null
                ],
                responseIdPath: [
                    null
                ],
                successPath: [
                    "ok"
                ],
                successValues: [
                    "true"
                ],
                requestType: []
            }
        }},
        function(error,response,body){
            console.log(body);
        }
    )