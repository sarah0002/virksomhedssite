/** @format */

let loadMoreBtn = document.querySelector("#load-more");
if (loadMoreBtn !== null) {
  let currentItem = 4;

  loadMoreBtn.onclick = () => {
    console.log("Button clicked"); // Tjek om denne besked vises i konsollen

    let boxes = [
      ...document.querySelectorAll(".container_team .box-container .box"),
    ];

    for (let i = currentItem; i < currentItem + 4 && i < boxes.length; i++) {
      boxes[i].style.display = "inline-block";
    }

    currentItem += 4;

    if (currentItem >= boxes.length) {
      loadMoreBtn.style.display = "none";
    }
  };
}

function search() {
  var input = document.getElementById("searchInput").value.toLowerCase();
  var menuItems = document.querySelectorAll("#menu li a");

  menuItems.forEach(function (item) {
    if (item.textContent.toLowerCase().includes(input)) {
      setTimeout(function () {
        window.location.href = item.getAttribute("href");
      }, 100);
      return;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-menu a").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
});
