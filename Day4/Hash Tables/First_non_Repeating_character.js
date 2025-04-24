let word="You are doing good,";
let newWord=word.replaceAll("," ,"").replaceAll(" ","").toLowerCase();
console.log(newWord);
let obj={};
for(let char of newWord){
    obj[char]=(obj[char]||0)+1;
}
for(let key in obj){
    if(obj[key]===1){
        console.log(`${key} : ${obj[key]}`)
        break;
  }
}
