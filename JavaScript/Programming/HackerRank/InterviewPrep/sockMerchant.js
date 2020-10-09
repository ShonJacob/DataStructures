function sockMerchant(n, ar) {
    let obj = {};
    for(let i=0;i<ar;i++){
        obj[ar[i]] = obj[ar[i]]+1 || 1;
    }
    console.log(obj)
    let sum = 0;
    for(const key of Object.keys(obj)){
        if(obj[key]>=2){
            sum+= Math.floor(obj[key]/2);
        }
    }
    return sum;
}

console.log(sockMerchant(5, [1,2,1,2,2]));