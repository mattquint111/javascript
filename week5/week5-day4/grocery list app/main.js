let storeNameInput = document.getElementById("store-name-input")
let storesContainer = document.getElementById("store-name-container")


storeNameInput.addEventListener('keyup', createStore)

function createStore() {
    if (event.keyCode === 13) {
        
        let storeValue = this.value

        addDataToFirebase(storeValue)
    }
}

function addDataToFirebase(store) {
    db.collection("stores").add({
        name: store
    })
    .then(function(docRef) {
        getAllStores()
    })
    .catch(function(error) {
        console.error("Error : ", error);
    });
}

function getAllStores() {
    storesContainer.innerHTML = ""

    db.collection("stores").get()
        .then( snapshot => {
            snapshot.forEach( doc => {
                let store = doc.data()
                let storeListItem = `
                <div class="row store">
                    <div class="col-11 store-name">${store.name}</div>
                    <div class="col-1 delete-button" ><i class="fas fa-trash-alt " onclick="deleteStore('${doc.id})></i></div>
                </div>
                `
                storesContainer.insertAdjacentHTML('beforeend', storeListItem)
            })
        })
}

function deleteStore(documentId) {
    db.collection("movies").doc(documentId).delete()
        .then(function() {
            getAllStores()
        }).catch(console.log("Error: ", error))
}