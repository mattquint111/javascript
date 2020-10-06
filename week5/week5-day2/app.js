const testUrl = "https://dc-coffeerun.herokuapp.com/api/coffeeorders/";
const testUrl2 = "https://reqres.in/api/users/23";

let coffeeObject = {
    emailAddress: "mailmailmail@mail.mail",
    coffee: 'Large Black Coffee',
    
}

fetch(testUrl, {
    method: "POST",
    headers: {
        "Content-Type": 'application/jason'
    },
    body: JSON.stringify(coffeeObject)
})
.then(res => res.json())
.then(data => console.log(data))