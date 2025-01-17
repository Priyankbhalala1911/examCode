let arr = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

let arrx = arr.flat(2);
let max = 0;

for (let i of arrx) {
    if (i > max) {
        max = i;
    }
}
console.log(max);