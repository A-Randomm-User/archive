function openPopup() {
    document.getElementById("myPopup").style.display = "block";
  }

  function closePopup() {
    document.getElementById("myPopup").style.display = "none";
  }

  window.onclick = function(event) {
    const popup = document.getElementById("myPopup");
    if (event.target == popup) {
      popup.style.display = "none";
    }
  };