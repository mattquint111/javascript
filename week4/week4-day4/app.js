// callbacks
// let counter = 10

// let intervalId = window.setInterval( () => {
//     console.log(counter)
//     counter--
   
//     if (counter == 0) {
//         window.clearInterval(intervalId)
//     }
// }, 1000)

// Activity-2
// let timerInput = document.getElementById("timerInput")
// let startButton = document.getElementById('startButton')
// let countdownTime = document.getElementById('countdownTime')

// startButton.addEventListener('click', () => {
//     let currentTime = parseInt(timerInput.value)

//     let counter = window.setInterval( () => {
//         countdownTime.textContent = currentTime
//         currentTime--

//         if (currentTime < 0) {
//             window.clearInterval(counter)
//             countdownTime.textContent = 'Timer Stop'
//         }
//     },1000)
// })

// function getUpdatedCounter(callback) {
//     let counter = 0
//     let id = window.setInterval(  () => {
//         counter++
//         if (counter <= 3) {
//             callback(counter)
//         } else {
//             window.clearInterval(id)
//         }
//     },1000)
// }

// getUpdatedCounter( value => console.log(value))


// Activity-3
// console.log(quotes)


// function taskOne() {
//     console.log('task 1')
// }

// function taskTwo() {
//     console.log('task 2')
// }

// setTimeout(taskOne, 2000)

// taskTwo()


// function download(url) {
//     setTimeout( () => {
//         console.log(`Downloading ${url}...`)
//     }, 2000)
// }

// function download(url, callback) {
//     setTimeout(  () => {
//         console.log(`Downloading ${url}...`)

//         callback(url)
//     },1000)
// }

// let url = 'https://www.javascripttutorial.net/pic.jpg';
// let picture = 'picture'
// download(url, (picutre) => {
//     console.log(`Processing ${picture}`)
// })
let input = document.querySelector('#username')

input.setAttribute('value', 'guest')
console.log(input.value)

input.value = 'admin'
console.log(input.getAttribute('value'))