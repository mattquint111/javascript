// ASSIGNMENT - JAVASCRIPT EXERCISES

// 1. palindrome
function palindrome(word) {
    let reverseWord = word.split('').reverse().join('')
    if (word == reverseWord) {
        return `${word}: IS a palindrome`
    }
    else return `${word}: IS NOT a palindrome`
}
// console.log(palindrome('javascript'))
// console.log(palindrome('racecar'))

// 2. remove duplicates
let testArr= ['John', 'Mary', 'Alex', 'Steve', 'Mary', 'John']

function removeDuplicates(arr) {
    let uniqueArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}
// console.log(removeDuplicates(testArr))

// 3. return true/false if item is in array
function inArray(item, arr) {
    return arr.includes(item)
}

// console.log(inArray('John', testArr))

// 4. largest number in an array

// array of 10 random numbers between 1-100
let testNumbers = []
for (let i = 0; i < 10; i++) {
    testNumbers.push(Math.floor(Math.random() * 100))
}

function findLargest(arr) {
    let largest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}
// console.log(testNumbers)
// console.log(findLargest(testNumbers))

// 5. find smallest number in an array
function findSmallest(arr) {
    let smallest = Infinity;
    for (let i in arr) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest
}
// console.log(testNumbers)
// console.log(findSmallest(testNumbers))

// 6. FizzBuzz
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) console.log('FizzBuzz');
        else if (i % 3 == 0) console.log('Fizz');
        else if (i % 5 == 0) console.log('Buzz');
        else console.log(i)
    }
}
// fizzBuzz(100)

// 7. even or odd
function evenOrOdd(num) {
    return (num % 2 == 0 ? `${num}: is even` : `${num}: is odd`)
}
// console.log(evenOrOdd(20))

// 8. sort array
let unsortedArr = [3,4,56,7,8,1];

function sortAscending(arr) {
    return arr.sort(function(x, y) {return x - y})
}
// console.log(sortAscending(unsortedArr))

function sortDescending(arr) {
    return arr.sort(function(x, y) {return y - x})
}
// console.log(sortDescending(unsortedArr))

// 9. Class: BankAccount

class BankAccount {
    constructor(firstName, lastName, middleName, accountType, balance) {
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.accountType = accountType
        this.balance = balance
        this.status = 'Opened'
    }
    
    printBalance() {
        console.log(`ACCOUNT TYPE: ${this.accountType}, BALANCE: $${this.balance}`)
    }

    deposit(amount) {
        this.balance += amount
        console.log(`Deposited: $${amount}`)
        console.log(`Account balance: $${this.balance}`)
    }

    withdraw(amount) {
        if (amount > this.balance) {
            this.balance -= amount + 35
            console.log(`Withdrawn: $${amount}`)
            console.log("Your account is overdrawn and has been charged a $35 fee.")
            console.log(`Account balance: $${this.balance}`)
        } else {
            this.balance -= amount
            console.log(`Withdrawn: $${amount}`)
            console.log(`Account balance: $${this.balance}`)
        }
    }

    transfer(amount, account) {
        this.balance -= amount
        account.balance += amount
        console.log(`$${amount} has been transfered to ${account.accountType}`)
    }
}

function createAccount(firstName, lastName, middleName='N/A', accountType, balance) {
    if (balance < 100) {
        console.log('You must have at least $100 to open an account')
    } else {
        console.log('New account has been created')
        return new BankAccount(firstName, lastName, middleName, accountType, balance)
    }
    
}

// let checkingAccount = createAccount('John', 'Doe', 'Smith', 'checking', 1_000)
// let savingsAccount = createAccount('John', 'Doe', 'Smith', 'savings', 2_000)

// checkingAccount.printBalance();
// savingsAccount.printBalance();
// savingsAccount.transfer(500, checkingAccount)
// checkingAccount.printBalance();
// savingsAccount.printBalance();

// let newAccount = createAccount('Jack', 'Long', 'Mac', 'checking', 99)
