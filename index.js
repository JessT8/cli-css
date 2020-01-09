var convertType = process.argv[2];
var hexValue = process.argv[3];
var hex = (hexValue)=> {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexValue);
  return result ?
    "rgb( " + parseInt(result[1], 16)
    +"," + parseInt(result[2], 16) +","+ parseInt(result[3], 16) + " )": null;
}

if(convertType === "hex")
{
    console.log(hex(hexValue));
}