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

    it("Backstage passes increase by 1 if more than 10 days", function () {
        const gildedRose = new GildedRose([
            new Item("Backstage passes to a TAFKAL80ETC concert", 12, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(41);
    });

    it("Backstage passes increase by 2 if between 5 and 10 days", function () {
        const gildedRose = new GildedRose([
            new Item("Backstage passes to a TAFKAL80ETC concert", 8, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(42);
    });

    it("Backstage passes increase by 3 if less than 5 days", function () {
        const gildedRose = new GildedRose([
            new Item("Backstage passes to a TAFKAL80ETC concert", 2, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(43);
    });

    it("Backstage passes go to 0 if expired", function () {
        const gildedRose = new GildedRose([
            new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it("Backstage passes change in increase value", function () {
        const gildedRose = new GildedRose([
            new Item("Backstage passes to a TAFKAL80ETC concert", 6, 40) ]);
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(42);
        items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(45);
    });

    it("Backstage passes remain at 0 if expired", function () {
        const gildedRose = new GildedRose([
            new Item("Backstage passes to a TAFKAL80ETC concert", -5, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it("Sulfuras, Hand of Ragnaros keeps quality", function () {
        const gildedRose = new GildedRose([
            new Item("Sulfuras, Hand of Ragnaros", 7, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(80);
    });

    it("Sulfuras, Hand of Ragnaros does not expire", function () {
        const gildedRose = new GildedRose([
            new Item("Sulfuras, Hand of Ragnaros", 7, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(7);
    });

    it("normal item loses quality", function () {
        const gildedRose = new GildedRose([
            new Item("cheese", 2, 25) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(24);
    });

    it("normal item loses quality faster when expired", function () {
        const gildedRose = new GildedRose([
            new Item("cheese", -1, 25) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(23);
    });

});
