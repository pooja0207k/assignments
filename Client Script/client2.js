function fieldchanged(){
  var k=nlapiGetRecordId();
    var newphone=nlapiGetFieldValue('phone');
  nlapiSubmitField('customer',k,'phone',newphone);
}