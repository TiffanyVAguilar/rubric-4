var hello = document.querySelector("#hello");
var clickMe = document.querySelector("#click-me");
var hoverMe = document.querySelector("#hover-me");
var container = document.querySelector("#container");

window.addEventListener("load", () => {
  hello.innerHTML = "Hello!";
  clickMe.setAttribute("style", "display:inherit;");
  hoverMe.setAttribute("style", "display:inherit;");
});

clickMe.addEventListener("click", () => {
  document.body.classList.toggle("orange");
});

hoverMe.addEventListener("mouseenter", () => {
  container.classList.toggle("red");
});

hoverMe.addEventListener("mouseleave", () => {
  container.classList.toggle("red");
});
