function rma6(){
    var m=new $R({
        nlobjRecordType:'returnauthorization',
        nlobjTransformType:'cashsale',
        nlobjTransformId:62908,
      nlobjSublistIds:{
            item:[{
                item:1400,
                quantity:5
            }]
        }
    });
    var id=m.save();
}