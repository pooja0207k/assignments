function suite(){
    var m=nlapiGetFieldValue('phone');
    nlapiSubmitField('customer',48021,'phone',m);
   nlapiSubmitField('customer',48021,'custentityphone',m);
 }