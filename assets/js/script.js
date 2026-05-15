window.onload = function () {
  AOS.init({
    duration: 800,
    once: true
  });

  loadComponent("components/navbar.html", "navbar");
  loadComponent("components/footer.html", "footer");
};

document.addEventListener("DOMContentLoaded", function () {
  const modalElement = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  if (modalElement && modalImage) {
    const modal = new bootstrap.Modal(modalElement);

    document.querySelectorAll(".gallery-card").forEach(card => {
      card.addEventListener("click", function () {
        const imageSrc = this.dataset.image;
        modalImage.src = imageSrc;
        modal.show();
      });
    });
  }
});
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 40){

        navbar.classList.add("navbar-scrolled");

    }
    else{

        navbar.classList.remove("navbar-scrolled");

    }

});
window.addEventListener("load", function () {
  const loader = document.getElementById("pageLoader");

  if (!loader) {
    return;
  }

  setTimeout(function () {
    loader.classList.add("loader-hide");

    setTimeout(function () {
      loader.remove();
    }, 300);
  }, 250);
});

function loadComponent(path, elementId) {
  fetch(path)
    .then(response => response.text())
    .then(data => {
      const element = document.getElementById(elementId);

      if (element) {
        element.innerHTML = data;
      }
    });
}
