// Pause rotation on hover
const container = document.getElementById("carouselContainer");

container.addEventListener("mouseenter", () => {
  container.classList.add("paused");
});

container.addEventListener("mouseleave", () => {
  container.classList.remove("paused");
});

// Handle fast hover and tooltips
document.querySelectorAll(".camera__card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("fast-hover");
    card.classList.add("show-tooltip");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("fast-hover");
    card.classList.remove("show-tooltip");
  });

  // Open A link on click
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");
    if (link) window.open(link, "_blank");
  });
});
