let user={
    name:"lambda",
    age:98
}

Object.defineProperty(user,"fulldetails",{
    get(){
        return `${this.name} is ${this.age} years old`;
    },
    set(val){
        return [this.name,this.age]=val.split(" ");
    }
});
console.log(user.fulldetails);
user.fulldetails="ganga 55";
console.log(user.fulldetails);
