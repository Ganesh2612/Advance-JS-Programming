const details={
    name : "Unknown",
    age : "33",
    display: function(){
        console.log(`Name is ${this.name} and age is ${this.age}`);
    }
}
details.display();