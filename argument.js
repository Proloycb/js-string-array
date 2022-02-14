function addNumbers (num1 , num2){
    let result = 0;
    for (const num of arguments){
       result = result + num ;
    }
    return result;
}
const sum = addNumbers(23, 16, 50, 100);
// console.log(sum);

function fullName (firstName , lastName){
    let fullNames = '';
    for(const names of arguments){
        fullNames = fullNames + names + ' ';
    }
    return fullNames;
}
const name = fullName('Hanif', 'Songket', 'bin', 'tomok', 'songket');
console.log(name);