function refreshPage() {
    document.body.innerHTML = `
        <div class="loading-gif">
            <img src="images/loading.gif" alt="Loading..." width="100">
        </div>
    `;
 
    setTimeout(function() {
        location.reload();
    }, 5000); 
}

setInterval(function() {
    refreshPage();
}, 20000); 