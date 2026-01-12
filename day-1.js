const os=require("os")
console.log(os.cpus());
console.log(os.arch());
const f=require("fs")
let d=f.readFileSync("./day-1.txt",{encoding:"utf-8"})
console.log(d);
f.writeFileSync("./d2.txt","node is a powerful lang")
console.log("Written by me");
