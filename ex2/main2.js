//usage of prompt

let name = prompt("What is your name?", "Write your name here")
if (name)
{
    alert("Hello, " + name + "!")
}

//usage of confirm and alert

let confirming = confirm("Are you sure to exit?")
if (confirming)
{
    alert("You are exiting...")
}
else
{
    alert("You stayed at the page.")
}

//ternary

let isOkay = true
isOkay ? console.log("It is okay") : console.log("It is not okay")