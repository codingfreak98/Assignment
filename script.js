const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Hello", ",", " my ", "name ", "is ", "Smith"];
const typingDelay = 100;

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

let type = (word) => {
  let charIndex = 0;
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (charIndex < word.length) {
        typedTextSpan.textContent += word.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, typingDelay);
  });
};
document.addEventListener("DOMContentLoaded", async () => {
  let currentWordIndex = 0;
  for (i = 0; i < textArray.length; i++) {
    await type(textArray[currentWordIndex]);
    if (currentWordIndex == 1) {
      await delay(500);
    }
    currentWordIndex++;
  }
});
