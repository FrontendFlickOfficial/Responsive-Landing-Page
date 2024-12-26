
        // Get the toggle container element
        const toggleContainer = document.getElementById('toggle-container');

        // Add a click event listener to toggle day/night mode
        toggleContainer.addEventListener('click', () => {
            document.body.classList.toggle('night'); // Toggle the 'night' class on the body
        });