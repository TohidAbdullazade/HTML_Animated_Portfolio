// ===> DATA AOS START SCRIPT <===
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,
  });
});




// ===> FALLING STARS ANIMATION <===
const fallingStart = () => {
  const span = document.createElement("span");
  span.setAttribute("class", "stars");
  document.body.appendChild(span);
  span.style.left = Math.random() * +innerWidth + "px";

  setTimeout(() => {
    document.body.removeChild(span);
  }, 10000);
};
setInterval(() => {
  fallingStart();
}, 50);

window.addEventListener("DOMContentLoaded", () => {
  let div = document.createElement("div");
  div.style.width = "300px";
  div.style.height = "300px";
  div.style.borderRadius = "50%";
  div.style.background = "gray";
  div.style.position = "absolute";
  div.style.top = "30%";
  div.style.left = "40%";
  div.style.animationDuration = "4s";
  div.style.animationIterationCount = 1;
  div.style.animationName = "grow";
  document.body.appendChild(div);

  setTimeout(() => {
    document.body.removeChild(div);
  }, 1200);
});
