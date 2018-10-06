/**
 * @module react-color-pallete
 */
'use strict'
let ColorNotFoundError=require('./errors/ColorNotFoundError')
/**
 * @constructor
 */
function ColorPallete() {
    this.colorMap=new Map();
}

/**
 * @memberOf ColorPallete
 * 
 * @param colorName string name
 * @param colorValue string #XXXXXX or #XXX
 */
ColorPallete.prototype.addUpdateColorHex=function (colorName,colorValue){
    try{
        isValidHexColor(colorValue.toString());
        this.colorMap.set(colorName.toString(),colorValue.toString());
        
    }catch(e){
        if(e instanceof TypeError)
        {
            throw e;
        }
    }
}

/**
 * @memberOf ColorPallete
 * 
 * @param colorName string name
 */
ColorPallete.prototype.getColorHex=function (colorName){
    if(this.colorMap.get(colorName)===undefined){
        throw new ColorNotFoundError("Color not found in map")
    }else{
        return this.colorMap.get(colorName)
    }
}
/**
 * @memberOf ColorPallete
 * 
 * @param colorName string name
 */
ColorPallete.prototype.deleteColorHex=function(colorName){
    if (this.colorMap.delete(colorName)===false){
        throw new ColorNotFoundError("Color not found in map")
    }
}

ColorPallete.prototype.getColorsMap=function(){
    return this.colorMap;
}
function isValidHexColor(inputString) {
    var regex  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
    if(regex.test(inputString)===true){
        return;
    }else{
        throw new TypeError("Invalid Hex Color string provided.");
    }
}

//colorpallete.addColor("MainColor","#ldkgjsdlfjgkhb")
//colorpallete.addColor("mainColor",)
module.exports=ColorPallete;