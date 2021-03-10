const checkout = require("./index");

const orange = {
  barcode: "123",
  price: 7,
};

const apple = {
  barcode: "789",
  price: 5,
};

const kiwi = {
  barcode: "765",
  price: 25,
};

const banana = {
  barcode: "456",
  price: 6,
};

const catalogue = [orange, apple, kiwi, banana];

describe("scanProduct", () => {
  it("returns a product from a catalogue by barcode", () => {
    // setup
    // exercise
    const result = checkout.scanProduct(catalogue, kiwi.barcode);
    // verify
    const expected = kiwi;
    expect(result).toBe(expected);
    // teardown
  });
  it("returns null when not found", () => {
    // setup
    // exercise
    const result = checkout.scanProduct(catalogue, "768");
    // verify
    const expected = null;
    expect(result).toBe(expected);
    // teardown
  });
});

describe("addProduct", () => {
  it("adds item to a basket", () => {
    const basket = [];

    checkout.addProduct(basket, banana);

    const expected = [banana];

    expect(basket).toEqual(expected);
  });
});

describe("getTotal", () => {
  it("returns 0 if the basket is empty", () => {
    const basket = [];

    const result = checkout.getTotal(basket);

    const expected = 0;

    expect(result).toBe(expected);
  });

  it("gets the total price of items in a basket", () => {
    const basket = [orange, apple, apple];

    const result = checkout.getTotal(basket);

    const expected = orange.price + apple.price + apple.price;

    expect(result).toBe(expected);
  });
});

describe("removeItem", () => {
  it("removes an item from a basket", () => {
    const basket = [orange, apple, apple];

    checkout.removeItem(basket, apple.barcode);

    const expected = [orange, apple];

    expect(basket).toEqual(expected);
  });
});
