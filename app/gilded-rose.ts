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
const AgedBrie = 'Aged Brie';
const BackstagePass = 'Backstage passes to a TAFKAL80ETC concert';
const Sulfuras = 'Sulfuras, Hand of Ragnaros';
const Conjured = 'Conjured';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.updateItems(this.items[i])
    }

    return this.items;
  }
  updateItems(item: Item) {
    //Sulfuras quality (80)
    if(item.name == Sulfuras)
    {
      item.quality = 80;
    }
    var degradeRate:number = item.name.includes(Conjured) ? -2 : -1;
    var doesDegrade:boolean = item.name != AgedBrie && item.name != BackstagePass && item.name != Sulfuras;

    if (doesDegrade) {
      this.changeQuality(degradeRate, item)
    }

    if (item.name == AgedBrie) {
      this.changeQuality(1, item)
    } 

    if (item.name == BackstagePass) {
      this.changeQuality(1, item)

      if (item.sellIn < 11) {
        this.changeQuality(1, item)
      }
      if (item.sellIn < 6) {
        this.changeQuality(1, item)
      }
    }

    if (item.name != Sulfuras) {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if(doesDegrade){
        this.changeQuality(degradeRate,item)
      }
      if(item.name == AgedBrie)
      {
        this.changeQuality(1,item)
      } else if (item.name == BackstagePass){
        item.quality = item.quality - item.quality
      }  
    }
  }
  changeQuality(change: number, item: Item) {
    var updatedQuality = item.quality + change;
    //Check the range If in range, update quailty
    if (updatedQuality <= 50 && updatedQuality >= 0) {
      item.quality = updatedQuality;
    }
  }
}
