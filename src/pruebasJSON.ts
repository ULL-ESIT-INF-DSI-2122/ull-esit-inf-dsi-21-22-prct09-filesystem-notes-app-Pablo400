/* eslint-disable max-len */
const fs = require('fs');

// eslint-disable-next-line no-unused-vars
const Users: string[] = [];

fs.readFile('/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-Pablo400/PruebasJSON/users.json', (err: any, data: string) => {
  if (err) {
    throw err;
  } else {
    const student = JSON.parse(data);
    student.forEach((element: any) => {
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
