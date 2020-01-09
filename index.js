var convertHex =require("./hexToRgb");
var convertRgb = require("./rgbToHex");
var convertType = process.argv[2];

if(convertType === "hex")
{
    var hexValue = process.argv[3];
    console.log(convertHex.hexToRgb(hexValue));
}else if(convertType === "rgb"){
   var r = parseInt(process.argv[3]);
   var g = parseInt(process.argv[4]);
   var b = parseInt(process.argv[5]);
    console.log(convertRgb.rgbToHex(r,g,b));
}