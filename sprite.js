function Sprite(x, y, w, h, cor) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.vx = 0;
  this.ax = 0;
  this.vy = 0;
  this.ay = 0;
  this.angulo = 0;
  this.color = cor;
}

Sprite.prototype.desenhar = function (ctx, img) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.w, this.h);
  ctx.strokeRect(this.x, this.y, this.w, this.h);
};

Sprite.prototype.mover = function (dt){
    this.vx = this.vx*dt;
    this.vy = this.vy*dt;
    this.x = this.x + this.vx * dt;
    this.y = this.y + this.vy * dt;
}