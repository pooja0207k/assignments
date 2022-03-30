function suite(){
  var f=nlapiGetRecordId();
    var m=nlapiGetFieldValue('phone');
    nlapiSubmitField('customer',f,'phone',m);
   nlapiSubmitField('customer',f,'custentityphone',m);
 }