function Fibonacci(num){
    if(num==0) return 0;
    if(num==1) return 1;
    return Fibonacci(num-2)+Fibonacci(num-1);
}
let answer=Fibonacci(4);
console.log(answer);
