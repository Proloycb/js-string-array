const numbers = [5, 3, 2, 1, 4, 6];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = ['arif', 'konok', 'durjoy', 'badhon', 'saiful'];
const sortedNumbers2 = friends.sort();
// console.log(sortedNumbers2);
const sortedNumbers3 = friends.reverse();
// console.log(sortedNumbers3);

const sortAndReverce = friends.sort().reverse();
// console.log(sortAndReverce);

const bigNumbers = [45, 23, 3, 2, 13, 66];
const sortBigNumbers = bigNumbers.sort(function (a, b){
    return a - b;
});
console.log(sortBigNumbers);