"use strict"

const expect= require("chai").expect;
const ColorPallete= require('./index');
let cp=new ColorPallete();
let ColorNotFoundError=require('./errors/ColorNotFoundError')

describe('ColorPallete object instance',()=>{
    cp=new ColorPallete();
    it('is created and is not undefined',()=>{
        expect(cp).not.to.be.an('undefined');
    })
    it('is created and is an object',()=>{
        expect(cp).to.be.an('object');
    })
})
describe('ColorPallete addUpdateColorHex()',()=>{
    it('adds a new valid color in the map',()=>{
        cp=new ColorPallete();
        cp.addUpdateColorHex('Main',"#FFFFFF");
        let res=cp.getColorHex('Main');
        expect(res).to.be.equal('#FFFFFF');
    })
    it('rejects invalid color to be entered',()=>{
        cp=new ColorPallete();
        expect(function(){cp.addUpdateColorHex('Main',"4#FFFFFF")}).to.throw(TypeError);
    })

})
describe('ColorPallete getColorHex()',()=>{
    it('should return a color that is saved in map',()=>{
        cp=new ColorPallete();
        cp.addUpdateColorHex('Main',"#FFFFFF");
        let res=cp.getColorHex('Main');
        expect(res).to.be.equal('#FFFFFF'); 
    })
    it('should throw a ColorNotFoundError when the requested color does not exist',()=>{
        cp=new ColorPallete();
        console.log(cp.colorMap.keys())
        expect(function(){cp.getColorHex('Main')}).to.throw(ColorNotFoundError);
    })
})
describe('ColorPallete deleteColorHex()',()=>{
    it('should remove a color from the map',()=>{
        cp=new ColorPallete();
        cp.addUpdateColorHex('Main',"#FFFFFF");
        cp.deleteColorHex("Main");
        expect(function(){cp.getColorHex('Main')}).to.throw(ColorNotFoundError);
    })
    it('should throw a ColorNotFoundException when the requested color to delete does not exist',()=>{
        cp=new ColorPallete();
        expect(function(){cp.deleteColorHex('Main')}).to.throw(ColorNotFoundError);
    })
})
describe('ColorPallete getColorsMap()',()=>{
    it('should return the colors saved as an object',()=>{
        cp=new ColorPallete();
        cp.addUpdateColorHex('Main',"#FFFFFF");
        let colors=cp.getColorsMap();
        expect(colors).to.be.an('Map');
    })
})
