"use strict";
/* eslint-disable max-len */
const fs = require('fs');
// eslint-disable-next-line no-unused-vars
const Users = [];
fs.readFile('/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/PruebasJSON/users.json', (err, data) => {
    if (err) {
        throw err;
    }
    else {
        const student = JSON.parse(data);
        student.forEach((element) => {
            Users.push(element.username);
        });
    }
});
// const fs = require('fs');
// fs.mkdir('./src/Prueba', (error: any) => {
//   if (error) {
//     console.log(error.message);
//   } else {
//     if () {
//     } else {
//       console.log('Directorio creado');
//     }
//   }
// });
