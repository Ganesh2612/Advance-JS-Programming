let numbers=[];
for(let i=0;i<20;i++){
    numbers.push(Math.floor(Math.random()*10));
}
console.log(numbers);
let frequency={};
for(let number of numbers){
    frequency[number]=(frequency[number]||0)+1;
}
console.log(frequency);