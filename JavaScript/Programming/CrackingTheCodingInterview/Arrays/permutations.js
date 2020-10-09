function permutation(str1, str2){
    if(str1.length !== str2.length) return false;
    let charCountArray = new Array(128).fill(0);
    // One solutiion is to sort both the arrays and compare 
    let str1Chars = str1.split('');
    let str2Chars = str2.split('');

    for(let i in str1Chars){
        let value = charCountArray[i];
        console.log(value)
    }
}

console.log(permutation("shon123", "shon123"));