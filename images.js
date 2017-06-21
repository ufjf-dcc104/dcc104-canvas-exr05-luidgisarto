function ImageLoader(){
    this.images = {};
}

ImageLoader.prototype.load = function (key, imgURL) {
  var img = new Image();
  img.src = imgURL;
  this.images[key] = img;
};

ImageLoader.prototype.inicializar = function (){
    this.load("goku", "images/goku.png");
    this.load("vegeta", "images/vegeta.jpg");
    this.load("tiro", "images/tiro.png");
}