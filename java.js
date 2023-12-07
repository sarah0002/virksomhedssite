let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 3;

loadMoreBtn.onclick = () => {
  console.log("Button clicked"); // Tjek om denne besked vises i konsollen

  let boxes = [
    ...document.querySelectorAll(".container_team .box-container .box"),
  ];

  for (let i = currentItem; i < currentItem + 3 && i < boxes.length; i++) {
    boxes[i].style.display = "inline-block";
  }

  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
};
