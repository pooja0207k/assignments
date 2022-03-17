function inventory5(){
    var m=new $R({
        nlobjRecordType:"inventoryitem",
        nlobjFieldIds:{
            itemid:'Laptops',
            displayname:'Laptops',
            subsidiary:1,
            includechildren:true,
            weight:"8",
            weightunit:1,
            shippingcost:"5",
        },
        nlobjSublistIds:{
            itemvendor:[{
                vendor:1552
            }]
        }

    });
    var id=m.save();
}