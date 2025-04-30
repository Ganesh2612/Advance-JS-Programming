let student={
    name: "Likitha",
    age: 17,
    marks : 557
}
Object.defineProperties(student,{
    name:{
        writable:false,
        enumerable:false,
        configurable:true
    },
    age:{
        writable:true,
        enumerable:true,
        configurable:true
    },
    marks:{
        writable:true,
        enumerable:true,
        configurable:true
    }
})
student.age=20;
for(let key in student){
    console.log(key);
}
delete student.marks;
let descriptor=Object.getOwnPropertyDescriptors(student,"name","age","marks");
console.log(JSON.stringify(descriptor,null,2));