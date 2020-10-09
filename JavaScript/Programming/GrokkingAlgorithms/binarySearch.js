// in a sorted array


function binarySearch(arr, num){

    if(!arr || !num || typeof num !== 'number')
    {
        return false;
    }
    let low =0;
    let high = arr.length -1;

    while(low<=high){
        let middle = Math.floor((low+high)/2);
        if(arr[middle] === num){
            return true;
        }
        else if(arr[middle]<num){
            low = middle+1;
        }
        else{
            high = middle-1;
        }
    }
    return false;
}
let arr1 = [2,5,6,7,9,13,15,20,26,32];

console.log(binarySearch(arr1,13));
