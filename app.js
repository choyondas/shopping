function updateProduct(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;


    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;

    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;

    }
    productInput.value = productNumber;
    //update case total;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    calculateTotal();

}

//case value;
document.getElementById('case-plus').addEventListener('click', function() {
    updateProduct('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function() {
    updateProduct('case', 59, false);

})


//phone value

document.getElementById('phone-plus').addEventListener('click', function() {
    updateProduct('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function() {
    updateProduct('phone', 1219, false);
})


function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;

    const tax = subTotal / 10;
    const total = subTotal + tax;


    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;

}