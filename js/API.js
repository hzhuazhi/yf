let API = "http://47.116.98.162:8086";
// let API = "http://192.168.1.44:8086";
let Json = ',"agtVer": 1,"clientVer": 1,"clientType": 3';



let publicMap  = new Map();
publicMap.set("agtVer",1);
publicMap.set("clientVer",1);
publicMap.set("clientType",1);

let storage = window.localStorage;


function returnFloat(value){
    var value=Math.round(parseFloat(value)*100)/100;
    var xsd=value.toString().split(".");
    if(xsd.length==1){
        value=value.toString()+".00";
        return value;
    }
    if(xsd.length>1){
        if(xsd[1].length<2){
            value=value.toString()+"0";
        }
        return value;
    }
}