
function arr(data, input) {
    let arr = [];
    let count = 0;
    for (let i = 0; i < data.length / input; i++) {
        let arr1 = [];
        for (let j = 0; j < input; j++) {
            arr1.push(data[count]);
            count++;
        }
        arr.push(arr1);
    }
    console.log(arr)
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr(data, 3);