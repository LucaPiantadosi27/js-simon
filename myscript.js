
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di mercoledì mattina!


// memorizzo  elementi html

const secondsElement = document.querySelector("#seconds");
const minutesElement = document.querySelector("#minutes");
const hoursElement = document.querySelector("#hours");
const daysElement = document.querySelector("#days");

// Individuo  la data bersaglio (mercoledì 14 - 02)
const finalDate = new Date("February 14, 2024 11:00:00");
const finalDateTime = finalDate.getTime();

// setto l' Intervallo del timer:
const timer = setInterval(updateTimeLeft, 1000);


// La funzione "updateTimeLeft" calcolerà il tempo che intercorre tra la data e l'ora prefissate in (finalDate) e l'orario di adesso.

updateTimeLeft()

function updateTimeLeft() {

    
    // memorizzo data e orario attuale 
    const now = new Date();
    const nowTime = now.getTime();

    // calcolo della differenza (in millisecondi) tra l'ora di adesso e la data prefissata
    const timeDifference = finalDateTime - nowTime;
    // console.log(timeDifference)


    // Controllo se la data è nel futuro (> 0)
    if(timeDifference > 0) {


        // con questi comandi calcoliamoil numero di giorni, ore, minuti e secondi rimanenti utilizzando la differenza di tempo in millisecondi
       
        // secondi
        const seconds = Math.floor(timeDifference / 1000 % 60).toString().padStart(2, '0');
        // console.log(seconds);

        // minuti
        const minutes = Math.floor(timeDifference / (1000 * 60) % 60).toString().padStart(2, '0');
        // console.log(minutes);

        // ore
        const hours = Math.floor(timeDifference / (1000 * 60 * 60) % 24).toString().padStart(2, '0');
        // console.log(hours);
        // giorni
        const days =  Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        // console.log(days);

        // aggiorno gli elementi HTML corrispondenti con i giorni, le ore, i minuti e i secondi rimanenti
        // assegnazione dei valori in pagina
        secondsElement.innerText = seconds;
        minutesElement.innerText = minutes;
        hoursElement.innerText = hours;
        daysElement.innerText = days + " giorni,";


        

    } else {
        // se la data è già passata comparirà la scritta "Timer Scaduto"
        document.querySelector("#clock").innerText = "Timer scaduto!";

        // rimuovo il setInterval, 
        clearInterval(timer);
    }

}