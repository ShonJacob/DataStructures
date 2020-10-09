// const twoSum = function(nums, target) {
//     let numsObj = {};
//     for(let i=0;i<nums.length;i++){
//         numsObj[nums[i]] = i;
//     }
//     for(let i=0;i<nums.length;i++){
//         let diff = target - nums[i];
//         if(numsObj.hasOwnProperty(diff) && numsObj[diff] !== i){
//             return [i, numsObj[diff]];
//         }
//     }
//     return [];
// };

const twoSum = function(nums, target) {
    let numsObj = {};
    for(let i=0;i<nums.length;i++){
        let diff = target - nums[i];
        if(numsObj.hasOwnProperty(diff)){
            return [i, numsObj[diff]];
        }
        numsObj[nums[i]] = i;     
    }
    return [];
};

console.log(twoSum([1,2,3,5,7,9], 12))
