document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector('.typing');
    const textArray = ["Piyush Kumar Singh", "Web Developer"];
    let arrayIndex = 0; // Tracks current phrase in textArray
    let charIndex = 0;  // Tracks current character in the phrase
    let isErasing = false;

    const typingSpeed = 150; // Typing speed in ms
    const erasingSpeed = 100; // Erasing speed in ms
    const delayBetweenWords = 1000; // Delay before starting the next word

    const type = () => {
        const currentText = textArray[arrayIndex];

        if (!isErasing && charIndex < currentText.length) {
            // Typing characters
            typingElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (isErasing && charIndex > 0) {
            // Erasing characters
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, erasingSpeed);
        } else if (!isErasing && charIndex === currentText.length) {
            // Pause at the end of the word
            isErasing = true;
            setTimeout(type, delayBetweenWords);
        } else if (isErasing && charIndex === 0) {
            // Move to the next word
            isErasing = false;
            arrayIndex = (arrayIndex + 1) % textArray.length; // Loop back to the first word
            setTimeout(type, typingSpeed);
        }
    };

    type(); // Start the typing animation
});
