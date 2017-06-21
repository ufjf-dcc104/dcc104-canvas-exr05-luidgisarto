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
  this.tiros = [];
}

Sprite.prototype.desenhar = function (ctx, img) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.w, this.h);
  ctx.strokeRect(this.x, this.y, this.w, this.h);
};

Sprite.prototype.mover = function (dt) {
  //this.vx = this.ax * dt;
 // this.vy = this.ay * dt;
  this.x += this.vx * dt;
  this.y += this.vy * dt;
  this.cooldown -= dt;
}

Sprite.prototype.atirar = function (ctx, dt) {
  if(this.cooldown>0) return;
  this.cooldown = 0.2;
  var tiro = new Sprite();
  tiro.x = this.x;
  tiro.y = this.y;
  switch (this.dir) {
    case 1:
      tiro.vx = -400;
      tiro.vy = 0;
      break;
    case 3:
      tiro.vx = 400;
      tiro.vy = 0;
      break;
    default:

  }
  tiro.w = 15;
  tiro.h = 15;
  tiro.color = "orange";
  tiro.imgkey = "tiro";
  this.tiros.push(tiro);
  // alvo.cooldown = 0.2;
}
