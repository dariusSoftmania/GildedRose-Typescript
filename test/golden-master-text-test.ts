import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

let items: Array<Item> = [];
items.push(new Item("cheese", 5, 35));
items.push(new Item("ham", 1, 40));
items.push(new Item("Aged Brie", 3, 40));
items.push(new Item("Sulfuras, Hand of Ragnaros", 7, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 12, 2));
items.push(new Item("Conjured Mana Cake", 6, 25));
items.push(new Item("Date passed", 4, 20));
items.push(new Item("Never negative", 2, 1));

const glidedRose = new GildedRose(items);

describe("Golden Master Test", function () {

    describe("after 1 day", function () {
        before(() => {
            glidedRose.updateQuality();
        })
        

        it('check "cheese"', function () {
            expect(glidedRose.items[0].name).to.equal("cheese");
            expect(glidedRose.items[0].sellIn).to.equal(4);
            expect(glidedRose.items[0].quality).to.equal(34);
        });

        it('check "ham"', function () {
            expect(glidedRose.items[1].name).to.equal("ham");
            expect(glidedRose.items[1].sellIn).to.equal(0);
            expect(glidedRose.items[1].quality).to.equal(39);
        });

        it('check "Aged Brie"', function () {
            expect(glidedRose.items[2].name).to.equal("Aged Brie");
            expect(glidedRose.items[2].sellIn).to.equal(2);
            expect(glidedRose.items[2].quality).to.equal(41);
        });

        it('check "Sulfuras, Hand of Ragnaros"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras, Hand of Ragnaros");
            expect(glidedRose.items[3].sellIn).to.equal(7);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes to a TAFKAL80ETC concert"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
            expect(glidedRose.items[4].sellIn).to.equal(11);
            expect(glidedRose.items[4].quality).to.equal(3);
        });

        it('check "Conjured Mana Cake"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured Mana Cake");
            expect(glidedRose.items[5].sellIn).to.equal(5);
            expect(glidedRose.items[5].quality).to.equal(23);
        });

        it('check "Date passed"', function () {
            expect(glidedRose.items[6].name).to.equal("Date passed");
            expect(glidedRose.items[6].sellIn).to.equal(3);
            expect(glidedRose.items[6].quality).to.equal(19);
        });

        it('check "Never negative"', function () {
            expect(glidedRose.items[7].name).to.equal("Never negative");
            expect(glidedRose.items[7].sellIn).to.equal(1);
            expect(glidedRose.items[7].quality).to.equal(0);
        });
    });

    describe("after 2 days", function () {
        before(() => {
            glidedRose.updateQuality();
        })
        

        it('check "cheese"', function () {
            expect(glidedRose.items[0].name).to.equal("cheese");
            expect(glidedRose.items[0].sellIn).to.equal(3);
            expect(glidedRose.items[0].quality).to.equal(33);
        });

        it('check "ham"', function () {
            expect(glidedRose.items[1].name).to.equal("ham");
            expect(glidedRose.items[1].sellIn).to.equal(-1);
            expect(glidedRose.items[1].quality).to.equal(37);
        });

        it('check "Aged Brie"', function () {
            expect(glidedRose.items[2].name).to.equal("Aged Brie");
            expect(glidedRose.items[2].sellIn).to.equal(1);
            expect(glidedRose.items[2].quality).to.equal(42);
        });

        it('check "Sulfuras, Hand of Ragnaros"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras, Hand of Ragnaros");
            expect(glidedRose.items[3].sellIn).to.equal(7);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes to a TAFKAL80ETC concert"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
            expect(glidedRose.items[4].sellIn).to.equal(10);
            expect(glidedRose.items[4].quality).to.equal(4);
        });

        it('check "Conjured Mana Cake"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured Mana Cake");
            expect(glidedRose.items[5].sellIn).to.equal(4);
            expect(glidedRose.items[5].quality).to.equal(21);
        });

        it('check "Date passed"', function () {
            expect(glidedRose.items[6].name).to.equal("Date passed");
            expect(glidedRose.items[6].sellIn).to.equal(2);
            expect(glidedRose.items[6].quality).to.equal(18);
        });

        it('check "Never negative"', function () {
            expect(glidedRose.items[7].name).to.equal("Never negative");
            expect(glidedRose.items[7].sellIn).to.equal(0);
            expect(glidedRose.items[7].quality).to.equal(0);
        });
    });

    describe("after 3 days", function () {
        before(() => {
            glidedRose.updateQuality();
        })
        

        it('check "cheese"', function () {
            expect(glidedRose.items[0].name).to.equal("cheese");
            expect(glidedRose.items[0].sellIn).to.equal(2);
            expect(glidedRose.items[0].quality).to.equal(32);
        });

        it('check "ham"', function () {
            expect(glidedRose.items[1].name).to.equal("ham");
            expect(glidedRose.items[1].sellIn).to.equal(-2);
            expect(glidedRose.items[1].quality).to.equal(35);
        });

        it('check "Aged Brie"', function () {
            expect(glidedRose.items[2].name).to.equal("Aged Brie");
            expect(glidedRose.items[2].sellIn).to.equal(0);
            expect(glidedRose.items[2].quality).to.equal(43);
        });

        it('check "Sulfuras, Hand of Ragnaros"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras, Hand of Ragnaros");
            expect(glidedRose.items[3].sellIn).to.equal(7);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes to a TAFKAL80ETC concert"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
            expect(glidedRose.items[4].sellIn).to.equal(9);
            expect(glidedRose.items[4].quality).to.equal(6);
        });

        it('check "Conjured Mana Cake"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured Mana Cake");
            expect(glidedRose.items[5].sellIn).to.equal(3);
            expect(glidedRose.items[5].quality).to.equal(19);
        });

        it('check "Date passed"', function () {
            expect(glidedRose.items[6].name).to.equal("Date passed");
            expect(glidedRose.items[6].sellIn).to.equal(1);
            expect(glidedRose.items[6].quality).to.equal(17);
        });

        it('check "Never negative"', function () {
            expect(glidedRose.items[7].name).to.equal("Never negative");
            expect(glidedRose.items[7].sellIn).to.equal(-1);
            expect(glidedRose.items[7].quality).to.equal(0);
        });
    });

    describe("after 4 days", function () {
        before(() => {
            glidedRose.updateQuality();
        })
        

        it('check "cheese"', function () {
            expect(glidedRose.items[0].name).to.equal("cheese");
            expect(glidedRose.items[0].sellIn).to.equal(1);
            expect(glidedRose.items[0].quality).to.equal(31);
        });

        it('check "ham"', function () {
            expect(glidedRose.items[1].name).to.equal("ham");
            expect(glidedRose.items[1].sellIn).to.equal(-3);
            expect(glidedRose.items[1].quality).to.equal(33);
        });

        it('check "Aged Brie"', function () {
            expect(glidedRose.items[2].name).to.equal("Aged Brie");
            expect(glidedRose.items[2].sellIn).to.equal(-1);
            expect(glidedRose.items[2].quality).to.equal(45);
        });

        it('check "Sulfuras, Hand of Ragnaros"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras, Hand of Ragnaros");
            expect(glidedRose.items[3].sellIn).to.equal(7);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes to a TAFKAL80ETC concert"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
            expect(glidedRose.items[4].sellIn).to.equal(8);
            expect(glidedRose.items[4].quality).to.equal(8);
        });

        it('check "Conjured Mana Cake"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured Mana Cake");
            expect(glidedRose.items[5].sellIn).to.equal(2);
            expect(glidedRose.items[5].quality).to.equal(17);
        });

        it('check "Date passed"', function () {
            expect(glidedRose.items[6].name).to.equal("Date passed");
            expect(glidedRose.items[6].sellIn).to.equal(0);
            expect(glidedRose.items[6].quality).to.equal(16);
        });
    });

    describe("after 5 days", function () {
        before(() => {
            glidedRose.updateQuality();
        })
        

        it('check "cheese"', function () {
            expect(glidedRose.items[0].name).to.equal("cheese");
            expect(glidedRose.items[0].sellIn).to.equal(0);
            expect(glidedRose.items[0].quality).to.equal(30);
        });

        it('check "Aged Brie"', function () {
            expect(glidedRose.items[2].name).to.equal("Aged Brie");
            expect(glidedRose.items[2].sellIn).to.equal(-2);
            expect(glidedRose.items[2].quality).to.equal(47);
        });

        it('check "Sulfuras, Hand of Ragnaros"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras, Hand of Ragnaros");
            expect(glidedRose.items[3].sellIn).to.equal(7);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes to a TAFKAL80ETC concert"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
            expect(glidedRose.items[4].sellIn).to.equal(7);
            expect(glidedRose.items[4].quality).to.equal(10);
        });

        it('check "Conjured Mana Cake"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured Mana Cake");
            expect(glidedRose.items[5].sellIn).to.equal(1);
            expect(glidedRose.items[5].quality).to.equal(15);
        });

        it('check "Date passed"', function () {
            expect(glidedRose.items[6].name).to.equal("Date passed");
            expect(glidedRose.items[6].sellIn).to.equal(-1);
            expect(glidedRose.items[6].quality).to.equal(14);
        });
    });

    describe("after 6 days", function () {
        before(() => {
            glidedRose.updateQuality();
        })
        

        it('check "cheese"', function () {
            expect(glidedRose.items[0].name).to.equal("cheese");
            expect(glidedRose.items[0].sellIn).to.equal(-1);
            expect(glidedRose.items[0].quality).to.equal(28);
        });

        it('check "Aged Brie"', function () {
            expect(glidedRose.items[2].name).to.equal("Aged Brie");
            expect(glidedRose.items[2].sellIn).to.equal(-3);
            expect(glidedRose.items[2].quality).to.equal(49);
        });

        it('check "Sulfuras, Hand of Ragnaros"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras, Hand of Ragnaros");
            expect(glidedRose.items[3].sellIn).to.equal(7);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes to a TAFKAL80ETC concert"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
            expect(glidedRose.items[4].sellIn).to.equal(6);
            expect(glidedRose.items[4].quality).to.equal(12);
        });

        it('check "Conjured Mana Cake"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured Mana Cake");
            expect(glidedRose.items[5].sellIn).to.equal(0);
            expect(glidedRose.items[5].quality).to.equal(11);
        });

        it('check "Date passed"', function () {
            expect(glidedRose.items[6].name).to.equal("Date passed");
            expect(glidedRose.items[6].sellIn).to.equal(-2);
            expect(glidedRose.items[6].quality).to.equal(12);
        });
    });

    describe("after 7 days", function () {
        before(() => {
            glidedRose.updateQuality();
        })
        

        it('check "cheese"', function () {
            expect(glidedRose.items[0].name).to.equal("cheese");
            expect(glidedRose.items[0].sellIn).to.equal(-2);
            expect(glidedRose.items[0].quality).to.equal(26);
        });

        it('check "Aged Brie"', function () {
            expect(glidedRose.items[2].name).to.equal("Aged Brie");
            expect(glidedRose.items[2].sellIn).to.equal(-4);
            expect(glidedRose.items[2].quality).to.equal(50);
        });

        it('check "Sulfuras, Hand of Ragnaros"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras, Hand of Ragnaros");
            expect(glidedRose.items[3].sellIn).to.equal(7);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes to a TAFKAL80ETC concert"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
            expect(glidedRose.items[4].sellIn).to.equal(5);
            expect(glidedRose.items[4].quality).to.equal(14);
        });

        it('check "Conjured Mana Cake"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured Mana Cake");
            expect(glidedRose.items[5].sellIn).to.equal(-1);
            expect(glidedRose.items[5].quality).to.equal(7);
        });
    });

    describe("after 8 days", function () {
        before(() => {
            glidedRose.updateQuality();
        })
        

        it('check "Aged Brie"', function () {
            expect(glidedRose.items[2].name).to.equal("Aged Brie");
            expect(glidedRose.items[2].sellIn).to.equal(-5);
            expect(glidedRose.items[2].quality).to.equal(50);
        });

        it('check "Sulfuras, Hand of Ragnaros"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras, Hand of Ragnaros");
            expect(glidedRose.items[3].sellIn).to.equal(7);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes to a TAFKAL80ETC concert"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
            expect(glidedRose.items[4].sellIn).to.equal(4);
            expect(glidedRose.items[4].quality).to.equal(17);
        });

        it('check "Conjured Mana Cake"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured Mana Cake");
            expect(glidedRose.items[5].sellIn).to.equal(-2);
            expect(glidedRose.items[5].quality).to.equal(3);
        });
    });

    describe("after 9 days", function () {
        before(() => {
            glidedRose.updateQuality();
        })
        

        it('check "Sulfuras, Hand of Ragnaros"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras, Hand of Ragnaros");
            expect(glidedRose.items[3].sellIn).to.equal(7);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes to a TAFKAL80ETC concert"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
            expect(glidedRose.items[4].sellIn).to.equal(3);
            expect(glidedRose.items[4].quality).to.equal(20);
        });

        it('check "Conjured Mana Cake"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured Mana Cake");
            expect(glidedRose.items[5].sellIn).to.equal(-3);
            expect(glidedRose.items[5].quality).to.equal(0);
        });
    });

    describe("after 10 days", function () {
        before(() => {
            glidedRose.updateQuality();
        })
        

        it('check "Backstage passes to a TAFKAL80ETC concert"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
            expect(glidedRose.items[4].sellIn).to.equal(2);
            expect(glidedRose.items[4].quality).to.equal(23);
        });
    });

    describe("after 11 days", function () {
        before(() => {
            glidedRose.updateQuality();
        })
        

        it('check "Backstage passes to a TAFKAL80ETC concert"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
            expect(glidedRose.items[4].sellIn).to.equal(1);
            expect(glidedRose.items[4].quality).to.equal(26);
        });
    });

    describe("after 12 days", function () {
        before(() => {
            glidedRose.updateQuality();
        })
        

        it('check "Backstage passes to a TAFKAL80ETC concert"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
            expect(glidedRose.items[4].sellIn).to.equal(0);
            expect(glidedRose.items[4].quality).to.equal(29);
        });
    });

    describe("after 13 days", function () {
        before(() => {
            glidedRose.updateQuality();
        })
        

        it('check "Backstage passes to a TAFKAL80ETC concert"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
            expect(glidedRose.items[4].sellIn).to.equal(-1);
            expect(glidedRose.items[4].quality).to.equal(0);
        });
    });

    describe("after 14 days", function () {
        before(() => {
            glidedRose.updateQuality();
        })
        

        it('check "Backstage passes to a TAFKAL80ETC concert"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
            expect(glidedRose.items[4].sellIn).to.equal(-2);
            expect(glidedRose.items[4].quality).to.equal(0);
        });
    });
});