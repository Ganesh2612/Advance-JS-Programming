let arr=["eat", "tea", "tan", "ate", "nat", "bat"];
let map=new Map();
for(let array of arr){
    let sorted=array.split("").sort().join("");
    if(!map.has(sorted)){
        map.set(sorted,[]);
    }
    map.get(sorted).push(array);
}
// Array.from(map.values());
console.log(Array.from(map.values()));