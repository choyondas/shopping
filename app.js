document.getElementById('plusButton').addEventListener('click', function() {
    const inputField = document.getElementById('inputField');
    const previousValue = parseInt(inputField.value);
    const newValue = previousValue + 1;
    inputField.value = newValue;

    const price = document.getElementById('price');
    const previousPrice = parseInt(price.innerText);
    const newPrice = previousPrice + 1219;
    price.innerText = newPrice;

});
document.getElementById('minusButton').addEventListener('click', function() {
    if (inputField.value >= 1) {
        const inputField = document.getElementById('inputField');
        const previousValue = parseInt(inputField.value);
        const newValue = previousValue - 1;
        inputField.value = newValue;


        const price = document.getElementById('price');
        const previousPrice = parseInt(price.innerText);
        const newPrice = previousPrice - 1219;
        price.innerText = newPrice;
    }

});
const price = document.getElementById('price');
const previousPrice = price.innerText;