// Optional Assignments
// 1, display current day and time
function displayDate() {
    let today = new Date()
    let date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let day = today.getDay()
    console.log(`Date: ${date}`)
    console.log(`Today is: ${weekDays[day]}`)
    console.log(`Current Time: ${time}`)
}
// displayDate()

// 2. print current page
function printPage() {
    window.print()
}
// printPage()

// 3. print current date
function printDate() {
    let date = new Date()
    console.log(`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`)
}
// printDate()

// 4. area of a triangle
let a = 5
let b = 6
let c = 7
//find side c
function triangleArea(a, b, c) {
    let s = (a + b + c) / 2
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
    return area
}
// console.log(triangleArea(a, b, c)) 

// 5. rotate string
function rotateString(str) {
    return str.slice(-1) + str.slice(0,str.length-1)
}
// console.log(rotateString('google'))

// 7. is Jan. 1 a Sunday?
function isItSunday() {
    for (let year = 2014; year <= 2050; year++) {
        let d = new Date(year, 0, 1)
        if (d.getDay() === 0) {
            console.log("January 1st is a Sunday in the year " + year)
        }
    }
}
// isItSunday();

// 8. guess a number 1-10
function guessNumber() {
    let answer = Math.ceil(Math.random() * 10)
    let guess = prompt("Guess a number 1-10: ")
    if (guess == answer) {
        console.log("Good Work, you guessed right")
    }
    else {
        console.log("Not the right number")
        console.log("The answer was: " + answer)
    }
}
// guessNumber()


// 9. days until christmas
function daysToXmas() {
    let d = new Date()
    let month = d.getMonth()
    let day = d.getDay()
    let xmasMonth = 11
    let xmasDay = 25
    console.log(`X-mas is in: ${xmasMonth - month} months and ${xmasDay - day} days`)
}
// daysToXmas()

// 10. calculate multiplication and division
function multiplyBy() {
    let num1 = document.getElementById('fnumber').value
    let num2 = document.getElementById('snumber').value
    document.getElementById('result').innerHTML = num1 * num2;
}

function divideBy() {
    let num1 = document.getElementById('fnumber').value
    let num2 = document.getElementById('snumber').value
    document.getElementById('result').innerHTML = num1 / num2
}

// 11. get the website URL (loading page)
function getURL() {
    console.log(document.URL)
}
// getURL()

// 13. var from user-name
const var_name = 'abcd'
const n = 120
this[var_name] = n
// console.log(this[var_name])

// 16.
const sums = (x, y) => {
    if (x === y) {
        return 3 * (x + y)
    } else {
        return x + y
    }
}

// 17. absolute difference
function absDiff(num) {
    if (num < 19) {
        return 19 - num
    } else {
        return 3 * (num -19)
    }
}

// 18. 50-50
function checkFifty(num1, num2) {
    return num1 == 50 || num2 == 50 || (num1 + num2) == 50
   
}

// 19. within 100 or 400
function withinRange(num) {
    if (num < 100) {
        return 100 - num < 20
    } else if (num < 400) {
        return num - 100 < 20 || 400 - num < 20
    } else {
        return num - 400 < 20
    }
}
// console.log(withinRange(410))

// 20. either is positive
function eitherPos(x, y) {
    return (x > 0 && y < 0) || (x < 0 && y > 0)
}
// console.log(eitherPos(-1, 1))

// 21. add 'Py'
function addPy(str) {
    if (str.slice(0,2) === "Py") return str
    else return ('Py' + str)
}
// console.log(addPy('athon'))

 //22. remove character
 function removeChar(str, pos) {
     if (pos === 0) return str.slice(1)
     else return str.slice(0,pos) + str.slice(pos+1)
 }
//  console.log(removeChar('minimum', 4))

//23. change first and last
function firstToLast(str) {
    if (str.length === 1) return "Word must be at least 2 letters long"
    else return str.slice(str.length-1) + str.slice(1, str.length - 1) + str.slice(0, 1)
}
// console.log(firstToLast('cattywampus'))


