# GrafoBox
Repositorio para proyecto de sandbox de grafos hecho por nacho e inaki

La idea principal es un sitioweb donde la gente se pueda meter a jugar y estudiar propiedades de grafos

Que cosas necesitaria la interfaz?
-Obviamente la opcion de poner nodos, poner aristas, y ponerle peso a las aristas (para empezar, luego podriamos por ejemplo permitir pintar los nodos de distintos colores y nombres)
-Informacion en alguna parte de la pantalla sobre las propiedades que cumple tu grafo.  Cuando cliqueas una propiedad te da aun mas informacion sobre tal
-La opcion para borrar nodos/aristas

Una vez que tenemos las bases, como podemos hacer para que sea mas ludico y pedagogico?
Ideas Potenciales:
Hacer que sea al estilo my little alchemy pero con grafos y la idea es desbloquear todas las propiedades
Hacer algun modo para testearte si es que queres aprender alguna propiedad en especifico. IA?


### Documentacion

+ Para la documentación, usamos [MkDocs](https://www.mkdocs.org/)

+ Para poder correrlo localmente hacer `pip install -r requirements.txt`


### Testing

+ Para el testing, integramos Jest como framework de testing
+ Es necesario instalar la dependencia por medio de npm siguiendo las instrucciones en [página web](https://jestjs.io/docs/getting-started)

+ Para correr los tests, ir a la carpeta tests en `js/tests` y ahí correr `npm test` o `yarn test`, como indica en las instrucciones [de la página web oficial de jest](https://jestjs.io/docs/getting-started)
