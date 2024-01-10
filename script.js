const priceElement = document.getElementById('dynamicPrice');
let isUSD = true;
const usdToInrRate = 83.10;

// Function to update price on checkbox change
function updatePrice() {
  const basePrice = parseFloat(priceElement.getAttribute('data-price'));
  const accessoryPrice = document.getElementById('accessoryCheckbox').checked ? 150 : 0;

  const totalPrice = basePrice + accessoryPrice;
  priceElement.setAttribute('data-total-price', totalPrice);
  if (isUSD) {
    priceElement.textContent = `Price: $${totalPrice.toFixed(2)}`;
  } else {
    const totalPriceINR = totalPrice * usdToInrRate;
    priceElement.textContent = `Price: ₹${totalPriceINR.toFixed(2)}`;
  }
}

//convert price to INR on click
function convertToINR() {
  const totalPrice = parseFloat(priceElement.getAttribute('data-total-price'));
  const totalPriceINR = totalPrice * usdToInrRate;
  priceElement.textContent = `Price: ₹${totalPriceINR.toFixed(2)}`;
  isUSD = false;
}

//to USD on click
function convertToUSD() {
  const totalPrice = parseFloat(priceElement.getAttribute('data-total-price'));
  priceElement.textContent = `Price: $${totalPrice.toFixed(2)}`;
  isUSD = true;
}

priceElement.addEventListener('click', function () {
  if (isUSD) {
    convertToINR();
  } else {
    convertToUSD();
  }
});

document.getElementById('accessoryCheckbox').addEventListener('change', updatePrice);

updatePrice();
