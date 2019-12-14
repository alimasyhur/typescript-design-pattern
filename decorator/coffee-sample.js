var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Coffee = /** @class */ (function () {
    function Coffee() {
    }
    Coffee.prototype.getDescription = function () {
        return this.description;
    };
    ;
    return Coffee;
}());
var CoffeeDecorator = /** @class */ (function (_super) {
    __extends(CoffeeDecorator, _super);
    function CoffeeDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CoffeeDecorator;
}(Coffee));
// ---- Beverages ----
var Arabica = /** @class */ (function (_super) {
    __extends(Arabica, _super);
    function Arabica() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Arabica";
        return _this;
    }
    Arabica.prototype.cost = function () {
        return 1.5;
    };
    return Arabica;
}(Coffee));
var Robusta = /** @class */ (function (_super) {
    __extends(Robusta, _super);
    function Robusta() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Robusta";
        return _this;
    }
    Robusta.prototype.cost = function () {
        return 0.99;
    };
    return Robusta;
}(Coffee));
var Expresso = /** @class */ (function (_super) {
    __extends(Expresso, _super);
    function Expresso() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Expresso";
        return _this;
    }
    Expresso.prototype.cost = function () {
        return 2.2;
    };
    return Expresso;
}(Coffee));
// ---- Condiments ----
var Sugar = /** @class */ (function (_super) {
    __extends(Sugar, _super);
    function Sugar(beverage) {
        var _this = _super.call(this) || this;
        _this.decoratedCoffe = beverage;
        return _this;
    }
    Sugar.prototype.getDescription = function () {
        return this.decoratedCoffe.getDescription() + ', Sugar';
    };
    Sugar.prototype.cost = function () {
        return this.decoratedCoffe.cost() + 0.20;
    };
    return Sugar;
}(CoffeeDecorator));
var Milk = /** @class */ (function (_super) {
    __extends(Milk, _super);
    function Milk(beverage) {
        var _this = _super.call(this) || this;
        _this.decoratedCoffe = beverage;
        return _this;
    }
    Milk.prototype.getDescription = function () {
        return this.decoratedCoffe.getDescription() + ', Milk';
    };
    Milk.prototype.cost = function () {
        return this.decoratedCoffe.cost() + 0.22;
    };
    return Milk;
}(CoffeeDecorator));
var orderExpresso = new Expresso();
orderExpresso = new Sugar(orderExpresso);
orderExpresso = new Milk(orderExpresso);
console.log('===Order Expresso===');
console.log("Cost: " + orderExpresso.cost());
console.log("Description: " + orderExpresso.getDescription());
console.log('');
var orderArabicaWithMilkNoSugar = new Arabica();
orderArabicaWithMilkNoSugar = new Milk(orderArabicaWithMilkNoSugar);
console.log('===Order Arabica With Milk No Sugar===');
console.log("Cost: " + orderArabicaWithMilkNoSugar.cost());
console.log("Description: " + orderArabicaWithMilkNoSugar.getDescription());
console.log('');
var orderRobustaWithSugar = new Robusta();
orderRobustaWithSugar = new Sugar(orderRobustaWithSugar);
console.log('===Order Robusta With Sugar===');
console.log("Cost: " + orderRobustaWithSugar.cost());
console.log("Description: " + orderRobustaWithSugar.getDescription());
console.log('');
