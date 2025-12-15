// careouel1
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carouselCard");
  if (!carousel) return;

  const prevBtn = document.getElementById("carouselCardPrev");
  const nextBtn = document.getElementById("carouselCardNext");
  const dotsContainer = document.getElementById("carouselCardDots");

  const cards = carousel.querySelectorAll(".card");
  let currentIndex = 0;

  // Create dots
  cards.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("span");

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    carousel.scrollTo({
      left: carousel.offsetWidth * currentIndex,
      behavior: "smooth",
    });
    updateDots();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % cards.length;
    goToSlide(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    goToSlide(currentIndex);
  }

  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  // Init
  goToSlide(0);

  // setInterval(showNext, 4000);
});


