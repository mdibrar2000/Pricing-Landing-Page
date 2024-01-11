const priceElements = [
  document.getElementById('dynamicPrice'),
  document.getElementById('dynamicPrice2'),
  document.getElementById('dynamicPrice3')
];

const accessoryCheckbox = document.getElementById('accessoryCheckbox');
let isUSD = true;
const usdToInrRate = 83.10;

// update price after adding accessory
function updatePrice(element) {
  const basePrice = parseFloat(element.getAttribute('data-price')) || 0; // Default to 0 if attribute is not set
  const accessoryPrice = accessoryCheckbox.checked ? 150 : 0;
  const totalPrice = basePrice + accessoryPrice;
  element.setAttribute('data-total-price', totalPrice);

  if (isUSD) {
    element.textContent = `$${totalPrice.toFixed(2)}`;
  } else {
    const totalPriceINR = totalPrice * usdToInrRate;
    element.textContent = ` ₹${totalPriceINR.toFixed(2)}`;
  }
}

//price conversion into INR
function convertToINR() {
  priceElements.forEach(element => updatePrice(element));
  isUSD = false;
}

//price conversion into USD
function convertToUSD() {
  priceElements.forEach(element => updatePrice(element));
  isUSD = true;
}
//on click
priceElements.forEach(element => {
  element.addEventListener('click', () => {
    if (isUSD) {
      convertToINR();
    } else {
      convertToUSD();
    }
  });
});

document.getElementById('accessoryCheckbox').addEventListener('change', () => {
  priceElements.forEach(element => updatePrice(element));
});

priceElements.forEach(element => updatePrice(element)); 


//to select
const toggleElements = document.querySelectorAll('.price-toggle');

toggleElements.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('selected');
  });
});
