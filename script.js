document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');
    const news = JSON.parse(localStorage.getItem('news')) || [];

    const displayNews = () => {
        newsContainer.innerHTML = '';
        news.forEach((item) => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
            newsContainer.appendChild(newsItem);
        });
    };

    displayNews();
});
