/* Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */


const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'il mio primo messaggio',
            imgAttributes: {
                src: 'https://picsum.photos/200/300'
            }
        }
    }
}).mount('#app');