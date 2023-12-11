const modalBtn = document.querySelector(".btn-start");
const overlay = document.querySelector(".overlay");
modalBtn.addEventListener("click", () => {
  modalBtn.style.display = "none";
  overlay.style.display = "none";
});
