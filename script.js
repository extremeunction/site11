//alert("darova bro");

//var number = prompt("Каков внешний долг США??");
//console.log(number);

function guess(){
    var number = prompt("Каков внешний долг США??");
    var guessNumber=10;
    if (number > guessNumber){
        alert("mnogo");
        return guess();
    }
    else if (number > guessNumber){
        alert("malo");
        return guess();
    }
    else {
        return alert("pobeda");    
    }    
}

//guess();
function reminder() {
    alert("dolgo");
    window.close();
}


//setTimeout(reminder, 3000)
function validForm(){
    var name = document.getElementById("name").value;
    console.log(name);
    
    var password = document.getElementById("password").value;
    console.log(password);
    
    var reg_name = /^[a-za-яё]+$/i;
    var reg_password = /^[a-z0-9]{5,500}/i;
    
    if(reg_name.test(name) == false){
       alert("v pole toka bukvi");
       }
    if (reg_password.test(password) == false){
           alert("ne to");
           }
    
}
document.querySelector(".submit_button").addEventListener('click', validForm);