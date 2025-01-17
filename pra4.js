const data = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];

const input = "age";

for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
        if(data[i][input] >data[j][input]){
            let temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
    }
}
console.log(data)