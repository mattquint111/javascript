const userEmail = document.getElementById('order-email')
const userOrder = document.getElementById("order-type")
const submitButton = document.getElementById("submit-order")


// submit order
submitButton.addEventListener('click', function() {
    let orderObject = {
        "emailAddress": userEmail.value,
        "coffee": userOrder.value
    }

    sendOrder(orderObject)
})

function sendOrder(order) {
    let xhr = new XMLHttpRequest()

    xhr.open("POST", "https://dc-coffeerun.herokuapp.com/api/coffeeorders/")
    xhr.setRequestHeader("Content-Type", "application/json")
    
    xhr.send(JSON.stringify(order))
}

// get order by email input
const emailOrderInput = document.getElementById("order-by-email")
const emailOrderButton = document.getElementById("order-by-email-button")

emailOrderButton.addEventListener('click', function() {
    let input = emailOrderInput.value

    let xhr = new XMLHttpRequest()
    xhr.open("GET", `https://dc-coffeerun.herokuapp.com/api/coffeeorders/${input}`)
    xhr.responseType = 'json'

    xhr.onload = function() {
        let data = this.response
        console.log(data)

        let li = document.createElement("li")
        let orderInfo = `
        <span>Email: <b>${data.emailAddress}</b></span>
        <br>
        <span>Order: <b>${data.coffee}</b></span>
        `
        li.innerHTML = orderInfo
            ordersList.insertAdjacentElement('beforeend', li)
        }

    xhr.send()
})


// Delete order
const deleteEmail = document.getElementById("delete-email")
const deleteEmailButton = document.getElementById("delete-email-button")

deleteEmailButton.addEventListener("click", function() {
    let xhr = new XMLHttpRequest()
    xhr.open("DELETE", `https://dc-coffeerun.herokuapp.com/api/coffeeorders/${deleteEmail.value}`)
    xhr.send()

    alert("Order was deleted for " + deleteEmail.value)

})

//display all orders
const ordersList = document.getElementById("orders")
const displayOrdersButton = document.getElementById('display-orders')

displayOrdersButton.addEventListener('click', displayOrders)


function displayOrders() {
    let xhr = new XMLHttpRequest()
    xhr.open('GET',  "https://dc-coffeerun.herokuapp.com/api/coffeeorders/")
    xhr.responseType = "json"
    
    xhr.onload = function() {
        let data = this.response
        console.log(data)

        let ordersArray = Object.values(data)

        ordersArray.forEach( element => {
            let li = document.createElement('li')
            let orderInfo = `
            <span>Email: <b>${element.emailAddress}</b></span>
            <br>
            <span>Order: <b>${element.coffee}</b></span>
            <hr>
            `
            li.innerHTML = orderInfo
            ordersList.insertAdjacentElement('beforeend', li)
        });
    }
    xhr.send()
}

