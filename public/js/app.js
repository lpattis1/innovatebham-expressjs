const heading = document.querySelector("h1");

heading.addEventListener("mouseenter", function (e) {
  heading.style.color = "blue";
});

heading.addEventListener("mouseleave", function (e) {
  heading.style.color = "white";
});
