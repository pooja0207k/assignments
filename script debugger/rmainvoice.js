var obj=nlapiTransformRecord('invoice',62746,'returnauthorization');
obj.selectLineItem('item',1);
obj.setCurrentLineItemValue('item','quantity','5');
var subrecord= obj.editCurrentLineItemSubrecord('item', 'inventorydetail'); 
subrecord.selectLineItem('inventoryassignment', 1); 
subrecord.setCurrentLineItemValue('inventoryassignment', 'quantity', 5);
subrecord.commitLineItem('inventoryassignment');
subrecord.commit();
obj.commitLineItem('item');
var returnid=nlapiSubmitRecord(obj,true);