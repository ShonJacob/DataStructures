// const twoSum = function(nums, target) {
//     let twoNums = [];
//     let ptr = 0;
//     let counter=1;

//     if(!nums || nums.length<2){
//             return nums; 
//     }
//     while(ptr<=nums.length-2){
//         while(counter<=nums.length-1){
//             if((nums[ptr] + nums[counter]) === target){
//                 twoNums.push(ptr, counter);
//                 return twoNums;
//             }
//             counter++;
//         }
//         ptr++;
//         counter=ptr+1;

//     }
//     for(let i=0;i<nums.length;i++){

//     }

//     return twoNums;
// };


const twoSum = function(nums, target) {
    let numsObj = {};
    for(let i=0;i<nums.length;i++){
        numsObj[nums[i]] = i;
    }
    for(let i=0;i<nums.length;i++){
        let diff = target - nums[i];
        if(numsObj.hasOwnProperty(diff) && numsObj[diff] !== i){
            return [i, numsObj[diff]];
        }
    }
    return [];
};


console.log(twoSum([5,1,2,4,6], 6));