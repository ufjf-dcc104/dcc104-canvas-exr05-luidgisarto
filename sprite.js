function Sprite(x, y, w, h, cor) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.vx = 0;
  this.ax = 0;
  this.vy = 0;
  this.ay = 0;
  this.pose = 0;
  this.angulo = 0;
  this.color = cor;
  this.tiros = [];
}

Sprite.prototype.desenhar = function (ctx, img) {
  ctx.fillStyle = this.color;
  ctx.drawImage(img, this.x-this.w/2, this.y-this.h/2, this.w, this.h);
  // ctx.drawImage(img, this.x, this.y, this.w, this.h);  
  // ctx.fillRect(this.x, this.y, this.w, this.h);
  // ctx.strokeRect(this.x-this.w/2, this.y-this.h/2, this.w, this.h);

  for (var i = 0; i < this.tiros.length; i++) {
    var tiro = this.tiros[i];
    tiro.desenhar(ctx, tiro.imgkey);

    if(tiro.x > 600){
      this.tiros.splice(tiro, 1);
    }
  }
};

Sprite.prototype.mover = function (dt) {
  //this.vx = this.ax * dt;
 // this.vy = this.ay * dt;
  this.x += this.vx * dt;
  this.y += this.vy * dt;
  this.cooldown -= dt;

  for (var i = 0; i < this.tiros.length; i++) {
    this.tiros[i].mover(dt);
  }
}

Sprite.prototype.atirar = function (il) {
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
  tiro.imgkey = il.images["tiro"];
  this.tiros.push(tiro);
  // alvo.cooldown = 0.2;
}

Sprite.prototype.colidiu = function(alvo){
  if(this.x + this.width/2 < alvo.x-alvo.width/2) return false;
  if(this.x -this.width/2 > alvo.x+alvo.width/2) return false;
  if(this.y + this.height/2 < alvo.y-alvo.height/2) return false;
  if(this.y-this.height/2 > alvo.y+alvo.height/2) return false;
  return true; 
}

Sprite.prototype.atinge = function (alvo){
  for (var i = alvo.tiros.length -1; i >= 0; i--){
    if(this.colidiu(alvo)){
      this.tiros.splice(i, 1);
    }
  }
}
