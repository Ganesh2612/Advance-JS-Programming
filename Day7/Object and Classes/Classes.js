class Details{
      constructor(name,marks){
        this.name=name;
        this.marks=marks;
      }
      display(){
        console.log(`${this.name} scored ${this.marks} marks`);
      }
}
const student=new Details("Pawan",90);
student.display();