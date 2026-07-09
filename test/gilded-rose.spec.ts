import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it("Aged Brie quality increase", function () {
        const gildedRose = new GildedRose([ new Item("Aged Brie", 5, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(41);
    });

    it("Aged Brie quality increase more if on due date", function () {
        const gildedRose = new GildedRose([ new Item("Aged Brie", 0, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(42);
    });

    it("Aged Brie quality increase more if expired", function () {
        const gildedRose = new GildedRose([ new Item("Aged Brie", -2, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(42);
    });

    it("Aged Brie quality under 50", function () {
        const gildedRose = new GildedRose([ new Item("Aged Brie", -2, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });

});
