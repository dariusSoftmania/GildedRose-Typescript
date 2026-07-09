export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

function updateQuality(glideRose: GildedRose, index: number, factor: number, value: number) {
    glideRose.items[index].quality = glideRose.items[index].quality - factor * value;
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === "Sulfuras, Hand of Ragnaros")
                continue;
            this.items[i].sellIn = this.items[i].sellIn - 1;

            let value: number = 1;
            let factor: number = 1;
            if (this.items[i].sellIn < 0)
                factor = 2;

            switch (this.items[i].name) {
                case "Aged Brie":
                    value = -1;
                    break;
                case "Backstage passes to a TAFKAL80ETC concert":
                    factor = -1;
                    if (this.items[i].sellIn < 0) {
                        value = 0
                        this.items[i].quality = 0
                    }
                    if (this.items[i].sellIn >= 0 && this.items[i].sellIn < 5)
                        value = 3
                    if (this.items[i].sellIn >= 5 && this.items[i].sellIn < 10)
                        value = 2
                    break;
                case "Conjured Mana Cake":
                    value = 2;
                    break;
                default:
                    value = 1;
                    break;
            }

            updateQuality(this, i, factor, value);
            if(this.items[i].quality > 50)
                this.items[i].quality = 50

            if(this.items[i].quality < 0)
                this.items[i].quality = 0
        }

        return this.items;
    }
}
