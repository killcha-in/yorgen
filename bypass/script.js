document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const episodes = document.querySelectorAll('.episode');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();

        episodes.forEach(episode => {
            const episodeNumber = episode.getAttribute('data-episode');
            const episodeTitle = episode.querySelector('a').textContent.toLowerCase();

            if (episodeNumber.includes(query) || episodeTitle.includes(query)) {
                episode.style.display = 'block';
            } else {
                episode.style.display = 'none';
            }
        });
    });
});