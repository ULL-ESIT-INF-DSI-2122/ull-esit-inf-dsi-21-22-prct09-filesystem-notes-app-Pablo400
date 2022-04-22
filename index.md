# Práctica 9 - Aplicación de procesamiento de notas de texto

## Introducción

En esta práctica, se tendrá que implementar una aplicación de procesamiento de notas de texto. En concreto, está aplicación debería añadir, modificar, eliminar, listar y leer notas de un usuario concreto. Las notas se deben almacenarán como ficheros JSON en el sistema de ficheros de la máquina que ejecute la aplicación. Además, solo se podrá interactuar con la aplicación desde la línea de comandos. 

Para interactuar con la línea de comandos se deben utilizar los siguientes comandos:

```bash
node dist/app.js add --user="" --title="" --body="" --color=""

node dist/app.js modify --user="pablo" --title="pablo2" --body="Prueba"

node dist/app.js remove --user="" --title="" --body=""

node dist/app.js list --user=""

node dist/app.js read --user="" --title=""
```

## Implementación




