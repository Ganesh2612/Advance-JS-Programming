function bubble_sort(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

let answer=bubble_sort([1,7,4,8,2,9,4,0]);
console.log(...answer);