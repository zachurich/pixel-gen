import Canvas from "./classes/Canvas";
import { roundToNearest } from "./helpers";
import download from "downloadjs";

const dpiRatio = window.devicePixelRatio;
const canvas = document.querySelector("#canvas");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

function setCanvasSize() {
  let initial;
  if (window.innerWidth <= 500) {
    initial = 420;
    canvas.height = initial;
    canvas.width = initial / 2;
    canvas.style.height = canvas.height + "px";
    canvas.style.width = canvas.width + "px";
    return 5;
  } else {
    initial = 1000;
    canvas.height = initial / 2;
    canvas.width = initial;
    canvas.style.height = initial / 3 + "px";
    canvas.style.width = initial / 1.5 + "px";
    return 10;
  }
}

function convertToPng() {
  const pngData = canvas.toDataURL("image/png");
  download(pngData, "pixel-gen.png", "data:image/png");
}

const spp = setCanvasSize();

let c = canvas.getContext("2d");
c.scale(dpiRatio, dpiRatio);

let canvasObj = new Canvas(c, canvas, spp);

start.addEventListener("click", () => {
  canvasObj.clearCanvas(c);
  canvasObj.init(c);
  start.innerText = "restart";

  const download = document.querySelector(".download");
  if (download) {
    download.removeEventListener("click", convertToPng);
    stop.classList.remove("download");
    stop.innerText = "stop";
  }
});

stop.addEventListener("click", () => {
  stop.classList.add("download");
  stop.innerText = "download?";
  canvasObj.stopCanvas(c);
  document.querySelector(".download").addEventListener("click", convertToPng);
});
