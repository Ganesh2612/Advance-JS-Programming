let arr=[3,7,2,5,1,0,9];
let index=5;
function max(arr){
let max=-1;
for(let value of arr){
    if(value>max){
        max=value;
    }

}
return max;
}

for(let i=0;i<index-1;i++){
    arr=arr.filter((num)=>{ return num!=max(arr)});
}
console.log(max(arr));