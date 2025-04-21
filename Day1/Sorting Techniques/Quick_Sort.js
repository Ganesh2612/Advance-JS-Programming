function Partition(arr,low,high){
    let pivot=arr[arr.length-1];
    let i=low-1;
    for(let j=low;j<=high-1;j++){
        if(arr[j]<pivot){
            i++;
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
    }
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
    return i+1;
}

function Quick_Sort(arr,low,high){
    if(low>=high) return;
    let pi=Partition(arr,low,high);

    Quick_Sort(arr,0,pi-1);
    Quick_Sort(arr,pi+1,high);

}

let arr = [10, 80, 30, 90, 40]; 
console.log("Original array: " + arr); 
  
Quick_Sort(arr, 0, arr.length - 1); 
console.log("Sorted array: " + arr);