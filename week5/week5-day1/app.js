// Activity-1 - Cat Facts Part 1

// // built into JavaScript
// let request = new XMLHttpRequest();

// request.addEventListener("load", function () {
//   console.log(this.responseText);
//   let result = JSON.parse(this.responseText);

//   console.log(result);
// });

// request.open("GET", "https://jsonplaceholder.typicode.com/posts");
// request.send();

// let request = new XMLHttpRequest()
// request.open("GET", "https://cat-fact.herokuapp.com/facts")
// request.send()

// request.addEventListener('load', function() {
//     let result = JSON.parse(this.responseText)

//     result.all.forEach(element => {
//         console.log(`text: ${element.text}`)
//         // check if user is null
//         if(element.user) {
//             console.log(`name: ${element.user.name.first} ${element.user.name.last}`)
//         }
        
//     });
// })

// Activity 1 - onreadystatechange
// let request = new XMLHttpRequest()

// request.onreadystatechange = function() {
//     console.log('fired')
// }

// request.open("GET", "https://cat-fact.herokuapp.com/facts")
// request.send()

// Activity-2 - Cat Facts Part 2
// let request = new XMLHttpRequest()

// request.open("GET", "https://cat-fact.herokuapp.com/facts")
// request.send()

// request.addEventListener("load", function() {
//     let result = JSON.parse(this.responseText)
//     let resultArray = result.all
    
//     let ul = document.createElement('ul')

//     resultArray.forEach(element => {
//         let li = document.createElement('li')

//         let catFact = `
//         text: ${element.text}
//         `;
//         if (element.user) {
//             catFact += `
//              name: ${element.user.name.first} ${element.user.name.last}
//             `
//         }

//         li.textContent = catFact
//         ul.appendChild(li)

//     document.body.insertAdjacentElement("afterbegin", ul)
//     });
// })

