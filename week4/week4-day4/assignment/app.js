const newsItems = document.getElementById("newsItems");

const newsList = news.articles;

function checkImage(imageURL) {
    if (imageURL === null) {
        imageURL = "imageNotFound.jpeg"
    } else {
        return imageURL
    }
}

newsList.forEach((item) => {
  let li = document.createElement("li");

  let text = `
    <div class='image'>
        <img src=${item.urlToImage} onerror="this.onerror=null; this.src='imageNotFound.jpeg'" alt="Source image not found"/>
    </div>
    <h2 class='title'>${item.title}</h2>
    <div class='textContent">
        <p class='description'><i>${item.description}</i></p>
        <h4 class='content'>${item.content }</h4>
    </div>
    <a href=${item.url}></a>
    <div class="footer">
        <a href="${item.url}">Link</a>
        <p class="publishedAt">${item.publishedAt}</p>
    </div> 
  `
    console.log(item.url)
  li.innerHTML = text;
  newsItems.appendChild(li);
});


