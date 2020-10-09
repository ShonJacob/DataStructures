
// function fizzbuzz(endingNumber){
//         if(typeof parseInt(endingNumber) !== 'number' || endingNumber === null || isNaN(endingNumber) === true){
//            return [];
//         }
//         else if(endingNumber<=0 || Array.isArray(endingNumber) === true){ //Array.isArray(endingNumber) === true , endingNumber instanceof Array
//             return [];
//         }
    
//         let result= [];
//         endingNumber = parseInt(endingNumber);
//         for(let i=1;i<=endingNumber;i++){
//             if(i%3===0 && i%5===0){
//                 result.push("FizzBuzz");
//             }
//             else if(i%3===0){
//                 result.push("Fizz");
//             }
//             else if(i%5===0){
//                 result.push("Buzz");
//             }
//             else result.push(i.toString());
//         }
//         return result;
//     }

//      console.log(fizzbuzz(15));

const fizzbuzz = function(n){
    if(typeof parseInt(n) !== 'number' || n === null || isNaN(n) === true){
        return [];
    }
    else if(n<=0 || Array.isArray(n) === true){ //Array.isArray(n) === true , n instanceof Array
        return [];
    }
    
    let obj = {
        3: 'Fizz',
        5: 'Buzz',

    }

   let result = [];

    for(let i=1;i<=n;i++){
        let flag =0;
        let ansString = '';
        for(const [key, value] of Object.entries(obj)){
            if(i%key === 0){
                ansString += value;
                flag = 1;
            }
            
        }
        if(flag!=1){
            ansString +=i.toString();
        }
        result.push(ansString);   
    }
    return result;
}

console.log(fizzbuzz(15));