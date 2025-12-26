function openGift() {
    const giftBox = document.getElementById("giftBox");
    const letter = document.getElementById("letter");
    
    // Hide the gift box
    giftBox.style.display = 'none';
    
    // Show the letter with a fade-in effect
    letter.style.display = 'block';
    setTimeout(() => {
        letter.style.opacity = 1;
    }, 100);
}
