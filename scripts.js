let slidePosition = 1;
imageCarousel(slidePosition);

function nextSlide(n) {
    imageCarousel(slidePosition += n);
}

function currentSlide(n) {
    imageCarousel(slidePosition = n);
}

function imageCarousel(n) {
    console.log(n);
    let i;
    let slides = document.getElementsByClassName("items");
    if (n > slides.length) { slidePosition = 1 }
    if (n < 1) { slidePosition = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    console.log(slides);
    slides[slidePosition - 1].style.display = "block";
} 