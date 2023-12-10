const modalBtn = document.querySelector(".btn-start");
modalBtn.addEventListener("click", () => {
  const overlay = document.querySelector(".overlay");
  modalBtn.style.display = "none";
  overlay.style.display = "none";
});
