# self-checkout

## Installation

Once the repo is cloned, use `npm i` to install all dependencies.

## Test

Then use `npm test` to run unit tests with jest.

## Run

Your basket and catalog data is stored in JSON files in the `data` directory.

Using the main program in `index.js` you can use the unit-tested functions to manipulate the data stored in these files.

The following commands are available:

- `node index.js scan <barcode>` - will find an item with the given barcode and print it to the screen
- `node index.js add <barcode>` - will add an item with the given barcode to your basket
- `node index.js total` - will print out the total price of all the items in your basket
- `node index.js remove <barcode>` - will remove an item with the given barcode and from your basket
