(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// Download button
document.getElementById('btn-con').addEventListener('click', function() {
    // Create an anchor element
    var downloadLink = document.createElement('a');
    // Set the href attribute to the URL of the file to be downloaded
    downloadLink.href = '';
    // Set the download attribute to specify the filename
    downloadLink.download = 'filename.ext';
    // Append the anchor element to the body
    document.body.appendChild(downloadLink);
    // Trigger a click event on the anchor element
    downloadLink.click();
    // Remove the anchor element from the body
    document.body.removeChild(downloadLink);
});
