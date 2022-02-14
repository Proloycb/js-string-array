const numbers = [1,2,3,5,9,13,15,19,22,25];
const anotherPart = numbers.slice(4, 8);
// console.log(anotherPart);
// console.log(numbers);

// splice
// const anotherPart2 = numbers.splice(4, 3);
// console.log(anotherPart2);
// console.log(numbers);

//
const anotherPart3 = numbers.splice(4, 3, 222, 444);
console.log(anotherPart3);
console.log(numbers);