/** @format */

let loadMoreBtn = document.querySelector("#load-more");
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

// Søgeflet \\

document.addEventListener("DOMContentLoaded", function () {
  var searchContainer = document.getElementById("searchContainer");
  var searchIcon = document.getElementById("sog_img");

  document.addEventListener("click", function (event) {
    if (
      searchContainer.classList.contains("active") &&
      event.target !== searchIcon &&
      !searchContainer.contains(event.target) &&
      event.target !== document.getElementById("searchInput")
    ) {
      toggleSearch();
    }
  });

  searchIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleSearch();
  });

  // Tilføj event listener til søgeknappen
  document
    .getElementById("searchButton")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Forhindrer standardformularindsendelse
      search();
    });
});

function toggleSearch() {
  var searchContainer = document.getElementById("searchContainer");
  searchContainer.classList.toggle("active");
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

//burgermenu

function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show");
}
