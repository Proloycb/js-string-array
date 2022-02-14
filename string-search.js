const products = [
    'Dell naracore 129 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'Dell yellow laptop with black camera',
    '1X59 Lenovo commercial yoga laptop',
    'LG supernova Laptop',
    'HTC low price phone',
    'Dell purple color phone with Laptop'
];

const searching = 'phone';

const output = [];
// indexof
for (const product of products){
    if (product.toLowerCase().indexOf(searching.toLowerCase())!=-1) {
        // output.push(product);
    }
}
// console.log(output);

for (const product of products){
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}

// console.log(output);

// startwith
for (const product of products){
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        // output.push(product);
    }
}

// console.log(output);

// endsWith
for (const product of products){
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}

console.log(output);