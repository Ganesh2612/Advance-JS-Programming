const object1={
    name :"Kala",
    result : "Passed",
    marks : 95
}
const object2=object1;
object2.marks=97;
object1.name="Gopi";
console.log(object1);
console.log(object2);