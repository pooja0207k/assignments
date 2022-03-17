function itemfulfillment6(){
    var m=new $R({
        nlobjRecordType:'itemfulfillment',
        nlobjTransformType:'salesorder',
        nlobjTransformId:62897,
        nlobjSublistIds:{
            item:{
                lines:[{
                item:1400,
                fullfill:true,
                quantity:5,
                location:2
            }]
        }}
    });
    var id=m.save();
    
    }