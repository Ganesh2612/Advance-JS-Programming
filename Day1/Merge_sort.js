function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let mid_element=Math.floor(arr.length/2);
    let left_element=mergeSort(arr.slice(0,mid_element));
    let right_element=mergeSort(arr.slice(mid_element));


    return merge(left_element,right_element);

}
function merge(left,right){
    let result=[];
    let i=0,j=0;
    while(i<left.length && j<right.length ){
        if(left[i]<right[j]){
            result.push(left[i]);
            i++;
        }
        else{
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
    
let arr=[2,7,3,6,4,1,1,9];
console.log(mergeSort(arr));
