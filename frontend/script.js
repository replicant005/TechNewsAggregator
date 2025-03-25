document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');
    
    fetch('http://localhost:4000/api/techNews')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            newsContainer.innerHTML = ''; // Clear loading message
            
            // Process Hacker News stories
            data.hackerNewsStories.forEach(story => {
                if (!story.title) return; // Skip if no title
                
                const storyElement = createNewsCard(
                    story.title,
                    story.url || `https://news.ycombinator.com/item?id=${story.id}`,
                    story.score || 0,
                    story.by || 'Anonymous',
                    new Date(story.time * 1000).toLocaleDateString(),
                    'Hacker News',
                    'hacker-news',
                    'hn-badge'
                );
                newsContainer.appendChild(storyElement);
            });
            
            // Process Dev.to articles
            data.devToArticles.forEach(article => {
                const articleElement = createNewsCard(
                    article.title,
                    article.url,
                    article.positive_reactions_count,
                    article.user.username,
                    new Date(article.published_at).toLocaleDateString(),
                    'Dev.to',
                    'dev-to',
                    'dev-badge'
                );
                newsContainer.appendChild(articleElement);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            newsContainer.innerHTML = `
                <div class="error" style="grid-column: 1 / -1; text-align: center; color: #e74c3c;">
                    Failed to load news. Please try again later.
                </div>
            `;
        });
});

function createNewsCard(title, url, score, author, date, source, cardClass, badgeClass) {
    const card = document.createElement('div');
    card.className = `news-card ${cardClass}`;
    
    card.innerHTML = `
        <div class="news-content">
            <h2><a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a></h2>
            <div class="news-meta">
                <span>👤 ${author}</span>
                <span>⭐ ${score}</span>
                <span>📅 ${date}</span>
            </div>
            <div class="source-badge ${badgeClass}">${source}</div>
        </div>
    `;
    
    return card;
}