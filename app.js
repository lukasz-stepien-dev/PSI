const para = document.getElementById("para");
const passLength = Math.floor(Math.random() * 10 + 1);
let chance = 1;
let password = "";
let typed = "";

for (let i = 0; i < passLength; i++) {
    password += String.fromCharCode(Math.floor(Math.random() * 77 + 48));
}

console.log(password);

for (let i = 0; i < 10; i++) {
    if (chance === 6) {
        typed = prompt("długośc hasła: " + passLength);
    } else {
        typed = prompt("Zgaduj hasło");
    }

    if (typed === password && chance >= 6) {
        para.textContent = "Próba nr. " + chance + " zgadłeś z podpowiedzią";
        break; 
    } else if (typed === password) {
        para.textContent = "Próba nr. " + chance;
        break;
    }

    chance++;
}

if (para.textContent == "") {
    para.textContent = "nie zgadles hasla";
}