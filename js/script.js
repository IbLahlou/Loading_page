function refreshPage() {
    // Replace all body content with the loading-gif
    document.body.innerHTML = `
        <div class="loading-gif">
            <img src="images/loading.gif" alt="Loading..." width="100">
        </div>
    `;

    // After 5 seconds, refresh the page
    setTimeout(function() {
        location.reload();
    }, 5000); // 5 seconds delay
}

// Refresh the page every 20 seconds
setInterval(function() {
    refreshPage();
}, 20000); //