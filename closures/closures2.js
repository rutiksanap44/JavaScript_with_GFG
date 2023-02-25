{
    var a = 2;
}
console.log(a); // 2 will get printed becuase var has global scope

const b = 4;
{
    const b = 3;
}
console.log(b); // b will not get printed because const is local scoped inside the bracket,
                // but after adding line no 6 i will print b = 4