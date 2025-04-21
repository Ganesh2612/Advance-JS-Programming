function productofarray(arr,index){
    if(index==arr.length-1) return 1;
    return arr[index]*productofarray(arr,index+1);
}
let answer=productofarray([2,7,4,8,9],0);
console.log(answer);