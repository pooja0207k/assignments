const request=require('request');
request({url:"https://api.staging.integrator.io/v1/exports",
method:"POST",
json:true,
headers:{
    "Authorization":"Bearer bf626c00d1b842598fd5cb611de13a9a"
},
body:{
    _id: "62252281e1bce1128d191779",
        name: "Netsuite Listener via program",
        _connectionId: "62250d3ac9d71b19a63af929",
        asynchronous: true,
        type: "distributed",
        oneToMany: false,
        distributed: {
            bearerToken: "******"
        },
        netsuite: {
            type: "distributed",
            skipGrouping: false,
            statsOnly: false,
            distributed: {
                recordType: "customer",
                executionContext: [
                    "userinterface",
                    "webstore"
                ],
                disabled: false,
                executionType: [
                    "create",
                    "edit",
                    "xedit"
                ],
                sublists: [
                    "submachine",
                    "itempricing",
                    "contact"
                ]
            }
        }}}, function(error, response, body){
            console.log(body);
        })