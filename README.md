# AdminPro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## GIT - Commnads more used
#gitignore  -> Archivo dentro del proyecto que define que parte no se va a subir al repositorio
#git init   -> Inicializa el repositorio
git status -> Devuelve info sobre los archivos que estan pendientes de agregar para futuro commit
git add .  -> Agrega todos los archivos pendiente de admitir como validos para commit (una vez ejecutado git status  para ver que ahora no queda nada pendiente)
git commit -m "mi mensaje" -> Para realizar los commits
git remote add origin http://.... -> Agrega un origen remoto donde subir lor archivos
git remote -v -> Muestra los origenes remotos que tengamos configurados
git commit -am "Modificaciones en los modulos" -> Two step in one, adding files to commit and commit
git tag -a v1.1.0 -m "Versión Input, Output y ViewChild" -> -a para hacer una anotación
git tag -> Para ver mis banderas
git push --tags

git push origin master
git push -u origin master -> Sube los archivos comiteados a la url remota (-u define que es el origen por defecto)


## Cosas interesantes descubiertas en el curso

### Acceso a la propidad conocida de un elemento HTML
[att.style.width] -> Angular puede gestionar propiedades conocidas de un elemento HTML indicandole el atributo attr y generando ese valor desde el componente.

### Llamada a una función JS desde Angular
declare function init_plugins(); -> Forma de llamar a una función JS desde un componente.

### Generación de un componente sin ser añadido a ningún módulo
ng g c component/graficoDonut --is --spec=false --skip-import -> skip-import evita que se añada este componente al app.module.ts

### Creación de snippets
- Creación de snippets -> File-Preferences-User snippets
Ejemplo Snippet:
{
    // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
    // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
    
    "Tarjeta con ROW": {
        "prefix": "cardRow",
        "body": [
            "<div class=\"row\">",
            "  <div class=\"col-12\">",
            "      <div class=\"card\">",
            "          <div class=\"card-body\">",
            "",
            "              $1",
            "",
            "          </div>",
            "      </div>",
            "  </div>",
            "</div> ",
        ],
        "description": "Crea una tarjeta de Bootstrap con su row"
    }
}

### Promesas
- Promesas: Llamada al metodo resolve() o reject() en linea
    promesa.then(
         () => console.log('Termino!'), // Then
         () => console.log('Error'), // Catch error
    );
Promesas: Devolver una promera dentro de una función
    return new Promise<boolean>( (resolve, reject) => {
      let contador = 0;

      const intervalo = setInterval( () => {
        contador ++;
        console.log(contador);
        if(contador === 3) {
            
resolve(true);
//reject('Simplemente un error');

          clearInterval(intervalo);
        }
      }, 1000);
    });

### Observables
- Observables (PIPE)
  .pipe( // Tuberia para hacer alguna tranformación en los datos
      retry(2) // Numero de intentos en una llamada asincrona observable
    ).subscribe(
      next => console.log('Subscripción', next), 
      error => console.error('Error en el obser', error),
      compete => console.log('El observador termino!')
  );

### BreadCrumb
Crear observables con pipes sobre las rutas para obtener solo la parte del router que nos interesa desde sus eventos.

return this.router.events ---> El pipe devuelve un Observable
    .pipe(
      filter( evento => evento instanceof ActivationEnd),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map( (evento: ActivationEnd) => evento.snapshot.data)

    );

### Añadir a la pestaña del navegador el nombre de la pagina actual
Con el ejemplo anterior de uso de pipes en las rutas tambien podemos hacer uso de una clase den angular-platform-browser que nos
permite añadir el titulo que queramos a la pestaña del navegador

Injectamos la dependencia en el constructor:
private title: Title

Usamos el setter setTitle:
this.title.setTitle( this.titulo );


## Creación del BACKEND

### Temas a tratar
- Configuración de Mongo (Almacenar imagenes - Encriptar contraseña - Tokens)
- Robo 3T ( Manejador de BDD -- Creación de querys contra mongo)
- Conexión entre Mongo y Node
- Colecciones
- TIP para mostrar la info en consola por colores
- HTTP -> Aprender sobre tipos respuestas correctas (404 - 403 - 200 - 201)
- Post Man para probar los servicios 
- Configuración inicial de Express
- Establecer las bases para crear los servicios REST
- Nuevo Repo para el BACK END

## Inicio del backend
npm init -> Genera un archivo JSON
npm install express --save -> Instalación de Express

### Comando de consola para ruta actual
pwd = Path Actual en la PowerShell

### Comando de consola de node para ejecutar fichero js
node app para ejecutar un js de node

### Nodemon refresco automatico servidor DB
nodemon -> nstalación de nodemon para refresco del servidor en cada cambioI

### Instalación de mongo
Instalación de mongo:
https://docs.mongodb.com/manual/installation/

### Interfax de usuario oficial de mongo
MongoDB Compass -> Interface de usuario oficial de mongo 

### Ruta para arrancar mongodb de nuestro proyecto en consola:
"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="c:\mongodbs\adminprodb"

### Ruta para arrancar mongo 
"C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"

### Integración de mongo con node mediante mongosse:
Es un ODM que ayuda a modelar (cración de modelos) la BBDD de mongo
mongoose 
var mongoose = require('mongoose');
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, resp) => {

    if (err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});

### Body parser node
Middleware -> Funciones que se van a ejecutar siempre
Cuando hacemos una consulta en Mongo en vez de devolver el resultado en linea,
lo parsea para que se mas legible.
En este caso siempre que enviemos algo en el body, el body-parser lo va a nalizar y lo va a parsear para usar en otro sitios
npm install body-parser
Analice los cuerpos de solicitud entrantes en un middleware antes de sus manejadores, disponibles bajo la propiedad req.body.

### Plugin mongoose para controlar errores 
npm i mongoose-unique-validator --save
Se puede ver mas información sobre estos plugins en la pagina de mongoose

### Encriptación de contraseña
bcrypt.js -> Libreria 
npm install bcryptjs

### Generación de TOKEN
Usamos libreria node jsonwebtoken de github
npm install jsonwebtoken --save

### Express-fileupload
Librería para subir imágenes al backEnd

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
