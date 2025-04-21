function Selection_sort(arr){
    let n=arr.length;
     for(let i=0;i<n;i++){
        let mid_indx=i;
        for(let j=i+1;j<n;j++){
            if(arr[mid_indx]>arr[j]){
                mid_indx=j;
            }
        }
        [arr[mid_indx],arr[i]]=[arr[i],arr[mid_indx]];
     }
     return arr;
}
let answer=Selection_sort([5,7,1,4,45,32,55]);
console.log(...answer);