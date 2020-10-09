const mergeSorted = (arr1, arr2)=>{
    const mergeSortedArrray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;

    //checks
    if(arr1.length === 0){
        return arr2;
    }
    if(arr2.length === 0){
        return arr1;
    }

    //main logic
    while(arr1Item || arr2Item ){
        if(!arr2Item || arr1Item<arr2Item){
            mergeSortedArrray.push(arr1Item);
            arr1Item = arr1[i];
            i++;
            console.log(`i = ${i}`);
        }
        else{
            mergeSortedArrray.push(arr2Item);
            arr2Item = arr2[j];
            j++;
            console.log(`j = ${j}`);
        }
    }
    return mergeSortedArrray;
}


console.log(mergeSorted([1,2,3,4,9], [2,4,5,12,15]));