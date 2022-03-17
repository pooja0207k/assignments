function OnAfterSubmit(type) {
    if(type=='create'){
    
        var fromId = 47891; 
        var toEmail = nlapiGetFieldValue('entity');
        var sbj = 'subject';
        var msg = 'ITEM ON THE ORDER ARE PROVIDED';
    
    
        var fileObj = nlapiPrintRecord('TRANSACTION',nlapiGetRecordId(), 'PDF',null);
    
        nlapiSendEmail(fromId, toEmail, sbj, msg, null, null, null, fileObj);
    
    }
    }