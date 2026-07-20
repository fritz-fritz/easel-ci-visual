document.querySelectorAll("[data-lightbox]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const dialog = document.getElementById("lightbox");
    const img = dialog.querySelector("img");
    img.src = link.href;
    img.alt = link.dataset.caption || "";
    dialog.showModal();
  });
});
