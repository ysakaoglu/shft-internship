//map, filter, reduce, every, find, findIndex, some, sort
//1. map: changing array
const nums = [1, 2, 3]
const squared = nums.map((num) => num * num)
console.log(squared) //nums = [1, 4, 9]

//2. filter: filter array
const nums2 = [1, 2, 5, 7, 9, 34, -10]
const greaterThanFive = nums2.filter(num => num > 5)
console.log(greaterThanFive) //nums2 = [7, 9, 34]

//3. reduce: returning a value after a some process
const nums3 = [1, -5, 9, 0, 11, 3]
const total = nums3.reduce((acc, curr) => acc + curr, 0)
console.log(total) //19

//4. every: returning boolean after using some process every elemant of the array
const nums4 = [0, 3, 5, -11, 7]
const allLessThanTen = nums4.every(num => num < 10)
console.log(allLessThanTen) //true

//5. find: returning a first value which satisfies the condition
const nums5 = [1, 3, 5, 7, 9]
const findBigFive = nums5.find(num => num > 5)
console.log(findBigFive) //7

//6. findIndex: returning a first index of the value which satisfies the condition
const nums6 = [1, 3, 5, 7, 9]
const findBigFiveIndex = nums6.findIndex(num => num > 5)
console.log(findBigFiveIndex) //3

//7. some: returning a boolean if any element satisfies the condition

const nums7 = [1, 4, 2, 9];
const hasNumberGreaterThanFive = nums7.some(num => num > 5);
console.log(hasNumberGreaterThanFive); //true

//8. sort: sorting array
const nums8 = [3, 7, 2];
const sorted = nums8.sort((a, b) => b - a);
console.log(sorted); // [7, 3, 2]