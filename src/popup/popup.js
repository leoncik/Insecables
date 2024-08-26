const copyButtons = document.querySelectorAll(".copyButton");
const copyHtmlButtons = document.querySelectorAll(".copyHtmlButton");

copyButtons.forEach((copyButton) => {
  copyButton.addEventListener("click", () => {
    const textToCopy = copyButton.closest('.element').querySelector('p').getAttribute("data-text-value");
    copyToClipboard(textToCopy);
    window.close()
  });
});

copyHtmlButtons.forEach((copyHtmlButton) => {
  copyHtmlButton.addEventListener("click", () => {
    const htmlToCopy = copyHtmlButton.closest('.element').querySelector('p').getAttribute("data-html-value");
    copyToClipboard(htmlToCopy);
  });
});

async function copyToClipboard(text) {
  await navigator.clipboard.writeText(text);
}
