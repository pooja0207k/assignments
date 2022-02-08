class MetadataParser{
    #version;
    #channel;
    #keyField;
    constructor(){
        this.#version = "";
        this.#channel = "";
        this.#keyField = "";
    };
    setVersion(version){
        this.#version = version;
        
    };
    getVersion(){
        return this.#version;
    };
    
    setChannel(channel){
        this.#channel = channel;
        return this;
    };
    getChannel(){
        return this.#channel;
    };
    
    setkeyField(keyField){
        this.#keyField = keyField;
        return this;
    };
    getkeyField() {
        return this.#keyField;
    };
    getKeyFields(jsonArray) {
var keyFieldsList = []
for (let i=0;i<jsonArray.length;i++) {
            keyFieldsList.push(jsonArray[i].channel);
        }
        return keyFieldsList;
    };
}
let me=new MetadataParser();
version='5.0';
channel='b';
jsonArray=[{channel: 'A'}, {channel: 'B'}, {channel :'C'}];
console.log(me.getVersion());
console.log(me.getChannel());
console.log(me.getKeyFields(jsonArray));