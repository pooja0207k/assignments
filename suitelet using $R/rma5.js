function rma5(){
    var m = new $R({
        nlobjRecordType:'returnauthorization',
        nlobjTransformType:'salesorder',
        nlobjTransformId:62897,
        nlobjSublistIds:{
            item:[{
                item:1400,
                quantity:5
            }]
        }
    });
    var id=m.save();
}