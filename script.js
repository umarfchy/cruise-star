// base values of the input fields. 
document.getElementById('firstClass-input').value = 0;
document.getElementById('economy-input').value = 0;


// input value changer function
function inputValueChanger(classType, changeType){
    const inputValue = document.getElementById(classType + '-input').value;
    let currentCount = parseInt(inputValue);
    let currentNewCount = currentCount;
    if (changeType === 'increment'){
        currentNewCount = currentCount +  1;
    }
    if (changeType === 'decrement' &&
        currentCount>0){
        currentNewCount = currentCount -  1;
    } 
    document.getElementById(classType + '-input').value = currentNewCount;
    
    //updating prices
    updatePrices();
}


// price updater function 
function updatePrices(){
    let countFirstClass = document.getElementById('firstClass-input').value
    let countEconomy = document.getElementById('economy-input').value
    // firstClass unit ticket price = 150
    // economy unit ticket price = 100
    let subtotalPrice = parseInt(countFirstClass) * 150 + parseInt(countEconomy) * 100
    let vat = subtotalPrice * 0.1
    // showing subtotal
    document.getElementById('subtotalValue').innerText  = subtotalPrice;
    //showing vat
    document.getElementById('vatValue').innerText  = vat; //vat is 10%
    //showing total price
    document.getElementById('totalValue').innerText = subtotalPrice + vat; 
}


// firstClass increasing values. 
document.getElementById('firstClass-increment').addEventListener('click',()=>{
    inputValueChanger('firstClass','increment')
})

//firstClass decreasing values.
document.getElementById('firstClass-decrement').addEventListener('click',()=>{
    inputValueChanger('firstClass','decrement')
})

//economy increasing values.
document.getElementById('economy-increment').addEventListener('click',()=>{
    inputValueChanger('economy','increment')
})

//economy decreasing values.
document.getElementById('economy-decrement').addEventListener('click',()=>{
    inputValueChanger('economy','decrement')
})

//alert showing the summery of the purchase
// booking-btn

document.getElementById('booking-btn').addEventListener('click', ()=>{
    const firstClassTicket = document.getElementById('firstClass-input').value;
    const economyTickets = document.getElementById('economy-input').value;
    alert('You have purchased ' + firstClassTicket + ' first class ticket(s) and ' + economyTickets + ' economy ticket(s).');
})