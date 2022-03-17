function noninventory5(){
    var m=new $R({
        nlobjRecordType:"noninventoryitem",
        nlobjFieldIds:{
            itemid:'Batteries',
            displayname:'Batteries',
            subsidiary:1,
            includechildren:true,
            weight:"8",
            weightunit:4,
            custitem_item_category:3,
            custitem_quantity_type:1,
            custitem_product_line:2,
            taxschedule:2
        },
        nlobjSublistIds:{
            itemvendor:[{
                vendor:1552
            }]
        }

    });
    var id=m.save();
}