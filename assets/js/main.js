/****************************************************************** 
 TRACCIA js-campominato-dom:

 BASE:
 Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco.
 Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
 Attenzione:
 **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
 In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
 La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
 Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

 BONUS:
 Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
 difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
 difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
 difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
 Consigli del giorno:
 ****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
 ****Ad esempio:
 Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.
 
 *******************************************************************/

/****************************************************************** 
ANALISI TRACCIA:
// generare 16 numeri casuali unici comprese tra 1 e 100
// se clicco su uno dei numeri interni all'array (bomba) la casella si colora di rosso
// si interrompe il ciclo 
// termina la partita
// stampo in console il risultato della partita (n° non bombe cliccate)
// altrimenti se clicco su uno dei numeri esterni all'array (non bomba) la casella si colora di blu
// il ciclo continua


//strumenti
// - ciclo while per le 16 bombe
// - eventlistener click (uso quello già creato per il click su cellMarkUp)
// - ciclo for (già esistente)
// - if else
// - sum per i click
// - consolelog per risultato 

*******************************************************************/

const containerGrid = document.querySelector('.container');
//console.log(containerGrid);

const buttonGenerate = document.querySelector('.button');
//console.log(buttonGenerate);

let totalCells = 100;
//console.log(totalCells);

let listCells = document.querySelectorAll('.cell');
//console.log(listCells);

let numberRowCells = Math.sqrt(totalCells);
//console.log('n° celle per riga = ' + numberRowCells);

// generare 16 numeri casuali unici comprese tra 1 e 100 con un ciclo
//trovata su stackoverflow - capire se va bene
const bombs = [];
while (bombs.length < 16) {
    const bomb = Math.floor(Math.random() * 100) + 1;
    if (bombs.indexOf(bomb) === -1) bombs.push(bomb);
}
console.log('elenco bombe ' +  bombs);


buttonGenerate.addEventListener('click', function () {
    //console.log('hai cliccato il pulsante genera campo minato');

    //ciclo for per aggiungere le 100 celle con i numeri ordinati da 1 a 100
    for (let i = 1; i <= totalCells; i++) {

        const cellMarkUp = document.createElement('div');
        //console.log(cellMarkUp);
        cellMarkUp.className = 'cell';
        cellMarkUp.innerText = i;
        cellMarkUp.style.width = `calc(100% / ${numberRowCells})`;
        containerGrid.insertAdjacentElement('beforeend', cellMarkUp);

        cellMarkUp.addEventListener('click', function () {
            cellMarkUp.style.backgroundColor = 'lightblue';
            console.log('hai cliccato il numero ' + cellMarkUp.innerText);
        })
    }
})




