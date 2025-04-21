function Insertion_Sort(arr){
    let n=arr.length;
    for(let i=1;i<n;i++){
        let key=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=key;
    }
    return arr;
}
let answer=Insertion_Sort([1,4,2,7,9,8,0,5,6]);
console.log(...answer);