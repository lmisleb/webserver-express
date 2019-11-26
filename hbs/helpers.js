const hbs = require('hbs');

//Helpers
hbs.registerHelper('nombre', () => {
    return 'Lenin Misle';
});

hbs.registerHelper('year', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');

});