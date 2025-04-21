function SumOfDigits(num){
    if(num==0){
        return 0;
    }
    return (num%10)+SumOfDigits(Math.floor(num/10));
}

let answer=SumOfDigits(13467);
console.log(answer);