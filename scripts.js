// menu mobile
const abrirMenu = document.querySelector(".open-menu"),
  menu = document.querySelector(".menu");

function MenuMobile() {
  menu.classList.toggle("mobile-active");
}

abrirMenu.addEventListener("click", MenuMobile);

//dropdown desktop
const dropdownItem = document.querySelectorAll(".dropdown");

dropdownItem.forEach((item) => {
  const dropdownMenu = item.querySelector(".dropdown-item");
  item.addEventListener("mouseenter", () => {
    dropdownMenu.classList.toggle("active");
  });

  item.addEventListener("mouseleave", () => {
    dropdownMenu.classList.toggle("active");
  });

  //dropdown mobile
  // if (window.matchMedia("(max-width: 991px)").matches) {
  //    item.addEventListener("click", () => {
  //      dropdownMenu.classList.toggle("active");
  //    });
  //  }
});
