let obj = { name: 'sid', age: 24 };
function myFunction(obj) {
    const arr = Object.entries(obj);
    return arr;
}

console.log(myFunction(obj));