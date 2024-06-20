document.addEventListener('DOMContentLoaded', () => {
    // Check if the user is logged in
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
        return;
    }

    const newsForm = document.getElementById('news-form');
    const newsList = document.getElementById('news-list');
    let news = JSON.parse(localStorage.getItem('news')) || [];

    const displayNews = () => {
        newsList.innerHTML = '';
        news.forEach((item, index) => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.content}</p>
                <button onclick="deleteNews(${index})">Hapus</button>
            `;
            newsList.appendChild(newsItem);
        });
    };

    newsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('news-title').value;
        const content = document.getElementById('news-content').value;

        news.push({ title, content });
        localStorage.setItem('news', JSON.stringify(news));
        displayNews();

        newsForm.reset();
    });

    window.deleteNews = (index) => {
        news.splice(index, 1);
        localStorage.setItem('news', JSON.stringify(news));
        displayNews();
    };

    document.getElementById('logout-button').addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
    });

    displayNews();
});
