export default function messagePopup(message) {
  const messageHolder = document.querySelector(".messageHolder");
  messageHolder.style.display = "flex";
  messageHolder.innerHTML = `<p>${message}</p>`;
  setTimeout(function() {
        messageHolder.style.display = "none";
    }, 1500);
}