document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll(".btn-like");

  likeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const liked = btn.classList.toggle("liked");
      const icon = btn.querySelector("i");
      const span = btn.nextElementSibling;
      let likes = parseInt(btn.getAttribute("data-likes"));

      if (liked) {
        icon.classList.remove("bi-heart");
        icon.classList.add("bi-heart-fill");
        likes += 1;
      } else {
        icon.classList.remove("bi-heart-fill");
        icon.classList.add("bi-heart");
        likes -= 1;
      }

      btn.setAttribute("data-likes", likes);
      span.textContent = `${likes} likes`;
    });
  });

  
  const toggleBtn = document.getElementById("toggleViewBtn");
  const photoCards = document.querySelectorAll("#photoGrid > div");
  let isGrid = true;

  toggleBtn.addEventListener("click", () => {
    photoCards.forEach((card) => {
      const title = card.querySelector(".card-title");
      const desc = card.querySelector(".card-text");

      if (isGrid) {
        card.classList.remove("col-md-4");
        card.classList.add("col-12");
        title.classList.remove("d-none");
        desc.classList.remove("d-none");
      } else {
        card.classList.remove("col-12");
        card.classList.add("col-md-4");
        title.classList.add("d-none");
        desc.classList.add("d-none");
      }
    });

    isGrid = !isGrid;
    toggleBtn.innerHTML = isGrid
      ? '<i class="bi bi-grid-3x3-gap"></i> Vista: 3 columnas'
      : '<i class="bi bi-list"></i> Vista: 1 columna';
  });


  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");

  const imgElements = document.querySelectorAll(".img-clickable");
  imgElements.forEach((img) => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modalTitle.textContent = img.dataset.title;
      modalDescription.textContent = img.dataset.description;
    });
  });
});