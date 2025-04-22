function balanced_Paranthesis(str){
    let st=[];
    for(let i=0;i<str.length;i++){
        if(str[i]==="[" || str[i]==="{" || str[i]==="("){
               st.push(str[i]);
        }
        else{
            if(st.length==0){
                return false;
            }
            let len=st.length-1;
            if((str[i]=="]" && st[len]=="[") || (str[i]=="}" && st[len]=="{") || (str[i]==")" && st[len]=="(")){
                    st.pop();
            }
            else{
                return false;
            }
            }
    }
    return st.length===0;
}
let answer=balanced_Paranthesis("[({{}}})]");
if(answer){
    console.log("Balanced Paranthesis");
}
else{
    console.log("Not Balanced");
}