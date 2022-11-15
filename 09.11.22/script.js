const showButton = document.getElementById("show");
const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const questsList = document.getElementById("quests");
const changes = document.getElementById("changes");

let quests = ["Łukasz", "Bogdan", "Patryk", "Magda"];

function checkShow() {
    if (questsList.textContent == "") {
        showQuests();
    } 
    else {
        showQuests();
        showQuests();
    }
}

function showQuests() {
    if (questsList.textContent == "") {
        for (let i = 0; i < quests.length; i++) {
            questsList.innerHTML+= `${i+1}: ${quests[i]} <br>`;
        }
    }
    else {
        questsList.textContent = "";
    }
}

showButton.addEventListener("click", showQuests);

addButton.addEventListener("click", () => {
    if (quests.length > 9) {
        alert("Już masz 10 gości!");
    }
    else {
        changes.textContent = "";
        let tempQuest
        let ok = true;
        let amount = parseInt(prompt("Podaj ile osob chcesz dodac"));
        let recordNumber = 1;
        for (let a = 0; a < amount; a++) {
            do {
                tempQuest = prompt("Podaj imie gościa");
                for (let i = 0; i < quests.length; i++) {
                    if (tempQuest == quests[i]) {
                        ok = false;
                        break;
                    }
                    else {
                        ok = true;
                    }
                }
            } while (ok == false);
            quests.push(tempQuest);
            changes.innerHTML += `${recordNumber}: ${tempQuest} <br>`;
            recordNumber++;
        }
    }
    
    checkShow();
})

removeButton.addEventListener("click", () => {
    if (quests.length < 1) {
        alert("Nie ma żadnych gości do usunięcia")
    } 
    else {
        let ok = false;
        let amount = parseInt(prompt("Ile gości chcesz usunąć?"));
        let tempRemove;
        let recordNumber = 1;
        changes.textContent = "";
        for (let a = 0; a < amount; a++) {
            do {
                tempRemove = prompt("Podaj nazwe gościa, którego chcesz usunąć");
                for (let i = 0; i < quests.length; i++) {
                    if (quests[i] == tempRemove) {
                        quests.splice(i, 1);
                        ok = true;
                        console.log("working")
                        break;
                    }
                    
                }
            } while (ok == false);
            changes.innerHTML += `${recordNumber}: ${tempRemove} <br>`;
            recordNumber++;
        }
    }
    
    checkShow();
})