function BinarySearch(arr,value){
    let start=0,end=arr.length-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(arr[mid]==value){
            return mid;
        }
        else if(arr[mid]>value){
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
    return -1;
}
let answer=BinarySearch([1,3,5,7,9],9);
if(answer<0){
    console.log("Element Not Found");
    
}
else{
    console.log(`Element is found at the ${answer} index int array`);
}