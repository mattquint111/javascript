// Javascript practice
// console.log("Hello World!");

// set today's date
var today = new Date();
var elDate = document.getElementById('date');
elDate.textContent = today;

let a = 10;
const pi = 3.1416
const e = 2.7183

// function delclaration: function can be called before the function is defined
// sayHello();
function sayHello() {
    console.log('Hello');
}

// function expression (arrow function): must be defined before the function is called
const sayGoodbye = () => console.log('Goodbye');
// sayGoodbye();

function displayName(name) {
    console.log(name);
}
// displayName('Matt');

const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}
// console.log(add(pi, e));

myList = [1,2,3,4,5]

//while loop
// // console.log('while loop');

// let count = 1;
// while (count < 10) {
//     console.log(count)
//     count++
// }

// Activity-1
// let names = ['john', 'jane', 'jill', 'joe', 'jake']

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i].toUpperCase())
// }

// console.log('')
// let counter = 0;
// while (counter < names.length) {
//     console.log(names[counter])
//     counter++
// }

// let newList = []
// for (let i = 1; i <= 10; i++) {
//     newList.push(i);
// }


// Activity-2
// function checkIfVowel(letter) {
//     letter = letter.toLowerCase();
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
    
//     if (letter == 'y') return 'y: Is SOMETIMES a vowel'

//     for (let elem in vowels) {
//         if (elem === letter) {
//             return `${letter}: IS a vowel`
//         } else {
//             return `${letter}: Is NOT a vowel`
//         }
//     }
// }
// console.log(checkIfVowel('o'))


// Activity-3

// function integerSum(x, y) {
//     let sum = x + y

//     if (sum >= 50 && sum <= 80) return 65;
//     else return 80;
// }

// console.log(integerSum(50, 10));
// console.log(integerSum(1, 2));
// console.log(integerSum(65, 98));


// CLASSES & OBJECTS

// class Car {
//     constructor(make, model) {
//         this.make = make
//         this.model = model    
//     }  
// }

// Car.prototype.drive = function() {
//     console.log("The car is driving.")
// }
// Car.prototype.brake = function() {
//     console.log("The car is braking.")
// }

// let myCar = new Car('Honda', 'S2K')

// console.log(myCar.make, myCar.model)
// myCar.drive()
// myCar.brake()
// console.log(myCar)

// MODERN JAVASCRIPT CLASSES

// class Car {
//     constructor(make, model) {
//         this.make = make
//         this.model = model
//     }

//     thisCar() {
//         console.log(this.make + ' ' + this.model)
//     }

//     drive() {
//         console.log("Car is driving")
//     }

//     brake() {
//         console.log("Car is braking")
//     }
// }

// let myCar = new Car('Honda', 'S2k')

// myCar.thisCar()

// ACTIVITY-3

class BankAccount {
    constructor(balance, accountType) {
        this.balance = balance
        this. accountType = accountType
    }

    printBalance() {
        console.log(`Account type: ${this.accountType}, Balance: $${this.balance}`)
    }

    deposit(amount) {
        this.balance += amount
        console.log(`Deposited: $${amount}`)
        console.log(`Your current balance is: $${this.balance}`)
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('That amount is greater than current balance')
        } else {
        this.balance -= amount
        console.log(`Withdrawn: $${amount}`)
        console.log(`Your current balance is: $${this.balance}`)
        }
        
    }
}

let myAccount = new BankAccount(1_000, 'checking')
console.log(myAccount)
myAccount.deposit(500)
myAccount.withdraw(750)
myAccount.deposit(250)
myAccount.printBalance()
myAccount.withdraw(2000)

let mySavingsAccount = new BankAccount(0, 'savings')
console.log(mySavingsAccount)
mySavingsAccount.printBalance();
mySavingsAccount.deposit(100)
mySavingsAccount.withdraw(50)