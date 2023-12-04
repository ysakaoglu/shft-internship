//closures exercises

//1. Create a closure which has one inner function

function increment()
{
    let count = 0;
    function plusOne()
    {
        count++;
        return count;
    }
    return plusOne;
}

const newFunc = increment();
console.log(newFunc());

//2. Create a closure which has three inner functions

function mathBasic()
{
    let i = 4
    function addOne()
    {
        i += 1;
        return i;
    }
    function decreaseOne()
    {
        i--;
        return i;
    }
    function multiplyWithTwo()
    {
        i *= 2;
        return i;
    }
    return {
        addOne:addOne(),
        decreaseOne:decreaseOne(),
        multiplyWithTwo:multiplyWithTwo()
    }
}


const mathOut = mathBasic();
console.log(mathOut.addOne);
console.log(mathOut.multiplyWithTwo);
console.log(mathOut.decreaseOne);

/*3. Create a personAccount out function. 
It has firstname, lastname, incomes, expenses inner variables. 
It has totalIncome, totalExpense, accountInfo,addIncome, addExpense 
and accountBalance inner functions. Incomes is a set of incomes 
and its description and expenses is also a set of expenses and its description.*/

function personAccount(firstname, lastname)
{
    let incomes = [];
    let expenses = [];

    function addIncome(amount, description)
    {
        incomes.push({ amount, description });
    }

    function addExpense(amount, description)
    {
        expenses.push({ amount, description });
    }

    function totalIncome()
    {
        return incomes.reduce((total, income) => total + income.amount, 0);
    }

    function totalExpense()
    {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    function accountInfo()
    {
        return `Account owner: ${firstname} ${lastname}
Total incomes: ${totalIncome()}
Total expenses: ${totalExpense()}`;
    }

    function accountBalance()
    {
        return (totalIncome() - totalExpense());
    }

    return {
        addIncome,
        addExpense,
        accountInfo,
        accountBalance
    };
}

const personAccountOuter = personAccount("Josh", "Dobbs");
personAccountOuter.addIncome(11400, "Salary");
personAccountOuter.addExpense(4500, "House");
personAccountOuter.addExpense(3500, "Food");

console.log(personAccountOuter.accountInfo());
console.log("Balance: " + personAccountOuter.accountBalance());