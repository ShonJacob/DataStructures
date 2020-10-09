const fizzbuzz = require('../programs/fizzbuzz');


describe('FizzBuzz', ()=>{
    test('should return an error if it is not a number', ()=>{
        expect(()=> {fizzbuzz(null)}).toThrow();
        expect(()=> {fizzbuzz(NaN)}).toThrow();
        expect(()=> {fizzbuzz("String")}).toThrow();
    })
    test('should return [] if <=0, or input is []', ()=>{
        expect(fizzbuzz(0)).toEqual([]);
        expect(fizzbuzz(-1)).toEqual([]);
        expect(fizzbuzz([])).toEqual([]);
    })
    test('should return FizzBuzz for divisible by both 3 and 5', ()=>{
        expect(fizzbuzz(15)).toEqual(['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']);
    })
    test('should return Fizz for divisible by 3 ', ()=>{
        expect(fizzbuzz(9)).toEqual(['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz']);
    })
    test('should return Buzz for divisible by 5 ', ()=>{
        expect(fizzbuzz(5)).toEqual(['1','2','Fizz','4','Buzz']);
    })

})