var a=document.forms["register"]["card"].value;
var b=document.forms["register"]["name"].value;
var c=document.forms["register"]["email"].value;
var d=document.forms["register"]["emailC"].value;
var e=document.forms["register"]["pwd"].value;
var f=document.forms["register"]["pwdC"].value;
var g=document.forms["register"]["phone"].value;
var h=document.forms["register"]["expiry"].value;
var j=document.forms["register"]["security"].value;

form.addEventListener('submit', function (e) {
    e.preventDefault()
}

/*------------------- functions ---------------- */
function validate() {
    checkEmpty();
    
}

function checkEmpty() {

if (!a || !b || !c || !d || !e || !f || !g|| !h || !j) {
    alert("Please fill all the inputs");
    return false;
}
}
function checkFeild(a, b) {
    if (a === b) {
        return true;
    } else {
        alert("Please Check Feilds match");
        return false;
    }
}


function validate_creditcardnumber(creditCardNumber) {
    var digit, digits, flag, sum, _i, _len;
    flag = true;
    sum = 0;
    digits = (creditCardNumber + '').split('').reverse();
    for (_i = 0, _len = digits.length; _i < _len; _i++) {
        digit = digits[_i];
        digit = parseInt(digit, 10);
        if ((flag = !flag)) {
            digit *= 2;
        }
        if (digit > 9) {
            digit -= 9;
        }
        sum += digit;
    }
    return sum % 10 === 0;
}
