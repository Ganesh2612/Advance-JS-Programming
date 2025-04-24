let Student_marks=new Map();
let array=["Aadvick","Arun","Bhuvanesh","Chandhu","Dhanush","Eswar","Frenklyn","Ganesh"];
for(let name of array){
    Student_marks.set(name,Math.floor(Math.random()*100));
}
for(let name of array){
    console.log(`${name} : ${Student_marks.get(name)}`);
}
