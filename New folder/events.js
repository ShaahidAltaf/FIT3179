function incrementCounter() {
    var spanElement = document.getElementById('counter');
    var count = spanElement.getAttribute('numberOfClicks');
    count++;
    spanElement.innerText = count;
    spanElement.setAttribute('numberOfClicks', count);
}

function toggleVisibility() {
    var chartImage = document.getElementById('chart');
    if (chartImage.style.display == "none") {
        chartImage.style.display = "block";
    } 
    else {
        chartImage.style.display = "none";
    }
}
        
    

