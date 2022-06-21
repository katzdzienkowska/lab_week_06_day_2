const assert = require ("assert");
const Decorator = require("../decorator.js");
const Paint = require("../paint.js");

describe("Decorator", function () {

    let decorator;

    beforeEach (function () {
        decorator = new Decorator();
        paint1 = new Paint(5);
    });

    it("should start with an empty paint stock", function () {
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });

    it("should be able to add a can of paint to stock", function () {
        decorator.addPaint(paint1);
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [paint1])
    })

    it("should be able to calculate total litres of paint in stock", function () {
        decorator.addPaint(paint1);
        const actual = decorator.checkStock();
        assert.strictEqual(actual, 5);
    })

    it("should be able to check if there is enough paint to complete a room", function () {
        const actual = decorator.checkEnoughPaint(10, 3);
        assert.strictEqual(actual, true)
        
    })

    it("should be able to paint room if has enough paint in stock", function () {
        const actual = decorator.paintRoom(10, 5)
        assert.strictEqual(actual, true)
    })

})