// 'use strict';

class Triangles {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  initCanvas() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.translate(this.width / 2, this.height / 2);
  }

  degToRad(degrees) {
    return (degrees * Math.PI) / 180;
  }

  drawTriangles(length, moveOffset) {
    for (let i = 0; i < length; i++) {
      let triangleHeight = (length / 2) * Math.tan(this.degToRad(60));

      this.ctx.fillStyle = `rgba(${255 - length}, 0, ${255 - length}, 0.9)`;
      this.ctx.beginPath();
      this.ctx.moveTo(moveOffset, moveOffset);
      this.ctx.lineTo(moveOffset + length, moveOffset);
      this.ctx.lineTo(moveOffset + length / 2, moveOffset + triangleHeight);
      this.ctx.lineTo(moveOffset, moveOffset);
      this.ctx.fill();

      length--;
      moveOffset += 0.7;
      this.ctx.rotate(this.degToRad(5));
    }
  }

  init() {
    this.initCanvas();
    this.drawTriangles(250, 15);
  }
}

const triangleSpiral = new Triangles(document.querySelector('canvas'));
triangleSpiral.init();
