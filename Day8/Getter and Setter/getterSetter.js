let student={
    firstName:"marryy",
    lastname:"kumar",
    get fullName(){
        return `${this.firstName} ${this.lastname}`;
    },
    set fullName(value){
        return [this.firstName,this.lastname]=value.split(" ");
    }
}
console.log(student.fullName);
student.fullName="Lokesh Kanagaraj";
console.log(student.fullName);
