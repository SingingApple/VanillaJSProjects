const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();
  const h = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  const html =
    "<span>" +
    h +
    "</span>: " +
    "<span>" +
    min +
    "</span>: " +
    "<span>" +
    sec +
    "</span>";
  clock.innerHTML = html;
};
setInterval(tick, 1000);
