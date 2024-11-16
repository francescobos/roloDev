# roloDev - My headless Rolodex

## gestione deti da CLI

I record a db li facciamo inserire da dagli script che prendono file yml in autocompletamento
Allo stesso modo voglio avere dei comandi per visualizzare i contatti e i dettagli così da pilotare le relazioni

## frontend

Se e quando ci servirà un frontend (magari per visualizzare delle dashboard) possiamo usare ejs / node.js / bulma e alpine.js (vedi index.htm) tutto ultralight e semplice e gnerabile da chatGpt

## api generazione e modelli AI

Se devo "generare report" o simili posso usare cose di AI pilotando dei modelli più o meno gratuiti

## adminJS

Possiamo lasciarlo sempre come "visualizzatore del database" // "SqliteStudio" remoto per capire un po' cosa succede ai dati. Non usiamo per svilupparle il front-end

## note contatti correlati

le note correlate ai contatti avranno il testo in formato markdown ed anch'esse caricate tramite file yml. Nel file yml ci sarà un campo photoDir che se presente nella stessa directory del yml, verrà caricata a relazionata al record su db e SCARICATA se serviranno riferimenti del contatto.

## Progetti

estenderemo questo software per la categorizzazione e la gestione dei tempi dei progetti... c'è da pensare come categorizzarli in modo che siano "misurabili" come tempi, correlati a contatti coinvolti ma relativamente "piccoli" e da divedere in archiviati o meno. Le note potrebbero essere assegnate anche ad un progetto e quindi essere collegate anche ai vari contatti che fanno parte del progetto.