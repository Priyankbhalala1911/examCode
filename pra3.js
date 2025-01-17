function myFunction(){
    let count = 0;
    return function Count(){
        count+=1
        return count;
    }
}
let myfunction = myFunction();
console.log(myfunction());
console.log(myfunction());
console.log(myfunction());