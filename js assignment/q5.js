class SortArray{
  SortArray(originalArray){
    this.originalArray1=originalArray;
    let cb=function(a,b){
      return a-b;
    }
    originalArray.sort(cb);
  }
  get f(){
    return this.originalArray1;
  }
}
class SortObjectArray extends SortArray{
  SortObjectArray(originalArray, jsonobj){
    super.SortArray(originalArray);
    this.jsonobj=jsonobj;
    let cb=function(a,b){
      return a.name>b.name?1:-1;
    }
    jsonobj.sort(cb);}
    get f1(){
      return this.jsonobj;
    
  }
}
originalArray=[5,3,2,55,8];
jsonobj=[{name:"pooja",id:320},{name:"harshitha",id:234},{name:"pranavi",id:174}];
const m=new SortObjectArray();
m.SortObjectArray(originalArray,jsonobj);
console.log(m.f);
console.log(m.f1)