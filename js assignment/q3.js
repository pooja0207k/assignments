function groupObjectsBy(arr,properties){
    var newA=arr.reduce(function(newv,value){
        if(!newv[value[properties]]){
            newv[value[properties]]=[];
        }
        newv[value[properties]].push(value);
        return newv;
    },{});
    return newA;
}
const groupObjectsBy1=[
    {
      "channel": "A",
      "name": "shoe"
    },
    {
      "channel": "A",
      "name": "electronics"
    },
    {
      "channel": "B",
      "name": "apparel"
    },
    {
      "channel": "C",
      "name": "electronics"
    }
  ];
  const grp=groupObjectsBy(groupObjectsBy1,"channel");
  console.log(grp);