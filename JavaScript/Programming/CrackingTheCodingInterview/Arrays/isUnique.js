function isUnique(str){
    if(str.length>128){
        return false;       //when the length is greater than 128 ASCII characters
    }
    let charBooleanArray = new Array(128).fill(false);
    let charStr = str.split('');
    for(let i=0;i<charStr.length;i++){
        let val = charStr[i];
        if(charBooleanArray[val]) return false;     // set a boolean character array to true for each character and if already set, return false
        charBooleanArray[val] = true;
    }
    console.log(charStr);
    return true;

}


console.log(isUnique("shon1234"));