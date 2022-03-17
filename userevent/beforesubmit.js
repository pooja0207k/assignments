function beforeSubmit(type){
    if(type=='create'){
    var newRecord = nlapiGetNewRecord();
    var m=nlapiLoadRecord('custom_sales',customrecord1695);
    var filters = new Array();
    filters[0] = new nlobjSearchFilter('companyname', null, 'startswith', 'Bag');
    var columns = new Array();
    columns[0] = new nlobjSearchColumn('entity'); 
    columns[1] = new nlobjSearchColumn('phone'); 
    columns[2] = new nlobjSearchColumn('custbody14');
    var searchResults = nlapiSearchRecord('transaction', null, filters, columns);       
    if(searchResults==null){
        m.setFieldValue('orderid',newRecord.getFieldValue(tranid));
        m.setFieldValue('internalid',newRecord.getFieldValue(internalid));
        m.setFieldValue('customername',newRecord.getFieldValue(entity));
        m.setFieldValue('email',newRecord.getFieldValue(custbody14));
        nlapiSubmitRecord(m,true);

    }
}
}
]
]
