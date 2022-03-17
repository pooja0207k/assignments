function inventoryadjustment5(){
    var m= new $R({
        nlobjRecordType:'inventoryadjustment',
        nlobjFieldIds:{
           subsidiary:'1',
           account:2},
           nlobjSublistIds:{
               inventory:[{
                   item:1398,
                   location:2,
                   adjustqtyby:10}]
            }
    });
    var id=m.save();
}