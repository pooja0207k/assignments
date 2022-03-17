function salesorder5(){
    var m=new $R({
        nlobjRecordType:'salesorder',
        nlobjFieldIds:{
        entity:48036,
        custbody_order_type:1,
        custbody_end_user:48036
    },
    nlobjSublistIds:{
        item:[
            {
                item: 1400,
                quantity:10
            }
        ]
    }
    });
    var id=m.save();
}