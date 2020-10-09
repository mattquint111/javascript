let xhr = new XMLHttpRequest()

xhr.open("GET", "http://www.omdbapi.com/?s=x-men&apikey=1d4ffc1b")
xhr.onload = function() {
    let data = JSON.parse(this.responseText)
    let dataArray = data.Search
    console.log(data.Search)

    dataArray.forEach(element => {
    // create html elements

    // movie card container div
    let card = document.createElement('div')
    card.className = 'card'
    
    // div for poster image
    let poster = document.createElement('div')
    poster.className = 'poster'

    let image = document.createElement('img');
    image.setAttribute('src', element.Poster)
    image.setAttribute('alt', "movie poster")
    image.setAttribute('href','#selected')
    image.addEventListener('click', function() {
        let selectedMovie = new XMLHttpRequest()
        selectedMovie.open("GET", `http://www.omdbapi.com/?i=${element.imdbID}&apikey=1d4ffc1b#`)
        selectedMovie.send()
        selectedMovie.onload = function() {
            let movieData = JSON.parse(this.responseText)
            let selectedInfo = `
            <img  class="selected_poster" src="${movieData.Poster}">
            <div id="selected-info">
            <h1 id='selected-title'>${movieData.Title}</h1>
            <hr>
            <span id='selected-year'>Year: <b>${movieData.Year}</b></span><br>
            <span id='selected-director'>Director: <b>${movieData.Director}</b></span><br>
            <span id='selected-runtime'>Run Time: <b>${movieData.Runtime}</b></span><br>
            <span id='selected-rating'>Rating: <b>${movieData.Rated}</b></span><br>
            <hr>
            <spam id='selected-plot'><em>${movieData.Plot}</em></spam>
            </div>
            `
            let selected = document.getElementById('selected')
            selected.innerHTML = selectedInfo
            selected.setAttribute('display', 'flex')
        }
        console.log(selected)
    })

    poster.appendChild(image)

    // div for poster title and year info
    let content = document.createElement('div')
    content.className = "content"

    let title = document.createElement('h2')
    title.className = "title"
    let titleName = element.Title
    title.insertAdjacentHTML('afterbegin',`<b>${titleName}</b>` )

    let year = document.createElement('h3')
    year.className = 'year'
    let titleYear = `<em>${element.Year}</em>`
    year.insertAdjacentHTML('afterbegin', titleYear)

    // add title and year to content div
    content.insertAdjacentElement('afterbegin', title)
    content.insertAdjacentElement('beforeend', year)
    
    // add poster and content divs to card div
    card.appendChild(poster)
    card.appendChild(content)
    
    // append each card to scroll_content container in html
    let scrollContent = document.getElementById('scroll_content')
    scrollContent.appendChild(card)
    });

}

xhr.send()

