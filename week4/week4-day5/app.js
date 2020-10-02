// Algorithms

// Easy
// 1.sum all numbers
function findSum(number) {
    let soln = 0
    for (let i = 1; i <= number; i++) {
        soln += i
    }
    return soln
}

//2. returns larger number
function whichIsLarger( f, g ) {
    if (f() > g()) return 'f'
    else if (f() < g()) return 'g'
    else return 'neither'
}

// Medium
// 1.Convert objects to arrays
function toArray(obj) {
    let soln = []
    let keysArr = Object.keys(obj)
    let valuesArr = Object.values(obj)

    keysArr.forEach( key => {
        soln.push([key])
    })
    
    for (let i = 0; i < valuesArr.length; i++) {
        soln[i].push(valuesArr[i])
    }

    return soln
}

let testObject1 = {'a':1, 'b':2, 'c':3}
let testObject2 = { shrimp: 15, tots: 12 }

// 2. Convenience Store
function enoughChange(change, itemTotal) {
    let changeTotal = 0.25*change[0] + 0.1*change[1] + 0.05*change[2] + 0.01*change[3]

    return changeTotal >= itemTotal
}

// 3. War of Numbers
function warOfNumbers(numArray) {
    let evenArr = numArray.filter( item => item % 2 == 0)
    let oddArr = numArray.filter( item => item % 2 != 0)
    let evenSum = 0
    let oddSum = 0
    evenArr.forEach(item => evenSum += item)
    oddArr.forEach(item => oddSum += item)
    return (evenSum > oddSum ? evenSum - oddSum : oddSum - evenSum)
}

let testArr1 = [2, 8, 7, 5]


// Hard Difficulty
//1. Oddish vs. Evenish
function oddishOrEvenish(number) {
    let numberArray = number.toString().split('').map( elem => Number(elem))
    let digitSum = 0
    numberArray.forEach(elem => digitSum += elem)
    return (digitSum % 2 == 0 ? 'Evenish' : 'Oddish')
}

// Very Hard
// Fibonacci String
function fibStr(n, arr) {
    let soln = [...arr]

    for (let i = 2; i <= n; i++) {
        soln.push(soln[i-1] + soln[i-2])
    }

    return soln
}

