const arr = ["priyank","rubra","krunal","harsh","romil","dimple","nishtha","shidharth","dhruv"];
const name = "nishtha"

if(arr.includes(name)){
    let namePosition = arr.indexOf(name);
    let arrPostion = arr.slice(0,namePosition);
    console.log("to given name position :",namePosition + 1);
    console.log(arrPostion);
}
else{
    console.log("name does not found..")
}