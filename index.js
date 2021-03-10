const fs = require("fs");
const path = require("path");

const catalogue = require("./data/catalogue.json");
const basket = require("./data/basket.json");

const checkout = require("./checkout");

const command = process.argv[2];

switch (command) {
  case "scan": {
    const barcode = process.argv[3];

    const item = checkout.scanProduct(catalogue, barcode);

    console.log(item);
    break;
  }

  case "add": {
    const barcode = process.argv[3];

    const item = checkout.scanProduct(catalogue, barcode);

    if (item) {
      checkout.addProduct(basket, item);
    }

    fs.writeFileSync(
      path.join(__dirname, "data", "basket.json"),
      JSON.stringify(basket)
    );

    console.log("Item added");
    break;
  }

  case "total": {
    const total = checkout.getTotal(basket);

    console.log("The total price of your basket is", total);
    break;
  }

  case "remove": {
    const barcode = process.argv[3];

    checkout.removeItem(basket, barcode);

    fs.writeFileSync(
      path.join(__dirname, "data", "basket.json"),
      JSON.stringify(basket)
    );

    console.log("Item removed");
    break;
  }

  default: {
    console.error("Invalid command");
    break;
  }
}
