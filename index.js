import Canvas from "./classes/Canvas";

const dpiRatio = window.devicePixelRatio;
const canvas = document.querySelector("canvas");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const s = 1000;

canvas.width = s;
canvas.height = s / 2;
canvas.style.width = `${s / 1.5}px`;
canvas.style.height = `${s / 3}px`;

let c = canvas.getContext("2d");
c.scale(dpiRatio, dpiRatio);

let canvasObj = new Canvas(c, canvas);

start.addEventListener("click", () => {
  canvasObj.clearCanvas(c);
  canvasObj.init(c);
  start.innerText = "restart";
});

stop.addEventListener("click", () => {
  canvasObj.stopCanvas(c);
});
