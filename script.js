window.addEventListener('scroll', function() {
    // Calculate rotation angle based on scroll position
    let scrollPosition = window.scrollY;
    let rotationAngle = scrollPosition % 360; // Limit angle to 360 degrees

    // Select the div and apply the rotation
    const brewImgDiv = document.querySelector('.brew-img-div');
    brewImgDiv.style.transform = `rotate(${rotationAngle}deg)`;
});