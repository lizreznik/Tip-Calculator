function calculateAndDisplay(){
    // get input values from html - forms //
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    //Calculate tip, total bill, and amount per person using helper functions //
    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPrs = calculateAmtPerPrs(totalBill, numOfPpl)

    //display the results in the html document //
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText = 'Total Bill: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPrsResult').innerText = 'Amount Per Person: $' + amtPerPrs.toFixed(2)
}















/* let bill = 120
let numOfPpl = 5
let serviceQuality = 'Great'

function calculateTip(quality) {
    if(quality === 'Great') {
        return bill * .2
    } else if (quality === 'Good') { 
        return bill * .15
    } else (quality === "Poor") { 
        return bill * .10
    } else { 
       // alert("Please enter a valid value")
    }
}

let tip = calculateTip(serviceQuality)

function calculateTotalBill(bill, tip) { 
    return bill + tip 
}

let totalBill = calculateTotalBill(bill, tip)

function calcAmtPpl(totalBill, numOfPpl){
    return totalBill / numOfPpl
}

let amtPerPrs(totalBill, numOfPpl)

console.log('Tip: $' = tip)
console.log('Total Bill: $' + totalBill)
console.log('Amount Per Person: $' + amtPerPrs) */