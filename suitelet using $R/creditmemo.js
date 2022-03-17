function credit5(){
    var m=new $R({
        nlobjRecordType:'creditmemo',
        nlobjFieldIds:{
            entity:48036,
            location:2
        },
        nlobjSublistIds:{
            item:[{
                item:1400,
                quantity:10
            }]
        }});

var id=m.save();
    }