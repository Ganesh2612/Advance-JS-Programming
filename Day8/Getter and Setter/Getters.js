let user={
    name : "Kaniha",
    age:40,
    getter(){
          return `${this.name} is ${this.age} years old`;
    }    
}
console.log(user.name);
console.log(user.age);
console.log(user.getter());