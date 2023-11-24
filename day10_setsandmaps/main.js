//----sets and maps----
//1. create an empty set

let exSet = new Set();
console.log(exSet);

//2. create a set containing 0 to 10 using loop
let loopSet = new Set();
for (let i = 0; i <= 10; i++)
{
    loopSet.add(i);
}
console.log(loopSet);

//3. remove an element from set

loopSet.delete(3);
console.log(loopSet);

//4. clear a set

loopSet.clear();
console.log(loopSet);

//5. create a set of 5 strings elements from array

let someArray = ["ali", "veli", "ahmet", "mehmet", "berk"];
//console.log(someArray);
let someSet = new Set(someArray);
console.log(someSet);

//6. create a map; countries and its letters count

let someMap = new Map();
someMap.set("norway", 6);
someMap.set("turkiye", 7);
someMap.set("usa", 3);

console.log(someMap);

//or

function my_strlen(str)
{
    return  str.length;
}

const my_countries = ["norway", "turkiye", "usa", "russia"];

const myMap = new Map(my_countries.map(country => [country, my_strlen(country)]));
console.log(myMap);

//new exercises; do some manipulations due to those arrays:

let a = [4, 5, 8, 9]
let b = [3, 4, 5, 7]
let countries = ['Finland', 'Sweden', 'Norway']

let A = new Set(a);
let B = new Set(b);
let countriesSet = new Set(countries);

//union of a and b

let c = [...a, ...b];
c = new Set(c);
console.log(c);

//a intersection b

let intersection = a.filter((num) => B.has(num))
let interSet = new Set(intersection);
console.log(interSet);

//difference of set

let difference = a.filter((num) => !B.has(num))
let differSet = new Set(difference);
console.log(differSet);
