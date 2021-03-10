const scanProduct = (catalogue, barcode) => {
  return catalogue.find((item) => item.barcode === barcode) || null;
};

const addProduct = (basket, item) => {
  basket.push(item);
};

const getTotal = (basket) => {
  return basket.reduce((total, item) => total + item.price, 0);
};

const removeItem = (basket, barcode) => {
  const index = basket.findIndex((item) => item.barcode === barcode);

  basket.splice(index, 1);
};

module.exports = { scanProduct, addProduct, getTotal, removeItem };
