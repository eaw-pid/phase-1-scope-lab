var customerName = 'bob';
const LeastFavoriteCustomer = 'tim';

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}
//before I had not made a variable and when I called the function in replit, it was working

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}
//set global by not using let/const/var


function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer;
}


function changeLeastFavoriteCustomer() {
    LeastFavoriteCustomer = 'brad';
    return LeastFavoriteCustomer;
}

//when I would do this - it would make all 5 tests fail even before 4 tets passed