document.addEventListener('DOMContentLoaded', function () {
    const foxImage = document.getElementById('fox-image');
    const newFoxButton = document.getElementById('new-fox');

    function fetchFox() {
        fetch('https://randomfox.ca/floof/')
            .then(response => response.json())
            .then(data => {
                foxImage.src = data.image;
            })
            .catch(error => {
                console.error('Error fetching fox:', error);
                alert('Failed to load fox image.');
            });
    }

    // Load a fox on initial page load
    fetchFox();

    // Change fox when button is clicked
    newFoxButton.addEventListener('click', fetchFox);
});
