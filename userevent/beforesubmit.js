function beforeSubmit(type){
    if(type=="create"){
      var m=nlapiGetNewRecord();
      var orderid=m.getFieldValue('tranid');
      var entityid=m.getFieldValue('entity');
      var filters = new Array();
      filters[0]= new nlobjSearchFilter('custrecord1396', null,'is','orderid');
      filters[1]= new nlobjSearchFilter('custrecord1397', null,'is',entityid);
      var columns = new Array();
      columns[0] = new nlobjSearchColumn('custrecord1396'); 
      columns[1] = new nlobjSearchColumn('custrecord1397');
      var searchResults = nlapiSearchRecord('customrecordpooja', null, filters, columns);       
    
      if(searchResults==null){
          var p=nlapiCreateRecord('customrecordpooja')
           p.setFieldValue('name','salesorder');
          p.setFieldValue('custrecord1399','salesorder');
          p.setFieldValue('custrecord1396',orderid);
          p.setFieldValue('custrecord1397',entityid);
        var id=  nlapiSubmitRecord(p,true);
  
      }
  }}