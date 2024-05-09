function scrape() {
    const question = "7. Reverse Integer";
    const questionNumber = parseInt(question.split('.')[0]);

    // Constructing the URL
    const url = `https://walkccc.me/LeetCode/problems/${questionNumber}/`;

    // Fetching the HTML content of the page
    return fetch(url)
        .then(response => response.text())
        .then(html => {
            // Creating a temporary div element to hold the HTML content
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            // Extracting the solution from the <code> tags
            const solution = tempDiv.querySelector('code').innerText;

            // Returning the solution
            return solution;
        })
        .catch(error => {
            console.error('Error fetching the page:', error);
            return null;
        });
}

// Example usage
ExecuteScript().then(solution => {
    console.log(solution);
});
