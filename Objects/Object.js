const Obj = {
    name : "Rahul",
    greetings : function(){
        return "Hello Good Morning!";
    },
    bye(){
        return "Babbye";
    }
}
const fun = Obj.greetings;
console.log(fun());

const bye = Obj.bye();
console.log(bye);