const Paint = function(litres) {
    this.litres = litres;
    this.full = true;
};

Paint.prototype.emptyPaint = function() {
    this.full = false
};



module.exports = Paint;