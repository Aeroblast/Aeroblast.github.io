//For nodejs , not web page
const fs = require("fs");
var aes=require("./aes");
var args = process.argv.splice(2);
var stamp;
var filename;
SetTimeString();
let data = fs.readFileSync("temp.atxt");
data+="\n[time]"+stamp+"[/time]";
if(args.length>1&&args[0]=='en'){
    let pw=args[1];
    let encrypted=aes.encrypt(pw+"\n"+data,pw).toString();
    //console.log(encrypted);
    //let decrypted=aes.decrypt(encrypted,pw).toString(aes.enc);
    //console.log(decrypted);
    fs.writeFileSync("Text/"+filename+".atxt","ENCRYPTED\n"+encrypted);
    
}else
{
    fs.writeFileSync("Text/"+filename+".atxt",data);
}


fs.appendFileSync("index.txt","\n"+filename+",");

function SetTimeString()
{
let d = new Date();
let y=""+d.getFullYear();
let dd=d.getDate();if(dd<10)dd="0"+dd;
let mm=d.getMonth();if(mm<10)mm="0"+mm;
let hh=d.getHours();if(hh<10)hh="0"+hh;
let mi=d.getMinutes();if(mi<10)mi="0"+mi;
let ss=d.getSeconds();if(ss<10)ss="0"+ss;
stamp=y+mm+dd+" "+hh+":"+mi+":"+ss;
filename=y+mm+dd+"_"+hh+mi;
}