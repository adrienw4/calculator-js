let buttons = document.querySelectorAll('.touches input')
let ecran = document.querySelector(".ecran")

buttons.forEach(addClick);

function addClick(item) {
    item.addEventListener("click",function() {
        let buttonValue = item.value;
        ecran.value += buttonValue; 
        
    })
    
}
document.getElementById("resulta").addEventListener("click", function() {
    let ecran = document.getElementById("ecran");
    ecran.value = eval(ecran.value);
}