const request=require('request');
request({url:"https://api.staging.integrator.io/v1/imports",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer {token}"
},
body:{
    _id: "6225302a9c00c80fee4231f7",
    name: "Netsuite import",
    _connectionId: "62178fb30f36bf7cbd9d990f",
     distributed: true,
    ignoreExisting: false,
    ignoreMissing: false,
    oneToMany: false,
    sandbox: false,
    lookups: [],
    netsuite_da: {
        useSS2Restlets: false,
        operation: "addupdate",
        recordType: "inventoryadjustment",
        internalIdLookup: {
            expression: "[\"subsidiary\",\"is\",\"\\\"Honeycomb Holdings Inc.\\\"\"]"
        },
        lookups: [],
        mapping: {
            fields: [
                {
                    extract: "date",
                    generate: "datecreated",
                    internalId: false
                },
                {
                    extract: "name",
                    generate: "customer",
                    internalId: false
                }
            ],
            lists: [
                {
                    generate: "inventory",
                    fields: [
                        {
                            extract: "itemname",
                            generate: "item",
                            internalId: false
                        }
                    ]
                }
            ]
        }
    }
   }},function(error,response,body){
    console.log(body);
})
