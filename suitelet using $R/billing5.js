function bill5(){
    var m=new $R({
        nlobjRecordType:'cashsale',
        nlobjTranformType:'salesorder',
        nlobjTransformId:62897,
        nlobjFieldIds:{
            custbody_end_user:48036,
          location:2
        },
        nlobjSublistIds:{
            item:{
                lines:[{
                  item:1400,
                    quantity:'10',
                    location:2}]
        }
    }});
    var id=m.save();
}