const copyButtons = document.querySelectorAll(".copyButton");
const copyHtmlButtons = document.querySelectorAll(".copyHtmlButton");

copyButtons.forEach((copyButton) => {
  copyButton.addEventListener("click", async () => {
    const textToCopy = copyButton
      .closest(".element")
      .querySelector("p")
      .getAttribute("data-text-value");
    await copyToClipboard(textToCopy);
    window.close();
  });
});

copyHtmlButtons.forEach((copyHtmlButton) => {
  copyHtmlButton.addEventListener("click", async () => {
    const htmlToCopy = copyHtmlButton
      .closest(".element")
      .querySelector("p")
      .getAttribute("data-html-value");
    await copyToClipboard(htmlToCopy);
  });
});

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
