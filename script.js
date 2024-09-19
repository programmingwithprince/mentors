var route = document.getElementById('route');

function pasteFromClipboard() {
    // Check if the clipboard API is supported
    if (navigator.clipboard) {
        navigator.clipboard.readText()
            .then(function (text) {;
                route.value = text.toString(); // Paste clipboard text into the input field
                console.log(route.value,text);
            })
            .catch(function (err) {
                console.error('Failed to read clipboard contents:', err);
                alert('Unable to paste. Please try manually pasting.');
            });
    } else {
        alert('Clipboard API not supported in your browser.');
    }
}
function sisu() {
    // Base URL
    const baseURL = 'https://i.filecdn.in/438mentorsedu/';
    // Get the route entered by the user
    var route = document.getElementById('route').value.trim();

    // Validate if the route is entered
    if (!route) {
        alert('Please enter a route.');
        return;
    }
    var encodedRoute = encodeURIComponent(route);
    // Construct the full URL
    const fullURL = baseURL + route;

    // Check if the URL exists and is valid
    fetch(fullURL, { method: 'HEAD' })
        .then(response => {
            // If the response is okay, proceed with download
            if (response.ok) {
                const link = document.createElement('a');
                link.href = fullURL;
                link.target = '_blank'; // Open in a new tab
                link.rel = 'noopener noreferrer'; // Security improvement
                link.download = '';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                alert('The file does not exist or the URL is incorrect.');
            }
        })
        .catch(error => {
            console.error('Error fetching the URL:', error);
            alert('Failed to fetch the URL. Please check your internet connection or the entered route.');
        });
}
