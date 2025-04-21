function CountDigits(num){
    if(num===0) return 0;
  
    return 1+CountDigits(Math.floor(num/10));
}
let answer=CountDigits(1200000345567);
console.log(answer);