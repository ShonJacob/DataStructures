//#1 , use a temporary variable
var a =5;
var b =10;
// var temp;
// temp=a;
// a=b;
// b=temp;

//#2 , use addition
// a=a+b;
// b=a-b;
// a=a-b;

//#3 , use multiplication
// a=a*b;
// b=a/b;
// a=a/b;

// #4 , use bitwise XOR
// XOR , returns 1 only if exactly one of the 2 operands is 1
// a=a^b;
// b=a^b;
// a=a^b;

// #5, single statement
// b=a+b - (a=b);
//execution is right to left, so a=b is done first


console.log(a,b);