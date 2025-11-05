let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let total = 0
let saves = []  // keep a history of saves



function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    saves.push(count); // Store the current count
    let countStr = count + " - "
    //saveEl.textContent += countStr
    saveEl.textContent = saves.map(n => n + " - ").join("");

    total += count
    totalEl.textContent = "Total: " + total

    countEl.textContent = 0
    count = 0
}

function undo () {
    //remove last entry
    let last = saves.pop();

    //update the history display
    saveEl.textContent = saves.map(n => n + " - ").join("");

    //update total, only if there was a save undo
   if (last !== undefined) {
        total -= last;
        totalEl.textContent = "Total: " + total;
   }
}
