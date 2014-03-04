//var canvas = document.getElementById("canvas"), 
//    context = canvas.getContext("2d");

var Work = function() {
    return this.init();
}

Work.prototype.init = function() {

};

var Canvas = function() {
    this.c = document.getElementById("canvas");
    this.ctx = this.c.getContext("2d");

    return this.init();
};

Canvas.prototype.init = function() {
    
};

Canvas.prototype.circle = function(x, y, r, color) {
    if (color === undefined) {
        color = "rgba(0, 0, 255, 1)";
    }
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fill();
};