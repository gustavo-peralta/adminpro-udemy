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
[att.style.width] -> Angular puede gestionar propiedades conocidas de un elemento HTML indicandole el atributo attr y generando ese valor desde el componente.

declare function init_plugins(); -> Forma de llamar a una función JS desde un componente.

ng g c component/graficoDonut --is --spec=false --skip-import -> skip-import evita que se añada este componente al app.module.ts

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


- Observables (PIPE)
  .pipe( // Tuberia para hacer alguna tranformación en los datos
      retry(2) // Numero de intentos en una llamada asincrona observable
    ).subscribe(
      next => console.log('Subscripción', next), 
      error => console.error('Error en el obser', error),
      compete => console.log('El observador termino!')
  );

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
