//level 1
//1. creating empty object

let dog = {};

//2. printing that object

console.log(dog);

//3. adding some properties to object

dog.name = 'Boncuk';
dog.legs = 4;
dog.color = 'grey';
dog.age = 3;
dog.bark = function() { return ("hav hav"); };

//4. printing this properties

console.log(`Name: ${dog.name}`);
console.log(`Legs count: ${dog.legs}`);
console.log(`Color: ${dog.color}`);
console.log(`Age: ${dog.age}`);
console.log(`Bark: ${dog.bark()}`);

//5. adding new properties to object

dog.breed = 'Siberian';
dog.getDogInfo = function()
{
    return (`Name: ${this.name}, Legs: ${this.legs}, Breed: ${this.breed},
     Color: ${this.color}, Age: ${this.age}, Bark: ${this.bark()}`);
}

console.log(dog.getDogInfo());

//---------------------------------------------------------------
//level 2
//reading values from users object

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };

//1. finding person who has most skill
let maxSkillsUser = '';
let maxSkills = 0;
for (const user in users)
{
  if (users[user].skills.length > maxSkills)
  {
      maxSkills = users[user].skills.length;
      maxSkillsUser = user;
  }
}

console.log(maxSkillsUser);
console.log(maxSkills);

//2. find loogedin number, find points greater than 50

let loggedInCount = 0;
let greaterFiftyCount = 0;
for (const user in users)
{
    if (users[user].isLoggedIn)
        loggedInCount++;
    if (users[user].points >= 50)
        greaterFiftyCount++;
}

console.log(`logged in users: ${loggedInCount}`);
console.log(`users points greater than equal to fifty: ${greaterFiftyCount}`);

//3. find MERN (mongodb, express.js, react, node.js) developers

let mernDevelopers = []
for (const user in users)
{
    if (users[user].skills.includes('MongoDB') &&
    users[user].skills.includes('Express') &&
    users[user].skills.includes('React') &&
    users[user].skills.includes('Node'))
    {
        mernDevelopers.push(user);
    }
}

console.log(`mern developers: ${mernDevelopers}`);

//4. adding our own name to object without changing original object.

const newUser = 
{...users, 'Yigit': 
{
    email: 'yigit@yigit.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'ReactNative', 'Flutter', 'C'],
    age: 26,
    isLoggedIn: true,
    points: 50
}};

//console.log(users.Yigit); undefined because we copied original object to newUser
//console.log(newUser);
//console.log(newUser.Yigit);

//5. keys

const userKeys = Object.keys(users);
//console.log(userKeys);

//6. values

const userValues = Object.values(users);
//console.log(userValues); 
