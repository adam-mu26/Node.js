console.log("hello");


const [num1 ,operater, num2] = process.argv.slice(2)
console.log(process.argv);
switch (operater) {
    case '+':
        const result = parseInt(num1) + parseInt(num2)
        console.log('result', result);
        break;
}

console.log(process.argv);
switch(operater) {
    case '*':
        const result = parseInt(num3) * parseInt(num4)
        console.log('result:', result);
        break;
}