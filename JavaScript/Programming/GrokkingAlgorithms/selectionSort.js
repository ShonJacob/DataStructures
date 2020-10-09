function smallestElement(arr){
    if(!arr || arr.length === 0){
        return null;
    }
    let smallestElement = arr[0];
    let smallest_index = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] < smallestElement){
            smallestElement = arr[i];
            smallest_index = i;
        }
    }
    return smallest_index;
}
 // find the smallest in each iteration of the array and pop it to a new array O(n^2)
function selectionSort(arr){
    let new_arr= [];
    while(arr.length>0){
        smallest_index = smallestElement(arr);
        new_arr.push(arr[smallest_index]);
        arr.splice(smallest_index, 1);
    }   // if we are splicing in a for loop, we need to set i-- after the splice statement
    return new_arr;
}





console.log(selectionSort([1,5,0,2,5,6,1]));