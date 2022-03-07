const request=require('request');
request({url:"https://api.staging.integrator.io/v1/imports",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer bf626c00d1b842598fd5cb611de13a9a"
},
body:{
        _id: "62252d84c9d71b19a63afde7",
        "name": "netsuite",
        "parsers": [],
        "_connectionId": "62250d3ac9d71b19a63af929",
        "distributed": true,
        "ignoreExisting": false,
        "ignoreMissing": false,
        "oneToMany": false,
        "sandbox": false,
        "lookups": [],
        "netsuite_da": {
            "useSS2Restlets": false,
            "operation": "addupdate",
            "recordType": "inventoryadjustment",
            "internalIdLookup": {
                "expression": "[\"subsidiary\",\"is\",\"Honeycomb Mfg.\"]"
            },
            "lookups": [],
            "mapping": {
                "fields": [],
                "lists": []
            }
        }
    }}, function(error,response,body){
        console.log(body);
    })