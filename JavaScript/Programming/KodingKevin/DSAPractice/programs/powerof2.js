
// function powerof2(n){
//     if(n<=0){
//         return false;
//     }
//     if(getBaseLog(2,n)%1 !== 0){
//         return false
//     }
//     else
//         return true;
// }

// function getBaseLog(x,y){
//     return Math.log(y)/Math.log(x);
// }

// console.log(powerof2(536870912));
// console.log(Math.log());

//The above approach works only for smaller numbers, for larger numbers, since it is impossible to round a number completely (division by decimal points)

function powerof2(n){
    if(n<=0){
        return false;
    }
    else if (n===1){
        return true; // 2 power 0 is 1
    }
    let i=1;
    while(i<=n){
        i *=2;
        if(i === n){
            return true;
        }
    }
    return false;
} //(single while loop iterating) O(log n)

console.log(powerof2(1024));