abstract class Coffee {
    public description: string;

    public getDescription(): string {
        return this.description;
    };

    public abstract cost(): number;
}

abstract class CoffeeDecorator extends Coffee {
    decoratedCoffe: Coffee;
    public abstract getDescription(): string;
}

// ---- Beverages ----

class Arabica extends Coffee {
    public description = "Arabica";

    public cost(): number {
        return 1.5;
    }
}

class Robusta extends Coffee {
    public description = "Robusta";

    public cost(): number {
        return 0.99;
    }
}

class Expresso extends Coffee {
    public description = "Expresso";

    public cost(): number {
        return 2.2;
    }
}

// ---- Condiments ----
class Sugar extends CoffeeDecorator {
    constructor(beverage: Coffee) {
        super();
        this.decoratedCoffe = beverage;
    }

    public getDescription(): string {
        return this.decoratedCoffe.getDescription() + ', Sugar';
    }

    public cost(): number {
        return this.decoratedCoffe.cost() + 0.20;
    }
}

class Milk extends CoffeeDecorator {
    constructor(beverage: Coffee) {
        super();

        this.decoratedCoffe = beverage;
    }

    public getDescription(): string {
        return this.decoratedCoffe.getDescription() + ', Milk';
    }

    public cost(): number {
        return this.decoratedCoffe.cost() + 0.22;
    }
}

let orderExpresso = new Expresso();
orderExpresso = new Sugar(orderExpresso);
orderExpresso = new Milk(orderExpresso);

console.log('===Order Expresso===');
console.log("Cost: " + orderExpresso.cost());
console.log("Description: " + orderExpresso.getDescription());
console.log('');

let orderArabicaWithMilkNoSugar = new Arabica();
orderArabicaWithMilkNoSugar = new Milk(orderArabicaWithMilkNoSugar);

console.log('===Order Arabica With Milk No Sugar===');
console.log("Cost: " + orderArabicaWithMilkNoSugar.cost());
console.log("Description: " + orderArabicaWithMilkNoSugar.getDescription());
console.log('');

let orderRobustaWithSugar = new Robusta();
orderRobustaWithSugar = new Sugar(orderRobustaWithSugar);

console.log('===Order Robusta With Sugar===');
console.log("Cost: " + orderRobustaWithSugar.cost());
console.log("Description: " + orderRobustaWithSugar.getDescription());
console.log('');




