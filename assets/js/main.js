/* Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */


const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Il mio primo messaggio',
            boxAttributes: {
                class: 'container bg-dark mt-5'
            },
            titleAttributes: {
                class: 'text-white p-2'
            },
            imgAttributes: {
                src: 'https://picsum.photos/500/300',
                class: 'rounded-3 mb-2'
            }
        }
    }
}).mount('#app');