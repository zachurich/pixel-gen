import Pixel from "./Pixel";
import helpers from "../helpers";
import { colors } from "../resources/colors";

export default class Canvas {
  constructor(c, canvas) {
    this.context = c;
    this.frameId = undefined;
    this.canvas = canvas;
    this.bgColor = "#282828";
    this.colors = colors;
    this.palette = [];
    this.ppf = helpers.range(0, 10); // pixel per frame
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.iterator = 0;
    this.colorIndex = 0;
    this.reverse = false;
    this.clear = false;
  }

  init(c) {
    this.palette = this.pickRandomPalette(this.colors);
    this.setInitialColors(c);
    this.animate(c);
  }

  pickRandomPalette(colors) {
    return helpers.randIndex(colors);
  }

  setInitialColors(c) {
    c.strokeStyle = this.palette[this.palette.length - 1];
    c.fillStyle = "transparent";
    c.fillRect(0, 0, this.width, this.height);
  }

  clearCanvas(c) {
    // set clear flag to 'true' to restart 'generator' loop
    this.clear = true;
    window.cancelAnimationFrame(this.frameId);
    this.iterator = 0;
    c.clearRect(0, 0, this.width, this.height);
    this.setInitialColors(c);
  }

  stopCanvas(c) {
    window.cancelAnimationFrame(this.frameId);
  }

  animate(c) {
    let self = () => this.animate(c);
    this.frameId = requestAnimationFrame(self);
    // pixel per frame
    this.ppf.forEach(() => {
      let object = this.draw(c);
    });
  }

  draw(ctx) {
    let randX = helpers.randNum(0, this.width);
    let randY = helpers.randNum(0, this.height);
    let pixel;
    let object;
    let coords = {
      x: helpers.roundToNearest(randX, 10),
      y: helpers.roundToNearest(randY, 10)
    };
    pixel = new Pixel(
      coords,
      this.palette[Math.floor(Math.random() * this.palette.length)]
    );
    object = pixel.init(ctx);
    return object;
  }
}
