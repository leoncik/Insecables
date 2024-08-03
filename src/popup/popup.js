const copyButtons = document.querySelectorAll(".copyButton");

copyButtons.forEach((copyButton) => {
  copyButton.addEventListener("click", () => {
    const textToCopy =
      copyButton.previousElementSibling.getAttribute("data-text-value");
    copyToClipboard(textToCopy);
  });
});

async function copyToClipboard(text) {
  await navigator.clipboard.writeText(text);
}
