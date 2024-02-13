
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di mercoledì mattina!


// memorizzo  elementi html

const secondsElement = document.querySelector("#seconds");
const minutesElement = document.querySelector("#minutes");
const hoursElement = document.querySelector("#hours");
const daysElement = document.querySelector("#days");

// Individuo  la data bersaglio
const finalDate = new Date("February 13, 2024 11:00:00");
const finalDateTime = finalDate.getTime();

// setto l' Intervallo del timer:
const timer = setInterval(updateTimeLeft, 1000);
