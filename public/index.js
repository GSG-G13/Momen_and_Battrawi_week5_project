const searchInput = document.querySelector('.myInput');
const submitBtn = document.querySelector('.submitBtn');
const newsContainer = document.querySelector('.news-card-container');

const updateDom = (data) => {
  newsContainer.textContent = '';
  data.articles.forEach((element) => {
    const newsCard = document.createElement('div');
    newsCard.className = 'news-card';

    const image = document.createElement('img');
    image.src = element.urlToImage || 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png';
    image.alt = 'News image';
    newsCard.appendChild(image);

    const content = document.createElement('div');
    content.className = 'content';

    const title = document.createElement('h2');
    title.textContent = element.title;
    content.appendChild(title);

    const description = document.createElement('p');
    description.textContent = element.description;
    content.appendChild(description);

    const link = document.createElement('a');
    link.href = element.url;
    link.target = '_blank';
    link.textContent = 'Read More';
    content.appendChild(link);

    newsCard.appendChild(content);

    newsContainer.appendChild(newsCard);
  });
};

(() => {
  fetch('http://localhost:3000/search?keyword=top')
    .then((response) => response.json())
    .then((data) => updateDom(data))
    .catch((error) => console.error(error));
})();

submitBtn.addEventListener('click', () => {
  fetch(`http://localhost:3000/search?keyword=${searchInput.value}`)
    .then((response) => response.json())
    .then((data) => updateDom(data))
    .catch((error) => console.error(error));
});
