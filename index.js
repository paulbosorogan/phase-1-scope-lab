// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName(){
     customerName = customerName.toUpperCase()
}

var bestCustomer = undefined;
function setBestCustomer(){
    bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = 'dan';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'paul'
}