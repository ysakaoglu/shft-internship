//1. creating function

function fullName()
{
    console.log("Adam Jefferson");
}

fullName();

//2. creating function with return

function fullName2(firstName, lastName)
{
    return (firstName + lastName);
}

console.log(fullName2("Mehmet", "Yılmaz"));

//3. addNumbers

function addNumbers(a, b)
{
    return (a + b);
}

console.log(addNumbers(5, 7));

//4. calculating area function

function areaFinder(length, width)
{
    return (length * width);
}

console.log(areaFinder(5, 4));

//5. finding perimeter of rectangle

function perimeterCalc(length, width)
{
    return (2 * (length + width));
}

console.log(perimeterCalc(6, 9));

//6. calculating volume

function volumeCalc(length, width, height)
{
    return (length * width * height);
}

console.log(volumeCalc(5, 7, 10));

//7. area of circle

function areaOfCircle(radius)
{
    return (Math.PI * (radius ** 2));
}

console.log(areaOfCircle(5));

//8. çemberin çevresi

function cevreCember(radius)
{
    return (2 * Math.PI * radius);
}

console.log(cevreCember(5));

//9. finding density

function density(mass, volume)
{
    return (mass / volume);
}

console.log(density(30, 15));

//10. speed

function speed(distance, time)
{
    return (distance / time);
}

console.log(speed(300, 3));

//11. weight

function weight(mass, gravity)
{
    return (mass / gravity);
}

console.log(weight(80, 10));

//...
//13. calculating BMI

function bmiCalc(weight, height)
{
    let bmi = weight / (height ** 2);

    if (bmi < 18.5)
        return ("Underweight");
    else if (bmi >= 18.5 && bmi <= 24.9)
        return ("Normal weight");
    else if (bmi >= 25 && bmi <= 29.9)
        return ("Overweight");
    else
        return ("obese");
}

console.log(bmiCalc(65, 185));
console.log(bmiCalc(75, 1.85));
console.log(bmiCalc(95, 1.85));
console.log(bmiCalc(175, 1.85));



function eqCalc(a, b, c, x)
{
    return ((-a * x - c) / b);
}



console.log(eqCalc(2, 5, 4, 3));



function quadraticCalc(a, b, c)
{
    if (a === 0)
        return ("not a quadratic equation");

        const discriminant = ((b ** 2) - (4 * a * c));
        if (discriminant < 0)
            return ("No real solutions");
        else if (discriminant === 0)
            return { x: -b / (2 * a) };
        else
        {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return { x1, x2 };
        }
}

console.log(quadraticCalc(1, -2, -4));



function printArray(arr) 
{
    arr.forEach(element => {
      console.log(element);
    });
}

function isPrime(number) 
{
    if (number <= 1) return false;
    if (number <= 3) return true;

    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) 
    {
        if (number % i === 0 || number % (i + 2) === 0) 
            return false;
    }

    return true;
}