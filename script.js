document.addEventListener('DOMContentLoaded', function() {
    const tweetForm = document.getElementById('tweet-form');
    const postContainer = document.querySelector('.post-container');

    tweetForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        const tweetContent = document.getElementById('tweet-content').value;

        const tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweet');

        const tweetText = document.createElement('p');
        tweetText.textContent = tweetContent;

        tweetDiv.appendChild(tweetText);

        postContainer.appendChild(tweetDiv);

        document.getElementById('tweet-content').value = '';
    });
});
