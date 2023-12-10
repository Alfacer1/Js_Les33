document.addEventListener("DOMContentLoaded", function() {
    let imageElement = document.getElementById("randomImage");
    
    let imagePath = "img/";

    let imageNames = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg"];

    let randomImageName = imageNames[Math.floor(Math.random() * imageNames.length)];

    let imageUrl = imagePath + randomImageName;

    imageElement.src = imageUrl;
});
