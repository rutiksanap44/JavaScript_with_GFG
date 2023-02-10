fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(users => {
    console.log(users);
});