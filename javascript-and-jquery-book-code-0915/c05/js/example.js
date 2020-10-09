// // ADDING ITEMS TO START AND END OF LIST
// var list = document.getElementsByTagName('ul')[0];                 // Get the <ul> element

// // ADD NEW ITEM TO END OF LIST
// var newItemLast = document.createElement('li');                    // Create element
// var newTextLast = document.createTextNode('cream');                // Create text node
// newItemLast.appendChild(newTextLast);                              // Add text node to element
// list.appendChild(newItemLast);                                     // Add element end of list

// // ADD NEW ITEM START OF LIST
// var newItemFirst = document.createElement('li');                   // Create element
// var newTextFirst = document.createTextNode('kale');                // Create text node
// newItemFirst.appendChild(newTextFirst);                            // Add text node to element
// list.insertBefore(newItemFirst, list.firstChild);                  // Add element to list



// var listItems = document.querySelectorAll('li');                   // All <li> elements

// // ADD A CLASS OF COOL TO ALL LIST ITEMS
// var i;                                                             // Counter variable
// for (i = 0; i < listItems.length; i++) {                           // Loop through elements
//   listItems[i].className = 'cool';                                 // Change class to cool
// }

// // ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// var heading = document.querySelector('h2');                        // h2 element
// var headingText = heading.firstChild.nodeValue;                    // h2 text
// var totalItems = listItems.length;                                 // No. of <li> elements
// var newHeading =  headingText + '<span>' + totalItems + '</span>'; // Content
// heading.innerHTML = newHeading;                                    // Update h2 using innerHTML (not textContent) because it contains markup


let ul = document.querySelector('ul')
console.log(ul)

const newLi = document.createElement('li')
let newItem = 'goat cheese'

newLi.textContent = newItem
newLi.className = 'cool'

ul.insertAdjacentElement('afterbegin', newLi)

let listItems = document.querySelectorAll('li')
console.log(listItems)

listItems.forEach( listItem => {
  listItem.className = 'cool'
})

var newItemFirst = document.createElement('li')
var newTextFirst = document.createTextNode('kale')
newItemFirst.appendChild(newTextFirst)
newItemFirst.className = 'cool'

ul.insertAdjacentElement('afterbegin', newItemFirst)

const heading = document.querySelector('h2')
let headingText = heading.firstChild.nodeValue
let length = listItems.length

let newHeading = `${headingText} <span>${length}</span>`

heading.innerHTML = newHeading
