/**
 * @NapiVersion 2.0
 * @NScriptType Restlet
 */
 define(['N/search'], function(search){


function get1(){
    var search1=search.create({
        type: search.type.TRANSACTION,
        filters:[['email', 'is','deepthi@company.com']],
        columns : ['tranid', 'total']
    });
    var m= search1.run();
    m.each(function(result){
        var tranid = result.id;
        var amount=result.getValue('amount')
    });}
    return{
        get:get1
    }
})