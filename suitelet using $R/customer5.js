function customer5(){
    $$.logExecution('DEBUG','customer5','So it begins');
    var m= new $R({
        nlobjRecordType:"customer",
        nlobjFieldIds: {
            isperson: true,
            firstname: "Deepthi",
            lastname: "Sharma",
            subsidiary:1,
            email:'deepthi@company.com',
            phone:'6432987257'
        }
    });
    $$.logExecution('DEBUG','customer5',JSON.stringify(m));
    var recid=m.save();
}