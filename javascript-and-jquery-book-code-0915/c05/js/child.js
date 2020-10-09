// // Select the starting point and find its children.
// var startItem = document.getElementsByTagName('ul')[0];
// var firstItem = startItem.firstChild;
// var lastItem = startItem.lastChild;

// // Change the values of the children's class attributes.
// firstItem.className = 'complete';
// lastItem.className = 'cool';

// const startItem = document.getElementsByTagName('ul')[0]
// const firstItem = startItem.firstChild
// const lastItem = startItem.lastChild

// firstItem.setAttribute('class', 'complete')
// lastItem.setAttribute('class', 'cool')

// const ul = document.querySelector('ul')
// const newLi = document.createElement('li')
// let newText = document.createTextNode('quinoa')

// newLi.appendChild(newText)


// var position = document.getElementsByTagName('ul')[0]
// position.appendChild(newLi);

// let figs = document.getElementById('one')

// figs.parentElement.removeChild(figs)

let firstItem = document.getElementById('one')

if (firstItem.hasAttribute('class')) {
    let attr = firstItem.getAttribute('class')

    let el = document.getElementById('scriptResults')
    el.innerHTML = `The first item has a class name: ${attr}</p>`
}