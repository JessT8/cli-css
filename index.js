var convertType = process.argv[2];
var hexToRgb = (hex)=> {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ?
    "rgb( " + parseInt(result[1], 16)
    +"," + parseInt(result[2], 16) +","+ parseInt(result[3], 16) + " )": null;
}
var rgbToHex =(r, g, b) =>{
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

if(convertType === "hex")
{
    var hexValue = process.argv[3];
    console.log(hexToRgb(hexValue));
}else if(convertType === "rgb"){
   var r= parseInt(process.argv[3]);
   var g = parseInt(process.argv[4]);
   var b = parseInt(process.argv[5]);
    console.log(rgbToHex(r,g,b));
}