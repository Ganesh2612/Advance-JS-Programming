let family={
    members:7,
    get joint(){
        return `${this.members} in my family`;
    },
    set joint(val){
        if(val<5){
            console.log("You are not living in joint family");
        }
        else{
            this.members=val;
        }
    }

}
console.log(family.joint);
family.joint=4;
console.log(family.joint);