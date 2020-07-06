let log = console.log;
AOS.init({
  duration: 1200,
  disable: "mobile",
});
let daniel = document.getElementById("daniel");
let developer = document.getElementById("developer");
let title = document.getElementsByClassName("title")[1];
let arrow = document.getElementById("arrow");

setTimeout(function () {
  daniel.style.border = "none";
  developer.innerHTML = "I'm a fullstack developer";
  developer.classList.add("title");
  developer.classList.add("bordered");
  developer.style.width = "25ch";
  developer.style.animation = "type 1.5s steps(25)";
}, 1700);

setTimeout(function () {
  setInterval(function () {
    if (developer.classList.contains("bordered")) {
      developer.classList.remove("bordered");
    } else {
      developer.classList.add("bordered");
    }
  }, 600);
}, 3400);

let sites = document.querySelectorAll(".site");

sites.forEach(function (e) {
  e.addEventListener("mouseover", function () {
    e.getElementsByClassName("hidden")[0].classList.add("description");
    e.getElementsByClassName("hidden")[0].classList.remove("hidden");
  });
  e.addEventListener("mouseout", function () {
    e.getElementsByClassName("description")[0].classList.add("hidden");
    e.getElementsByClassName("description")[0].classList.remove("description");
  });
});
