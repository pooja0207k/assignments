function m(){
    var p=new $R({
        nlobjRecordType:"customer",
      enableLog: true,
       
      nlobjFieldIds:{
        internalid:48036
      },
        nlobjSublistIds:{
            addressbook:[{
                city:'City1',
                state:'CA',
                country:'US',
                defaultbilling:true,
                defaultshipping:false

            },
                         {
                           city:'City2',
                state:'OH',
                country:'US',
                defaultbilling:true,
                defaultshipping:false

            }
            ]}
    });
    var id=p.save();
}