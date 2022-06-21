const Decorator = function () {
    this.stock = [];
};

Decorator.prototype.addPaint = function (paint) {
    this.stock.push(paint);
};

Decorator.prototype.checkStock = function () {
    let totalStock = 0;
    for (paint of this.stock) {
        totalStock += paint.litres;
    };
    return totalStock;
};

Decorator.prototype.checkEnoughPaint = function (totalStock, room_area) {
    if (totalStock > room_area) {
        return true;
    } else {
        return false;
    }
}

Decorator.prototype.paintRoom = function (totalStock, room_area) {
    if (totalStock > room_area) {
        totalStock -= room_area;
        painted = true;
    }
    return painted
}

module.exports = Decorator;