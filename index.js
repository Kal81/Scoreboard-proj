let hscoreEl = document.getElementById("hscore-el")
let gscoreEl = document.getElementById("gscore-el")
let scoreH = 0
let scoreG = 0

function add1pointh() {
    scoreH += 1
    hscoreEl.textContent = scoreH
}

function add2pointsh() {
    scoreH += 2
    hscoreEl.textContent = scoreH
}

function add3pointsh() {
    scoreH += 3
    hscoreEl.textContent = scoreH
}

function add1pointg() {
    scoreG += 1
    gscoreEl.textContent = scoreG
}

function add2pointsg() {
    scoreG += 2
    gscoreEl.textContent = scoreG
}

function add3pointsg() {
    scoreG += 3
    gscoreEl.textContent = scoreG
}

function reset() {
    scoreG = 0
    scoreH = 0
    gscoreEl.textContent = scoreG
    hscoreEl.textContent = scoreH
}