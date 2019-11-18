var a = document.forms["register"]["card"].value;
var b = document.forms["register"]["name"].value;
var c = document.forms["register"]["email"].value;
var d = document.forms["register"]["emailC"].value;
var e = document.forms["register"]["pwd"].value;
var f = document.forms["register"]["pwdC"].value;
var g = document.forms["register"]["phone"].value;
var h = document.forms["register"]["expiry"].value;
var j = document.forms["register"]["security"].value;

form.addEventListener('submit', (e) =>{
    e.preventDefault()
})

/*------------------- functions ---------------- */
,function validate() {
   if( checkEmpty() && checkFeild(email, emailC) && checkFeild(pwd, pwdC) && cardCheck(card) ) {
     
   }
}
,function expCheck(date){
    var 
}
,function checkEmpty() {
    if (!a.value || !b.value || !c.value || !d.value || !e.value || !f.value || !g.value || !h.value || !j.value) {
        alert("Please fill all the inputs");
        return false;
    } else {
        return true;
    }
}
,function checkFeild(p, q) {
    if (p == q) {
        return true;
    } else {
        alert("Please Check Feilds match");
        return false;
    }
}


,function cardCheck(creditCardNumber) {
    var number;
    var numCheck; 
    var flag;
    var length;
    var  sum;
    var xi;
    flag = true;
    sum = 0;
    numCheck = (creditCardNumber + '').split('').reverse();
    for (xi = 0, length = numCheck.length; xi < length; xi++) {
       num= numCheck[xi];
       num= parseInt(digit, 10);
        if ((flag = !flag)) {
           num*= 2;
        }
        if (digit > 9) {
           num-= 9;
        }
        sum += digit;
    }
    return sum % 10 === 0;
}
