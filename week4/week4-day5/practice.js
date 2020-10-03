let btn = document.querySelector('#btn')
let msg = document.querySelector('#message')

btn.addEventListener('mouseup', (e) => {
    switch(e.button) {
        case 0:
            msg.textContent = 'left mouse button'
            break
        case 1: 
            msg.textContent = 'middle mouse button'
            break
        case 2:
            msg.textContent = 'right mouse button'
            break
        default:
            msg.textContent = 'unknown mouse button'
    }
})

