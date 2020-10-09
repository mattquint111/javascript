// // Activity-1
// // let firstName = document.getElementById('firstName')
// // let lastName = document.getElementById('lastName')
// // let submitButton = document.getElementById('submitButton')
// // let fullNameDisplay = document.getElementById('fullNameDisplay')

// // submitButton.addEventListener('click', () => {
// //     let fullName = `${firstName.value} ${lastName.value}`
// //     fullNameDisplay.textContent = fullName
// // })

// // Activity-2
// let postsList = document.getElementById("postsList")

// for (let i = 0; i < posts.length; i++) {
//     let post = posts[i]

//     const postItem = `
//                     <li>
//                       <b>Title: ${post.title}</b>
//                       <br>
//                       <i>Body: ${post.title}</i>
//                     </li>
//                     <br>
//     `
//     postsList.insertAdjacentHTML("beforeend", postItem)
// }

// ARRAY HELPER METHODS

// forEach
// const arr = [1,2,3,4]
// arr.forEach(item => console.log(item))

// let languages = ['JS', 'TypeScript', 'Elm', 'Dart', 'Scala']

// let langEl = document.querySelector('#language')

// let fragment = new DocumentFragment()
// languages.forEach( language => {
//   let li = document.createElement('li')
//   li.textContent = language
//   fragment.appendChild(li)
// })

// langEl.appendChild(fragment)

// let menu = document.getElementById('menu')
// let li = document.createElement('li')
// li.textContent = 'Services'

// menu.insertBefore(li, menu.firstElementChild.nextElementSibling)

// element.insertAdjacentHTML(positionName, text)
// positionName == beforebegin,afterbegin,beforeend,afterend

// let list = document.getElementById('list')

// // insert <h2>Web Technology</h2>
// list.insertAdjacentHTML('beforebegin', '<h2>Web Technology</h2>')
// list.insertAdjacentHTML('afterbegin', '<li>HTML</li>')
// list.insertAdjacentHTML('beforeend', '<li>JavaScript</li>')
// list.insertAdjacentHTML('afterend', '<p>For front end developers</p>')

// parentNode.replaceChild(newChild, oldChild)
// let menu = document.getElementById('menu')

// let li = document.createElement('li')
// li.textContent = 'Home'

// menu.replaceChild(li, menu.firstElementChild)

// let childNode = parentNode.removeChild(childNode)
//returns the removed node 

// let menu = document.getElementById('menu')

// // while(menu.firstElementChild) {
// //   menu.removeChild(menu.firstElementChild)
// // }

// menu.innerHTML = '';
// console.log(menu)

// let clonedNode = originalNode.cloneNode(deep)
// deep == true => clones node and all children nodes
// deep == false => only node is cloned and not children

// let menu = document.getElementById('menu')
// let clonedMenu = menu.cloneNode(true)
// clonedMenu.id = 'menu-mobile'
// document.body.appendChild(clonedMenu)

let app = document.getElementById('app')
let langs = ['TypeScript', 'HTML', 'CSS']

let nodes = langs.map(lang => {
  let li = document.createElement('li')
  li.textContent = lang;
  return li
})

app.append(...nodes)