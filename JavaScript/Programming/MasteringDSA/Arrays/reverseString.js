// var num = 1234567;

// const reversed = (num)=>{
//     var stringified = num.toString(10);
//     var reversed;
//     for(var i = stringified.length-1;i>=0;i--){
//         reversed = reversed + stringified[i];
//     }
//     console.log(reversed);
//     console.log(parseInt(reversed));
// }

// const reversed2 = (num) =>{
//     var rev = 0;
//     while(num!=0){
//         rev = rev*10 + num%10;
//         num = Math.floor(num/10);
//     }
//     console.log(rev)
// }
// // reversed(num);

// const reversed3 = (num) => {
//     var stringified = num.toString();
//     var splitString = stringified.split('');
//     var reversed = splitString.reverse();
//     console.log(reversed.join(""));
// }

// //using recursion, get the 

// reversed3(num);

//Andrei Neagoie
function reversed4(str){
 if(typeof str !== 'string'){
    return 'not a string';
 }
 if(!str || str.length<2){
    return str;
 }
 let reversed = [];
 const totalItems = str.length-1;
 str = str.split('');
 for(let i = totalItems; i>=0;i--){
    reversed.push(str[i]);
 }
 const reversedStr =  (reversed.toString()); // or join('')
 return reversedStr;
}

// function reversed5(str){
//     return str.split('').reverse().join('');
// }

// const  reversed6 = (str) =>{
//     return str.split('').reverse().join('');
// }

const result = reversed4("shon mathew jacob");

console.log(result);