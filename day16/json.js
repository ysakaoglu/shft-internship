//json exercises
//json.parse is for changing json to object
//json.stringify is for changing object to json
//stringify and parse can take 3 parameters

//our data to do exercises:

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

//1. Change skills array to JSON using JSON.stringify()

const skillsChanged = JSON.stringify(skills);
console.log(skillsChanged);

//2. Stringify the age variable

const ageChanged = JSON.stringify(age);
console.log(ageChanged);

//3. Stringify the isMarried variable

const isMarriedChanged = JSON.stringify(isMarried);
console.log(isMarriedChanged);

//4. Stringify the student object

const studentChanged = JSON.stringify(student);
//console.log(studentChanged);

//5. Stringify the students object with only firstName, lastName and skills properties

const studentChangedLimited = JSON.stringify(student, ['firstName', 'lastName', 'skills']);
console.log(studentChangedLimited);

//6. Parse the txt JSON to object

const users = JSON.parse(txt);
//console.log(users);

//7. Find the user who has many skills from the variable stored in txt

let maxSkills = 0;
let bestUser = 0; //or null

for (const user in users)
{
    const skillCount = users[user].skills.length;
    if (maxSkills < skillCount)
    {
        maxSkills = skillCount;
        bestUser = user;
    }
}

console.log(`best user is: ${bestUser}`);
console.log(`max skills count: ${maxSkills}`);
