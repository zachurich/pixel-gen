export default class Pixel {
  constructor(
    coords = { x: 1, y: 1 },
    color = "#000000",
    size = { w: 10, h: 10 }
  ) {
    this.x = coords.x;
    this.y = coords.y;
    this.w = size.w;
    this.h = size.h;
    this.opacity = 0;
    this.color = color;
  }
  init(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.fillStyle = this.color;
    ctx.fill();
    return {
      x: this.x,
      y: this.y,
      w: this.w,
      h: this.h
    };
  }
}
