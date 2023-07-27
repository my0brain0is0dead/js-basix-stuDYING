function openPopup(selectorId) {
    const popup = document.querySelector(`#${selectorId}`);
    popup.style.display = "block";
}
  
function closePopup(selectorId) {
    const popup = document.querySelector(`#${selectorId}`);
    popup.style.display = "none";
}