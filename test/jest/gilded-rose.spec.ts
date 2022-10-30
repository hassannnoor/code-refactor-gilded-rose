import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  test('item AgedBrie increases in Quality',() =>{
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 2)]);
    const items = gildedRose.updateQuality();
    var AgedBrie = new Item ('Aged Brie',1,3);
    expect(items[0]).toEqual(AgedBrie);
  });

  test('item AgedBrie increases in Quality 2x when selling date expires',() =>{
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 2)]);
    const items = gildedRose.updateQuality();
    var AgedBrie = new Item ('Aged Brie',-1,4);
    expect(items[0]).toEqual(AgedBrie);
  });

  test('item AgedBrie quality can not be greater than 50',() =>{
    const gildedRose = new GildedRose([new Item('Aged Brie', 3, 50)]);
    const items = gildedRose.updateQuality();
    var AgedBrie = new Item ('Aged Brie',2,50);
    expect(items[0]).toEqual(AgedBrie);
  });
////////////////////////////////////////////////////////////////////////////////////////////////////////////
  test('Backstage passes to a TAFKAL80ETC concert increases by 1 when days are greater by 10',() =>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 2)]);
    const items = gildedRose.updateQuality();
    var Backstage = new Item ('Backstage passes to a TAFKAL80ETC concert',10,3);
    expect(items[0]).toEqual(Backstage);
  });

  test('Backstage passes to a TAFKAL80ETC concert increases by 2 when days are less than or eq by 10',() =>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 2)]);
    const items = gildedRose.updateQuality();
    var Backstage = new Item ('Backstage passes to a TAFKAL80ETC concert',9,4);
    expect(items[0]).toEqual(Backstage);
  });

  test('Backstage passes to a TAFKAL80ETC concert increases by 3 when days are less than or eq by 5',() =>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 2)]);
    const items = gildedRose.updateQuality();
    var Backstage = new Item ('Backstage passes to a TAFKAL80ETC concert',4,5);
    expect(items[0]).toEqual(Backstage);
  });

  test('Backstage passes to a TAFKAL80ETC concert becomes 0 when days left are 0',() =>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 25)]);
    const items = gildedRose.updateQuality();
    var Backstage = new Item ('Backstage passes to a TAFKAL80ETC concert',-1,0);
    expect(items[0]).toEqual(Backstage);
  });
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  test('Sulfuras',() =>{
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 80, 100)]);
    const items = gildedRose.updateQuality();
    var Sulfuras = new Item ('Sulfuras, Hand of Ragnaros',80,80);
    expect(items[0]).toEqual(Sulfuras);
  });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
test('Conjured item decrease twice in quality',() =>{
  const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 3, 8)]);
  const items = gildedRose.updateQuality();
  var Conjured = new Item ('Conjured Mana Cake',2,6);
  expect(items[0]).toEqual(Conjured);
});

test('Conjured item decrease 4 times in quality if passed thier sell date',() =>{
  const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 0, 8)]);
  const items = gildedRose.updateQuality();
  var Conjured = new Item ('Conjured Mana Cake',-1,4);
  expect(items[0]).toEqual(Conjured);
});

});

