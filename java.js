function toggleReadMore() {
  var section = document.getElementById("readMoreSection");
  var btn = document.getElementById("readMoreBtn");

  if (section.classList.contains("expand")) {
    // Luk sektionen
    section.classList.remove("expand");
    btn.classList.remove("expand");
  } else {
    // Åbn sektionen
    section.classList.add("expand");
    btn.classList.add("expand");
  }
}
