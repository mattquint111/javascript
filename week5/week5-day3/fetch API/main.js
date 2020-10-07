let postsButton = document.getElementById("postBtn")
postsButton.addEventListener("click", getPosts)


function getPosts() {
    let endpoint = "https://jsonplaceholder.typicode.com/posts"

    fetch(endpoint)
        .then(response => {
            // return in JSON format
            return response.json()
        })
        .then(data => {
            // display data to the DOM
            let output = `
                        <h3>Posts:</h3>
                        <div class='form-group'>
                        <input type='text' id='search' class='form-control' placeholder='search by title or ID.'>
                        </div>
            `
        console.log(data)
        data.forEach(post => {
            output += `
            <ul class="list-group mb-3" id=${post.id}>
              <li class="list-group-item"><strong>ID:</strong> ${post.id}</li>
              <li class="list-group-item"><strong>Title:</strong> ${post.title}</li>
              <li class="list-group-item"><strong>Body:</strong> ${post.body}</li>
            </ul>
            `
        });

        document.getElementById("posts").innerHTML = output

        // filtering function
        document.getElementById("search").addEventListener("keyup", search)

        function search() {
            let value = document.getElementById("search").value
            data.forEach( post => {
                if ((post.id == value)||(post.title.indexOf(value) > -1)||(value == '')) {
                    document.getElementById(post.id).style.display = 'block'
                } else {
                    document.getElementById(post.id).style.display = 'none'
                }
            })
        }  
        })

         
}


