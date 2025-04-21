function sum0fNaturalNumbers(num){
    if(num==0) return 0;
    return num+sum0fNaturalNumbers(num-1);
}
let answer=sum0fNaturalNumbers(10);
console.log(answer);