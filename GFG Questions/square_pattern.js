let s = 4;
for(let i=1;i<=s;i++){
    let str = "";
    for(let j=1;j<=s;j++){
        if(i==1||i==s||j==1||j==s){
            str = str + "* ";
        }
        else{
            str = str +"  ";
        }
    }
    console.log(str);
}