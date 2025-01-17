
function fibonaciSeq(number) {
    let arr = [];
    for (let i = 0; i < Infinity; i++) {
        if (i === 0 || i === 1) {
            arr.push(i);
        }
        else {
            let a = arr[i - 2];
            let b = arr[i - 1];

            let c = a + b;
            if (c < number) {
                arr.push(c);
            }
            else {
                return arr;
            }
        }
    }
}


let input = 10;
console.log(fibonaciSeq(input));

