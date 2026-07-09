import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

let items: Array<Item> = [];
items.push(new Item("cheese", 5, 35));
items.push(new Item("ham", 1, 40));
items.push(new Item("Aged Brie", 3, 40));
items.push(new Item("Sulfuras", 7, 80));
items.push(new Item("Backstage passes", 12, 2));
items.push(new Item("Conjured", 6, 25));
items.push(new Item("Date passed", 4, 20));
items.push(new Item("Never negative", 2, 1));

const glidedRose = new GildedRose(items);

describe("Golden Master Test", function () {

    it("after 1 day", function () {
        glidedRose.updateQuality();

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

        it('check "Sulfuras"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras");
            expect(glidedRose.items[3].sellIn).to.equal(6);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes");
            expect(glidedRose.items[4].sellIn).to.equal(11);
            expect(glidedRose.items[4].quality).to.equal(3);
        });

        it('check "Conjured"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured");
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

    it("after 2 days", function () {
        glidedRose.updateQuality();

        it('check "cheese"', function () {
            expect(glidedRose.items[0].name).to.equal("cheese");
            expect(glidedRose.items[0].sellIn).to.equal(3);
            expect(glidedRose.items[0].quality).to.equal(33);
        });

        it('check "ham"', function () {
            expect(glidedRose.items[1].name).to.equal("ham");
            expect(glidedRose.items[1].sellIn).to.equal(-1);
            expect(glidedRose.items[1].quality).to.equal(38);
        });

        it('check "Aged Brie"', function () {
            expect(glidedRose.items[2].name).to.equal("Aged Brie");
            expect(glidedRose.items[2].sellIn).to.equal(1);
            expect(glidedRose.items[2].quality).to.equal(42);
        });

        it('check "Sulfuras"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras");
            expect(glidedRose.items[3].sellIn).to.equal(5);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes");
            expect(glidedRose.items[4].sellIn).to.equal(10);
            expect(glidedRose.items[4].quality).to.equal(4);
        });

        it('check "Conjured"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured");
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

    it("after 3 days", function () {
        glidedRose.updateQuality();

        it('check "cheese"', function () {
            expect(glidedRose.items[0].name).to.equal("cheese");
            expect(glidedRose.items[0].sellIn).to.equal(2);
            expect(glidedRose.items[0].quality).to.equal(32);
        });

        it('check "ham"', function () {
            expect(glidedRose.items[1].name).to.equal("ham");
            expect(glidedRose.items[1].sellIn).to.equal(-2);
            expect(glidedRose.items[1].quality).to.equal(36);
        });

        it('check "Aged Brie"', function () {
            expect(glidedRose.items[2].name).to.equal("Aged Brie");
            expect(glidedRose.items[2].sellIn).to.equal(0);
            expect(glidedRose.items[2].quality).to.equal(43);
        });

        it('check "Sulfuras"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras");
            expect(glidedRose.items[3].sellIn).to.equal(4);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes");
            expect(glidedRose.items[4].sellIn).to.equal(9);
            expect(glidedRose.items[4].quality).to.equal(5);
        });

        it('check "Conjured"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured");
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

    it("after 4 days", function () {
        glidedRose.updateQuality();

        it('check "cheese"', function () {
            expect(glidedRose.items[0].name).to.equal("cheese");
            expect(glidedRose.items[0].sellIn).to.equal(1);
            expect(glidedRose.items[0].quality).to.equal(31);
        });

        it('check "ham"', function () {
            expect(glidedRose.items[1].name).to.equal("ham");
            expect(glidedRose.items[1].sellIn).to.equal(-3);
            expect(glidedRose.items[1].quality).to.equal(34);
        });

        it('check "Aged Brie"', function () {
            expect(glidedRose.items[2].name).to.equal("Aged Brie");
            expect(glidedRose.items[2].sellIn).to.equal(-1);
            expect(glidedRose.items[2].quality).to.equal(44);
        });

        it('check "Sulfuras"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras");
            expect(glidedRose.items[3].sellIn).to.equal(3);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes");
            expect(glidedRose.items[4].sellIn).to.equal(8);
            expect(glidedRose.items[4].quality).to.equal(7);
        });

        it('check "Conjured"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured");
            expect(glidedRose.items[5].sellIn).to.equal(2);
            expect(glidedRose.items[5].quality).to.equal(17);
        });

        it('check "Date passed"', function () {
            expect(glidedRose.items[6].name).to.equal("Date passed");
            expect(glidedRose.items[6].sellIn).to.equal(0);
            expect(glidedRose.items[6].quality).to.equal(16);
        });
    });

    it("after 5 days", function () {
        glidedRose.updateQuality();

        it('check "cheese"', function () {
            expect(glidedRose.items[0].name).to.equal("cheese");
            expect(glidedRose.items[0].sellIn).to.equal(0);
            expect(glidedRose.items[0].quality).to.equal(30);
        });

        it('check "Aged Brie"', function () {
            expect(glidedRose.items[2].name).to.equal("Aged Brie");
            expect(glidedRose.items[2].sellIn).to.equal(-2);
            expect(glidedRose.items[2].quality).to.equal(46);
        });

        it('check "Sulfuras"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras");
            expect(glidedRose.items[3].sellIn).to.equal(2);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes");
            expect(glidedRose.items[4].sellIn).to.equal(7);
            expect(glidedRose.items[4].quality).to.equal(9);
        });

        it('check "Conjured"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured");
            expect(glidedRose.items[5].sellIn).to.equal(1);
            expect(glidedRose.items[5].quality).to.equal(19);
        });

        it('check "Date passed"', function () {
            expect(glidedRose.items[6].name).to.equal("Date passed");
            expect(glidedRose.items[6].sellIn).to.equal(-1);
            expect(glidedRose.items[6].quality).to.equal(15);
        });
    });

    it("after 6 days", function () {
        glidedRose.updateQuality();

        it('check "cheese"', function () {
            expect(glidedRose.items[0].name).to.equal("cheese");
            expect(glidedRose.items[0].sellIn).to.equal(-1);
            expect(glidedRose.items[0].quality).to.equal(29);
        });

        it('check "Aged Brie"', function () {
            expect(glidedRose.items[2].name).to.equal("Aged Brie");
            expect(glidedRose.items[2].sellIn).to.equal(-3);
            expect(glidedRose.items[2].quality).to.equal(48);
        });

        it('check "Sulfuras"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras");
            expect(glidedRose.items[3].sellIn).to.equal(1);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes");
            expect(glidedRose.items[4].sellIn).to.equal(6);
            expect(glidedRose.items[4].quality).to.equal(11);
        });

        it('check "Conjured"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured");
            expect(glidedRose.items[5].sellIn).to.equal(0);
            expect(glidedRose.items[5].quality).to.equal(17);
        });

        it('check "Date passed"', function () {
            expect(glidedRose.items[6].name).to.equal("Date passed");
            expect(glidedRose.items[6].sellIn).to.equal(-2);
            expect(glidedRose.items[6].quality).to.equal(13);
        });
    });

    it("after 7 days", function () {
        glidedRose.updateQuality();

        it('check "cheese"', function () {
            expect(glidedRose.items[0].name).to.equal("cheese");
            expect(glidedRose.items[0].sellIn).to.equal(-2);
            expect(glidedRose.items[0].quality).to.equal(27);
        });

        it('check "Aged Brie"', function () {
            expect(glidedRose.items[2].name).to.equal("Aged Brie");
            expect(glidedRose.items[2].sellIn).to.equal(-4);
            expect(glidedRose.items[2].quality).to.equal(50);
        });

        it('check "Sulfuras"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras");
            expect(glidedRose.items[3].sellIn).to.equal(0);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes");
            expect(glidedRose.items[4].sellIn).to.equal(5);
            expect(glidedRose.items[4].quality).to.equal(13);
        });

        it('check "Conjured"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured");
            expect(glidedRose.items[5].sellIn).to.equal(-1);
            expect(glidedRose.items[5].quality).to.equal(15);
        });
    });

    it("after 8 days", function () {
        glidedRose.updateQuality();

        it('check "Aged Brie"', function () {
            expect(glidedRose.items[2].name).to.equal("Aged Brie");
            expect(glidedRose.items[2].sellIn).to.equal(-5);
            expect(glidedRose.items[2].quality).to.equal(50);
        });

        it('check "Sulfuras"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras");
            expect(glidedRose.items[3].sellIn).to.equal(-1);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes");
            expect(glidedRose.items[4].sellIn).to.equal(4);
            expect(glidedRose.items[4].quality).to.equal(15);
        });

        it('check "Conjured"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured");
            expect(glidedRose.items[5].sellIn).to.equal(-2);
            expect(glidedRose.items[5].quality).to.equal(11);
        });
    });

    it("after 9 days", function () {
        glidedRose.updateQuality();

        it('check "Sulfuras"', function () {
            expect(glidedRose.items[3].name).to.equal("Sulfuras");
            expect(glidedRose.items[3].sellIn).to.equal(-2);
            expect(glidedRose.items[3].quality).to.equal(80);
        });

        it('check "Backstage passes"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes");
            expect(glidedRose.items[4].sellIn).to.equal(3);
            expect(glidedRose.items[4].quality).to.equal(18);
        });

        it('check "Conjured"', function () {
            expect(glidedRose.items[5].name).to.equal("Conjured");
            expect(glidedRose.items[5].sellIn).to.equal(-3);
            expect(glidedRose.items[5].quality).to.equal(7);
        });
    });

    it("after 10 days", function () {
        glidedRose.updateQuality();

        it('check "Backstage passes"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes");
            expect(glidedRose.items[4].sellIn).to.equal(2);
            expect(glidedRose.items[4].quality).to.equal(21);
        });
    });

    it("after 11 days", function () {
        glidedRose.updateQuality();

        it('check "Backstage passes"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes");
            expect(glidedRose.items[4].sellIn).to.equal(1);
            expect(glidedRose.items[4].quality).to.equal(24);
        });
    });

    it("after 12 days", function () {
        glidedRose.updateQuality();

        it('check "Backstage passes"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes");
            expect(glidedRose.items[4].sellIn).to.equal(0);
            expect(glidedRose.items[4].quality).to.equal(27);
        });
    });

    it("after 13 days", function () {
        glidedRose.updateQuality();

        it('check "Backstage passes"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes");
            expect(glidedRose.items[4].sellIn).to.equal(-1);
            expect(glidedRose.items[4].quality).to.equal(30);
        });
    });

    it("after 14 days", function () {
        glidedRose.updateQuality();

        it('check "Backstage passes"', function () {
            expect(glidedRose.items[4].name).to.equal("Backstage passes");
            expect(glidedRose.items[4].sellIn).to.equal(-2);
            expect(glidedRose.items[4].quality).to.equal(0);
        });
    });
});