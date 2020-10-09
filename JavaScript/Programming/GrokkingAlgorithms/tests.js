const binarySearch = require('../GrokkingAlgorithms/binarySearch');

describe('absolute', ()=>{
    it('should return true if the number exists', ()=>{
        const result = binarySearch.absolute(1);
        expect(result).toBe(1);
    }); 
    it('should return false if number doesnt exist', ()=>{
        const result = binarySearch.absolute(-1);
        expect(result).toBe(1);
    }); 
    it('should return ', ()=>{
        const result = binarySearch.absolute(0);
        expect(result).toBe(0);
    }); 
});