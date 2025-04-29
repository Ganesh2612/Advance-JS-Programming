const Student1={
    name: "Kala",
    age : 48,
    SSLC : "no",
    
}
const Student2=Object.assign({},Student1);
Student2.name="Gopi";
Student2.age=55;


const Student3={...Student2};
Student3.name="Manasha";
Student3.age=23,
Student3.SSLC="yes";
console.log(Student1);
console.log(Student2);
console.log(Student3);
