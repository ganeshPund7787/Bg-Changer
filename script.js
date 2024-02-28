const Start = document.querySelector("#Start");
const stop = document.querySelector("#stop");

const startShow = function () {
  let c1 = Math.random() * 255 + 10;
  let c2 = Math.random() * 255 + 10;
  let c3 = Math.random() * 255 + 10;
  document.querySelector("body").style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
  Start.style.backgroundColor = `rgb(${c1 + c1}, ${c2 + c1}, ${c3})`;
  document.querySelector("h1").style.color = `rgb(${c1 + c1}, ${c2 + c1}, ${c3})`;
}

let setTime;
Start.addEventListener("click", () => {
  if (!setTime) {
    stop.style.backgroundColor = "White";
    setTime = setInterval(startShow, 1000);
  }
});

stop.addEventListener("click", () => {
  stop.style.backgroundColor = "red";
  clearInterval(setTime);
  setTime = null;
});

