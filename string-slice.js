const anthem = 'Amar Sonar Bangla Ami Tomay Valobashi';
const splitPart = anthem.split(' ');
const splitPart2 = anthem.split('a');
// console.log(splitPart);

const slicePart = anthem.slice(5, 15);
// console.log(slicePart);

const anotherPart = anthem.substr(5, 7);
// console.log(anotherPart);

const anotherPart2 = anthem.substring(5, 13);
// console.log(anotherPart2);

const first = 'amar';
const second = 'valobasha';
const word = first.concat(second).concat('programming');
// console.log(word); 

const words = ['ana', 'bina', 'cina', 'dina'];
// const word2 = words.join('');
// const word2 = words.join(' ');
// const word2 = words.join(',');
// const word2 = words.join(', ');
const word2 = words.join(' .. ');
console.log(word2);
