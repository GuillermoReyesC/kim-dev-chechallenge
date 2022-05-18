# Desafío para Software Engineers

Nombre postulante: [Guillermo Antonio Reyes Campos]
Link a la app en producción: [https://guillermoreyesc.github.io/kim-dev-chechallenge/]

## Instrucciones

Debes crear un buscador de países consultando el [siguiente grafo](https://countries.trevorblades.com/). Este código contiene una base para seguir con la aplicación en React y ApolloClient. Queda a disposición tuya cualquier cambio, ya sea de estructura, estilo, etc.

Se espera que logres hacer una aplicación parecida a la del siguiente diagrama:

![image1](imgs/1.png)
![image2](imgs/2.png)

La funcionalidad y estructura debe ser igual, pero el diseño y variantes (por ejemplo, cambiar colores de las cosas) queda a tu gusto. **Considerar que el ícono al lado del nombre de cada país es el emoji**.

Además de esto, se espera que hagas deploy de tu app en el servicio que desees (Heroku, Netlify, AWS, Github Pages, etc).

## Consideraciones

- Se espera que uses buenas prácticas como gitflow (pull requests y commits), orden del código, estructura, eficiencia, etc.
- Puedes dejar comentarios de decisiones que tuviste que tomar y del por qué en este repositorio.
- Se va a considerar un buen diseño de UX/UI.

## Hints

Acá van algunas cosas que pueden ser útiles (o no 👀):

- [Gitignore](https://www.toptal.com/developers/gitignore)
- [GraphQL](https://www.howtographql.com/)
- [React](https://es.reactjs.org/)
- [Styled components](https://styled-components.com/docs/basics)
- [ApolloClient](https://www.apollographql.com/docs/react/)
- [Lodash](https://lodash.com/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint](https://commitlint.js.org/#/)
- [Eslint](https://eslint.org/)
- [Eslint airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [Husky](https://www.npmjs.com/package/husky)

## pregunta:
"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."


## Respuesta la pregunta:
'Primero que todo, daria la sugerencia de qué tan factible seria migrar el sistema a trabajar con Graphql, al tener la capacidad de solo entregar la data solicitada, se evitaria el tiempo de recibir data innecesaria que suele venir dentro de las respuestas. lo que reduciria el tiempo de estas mismas. El poder separar todas las consultas y modularizar como se hace en react seria una buena alternativa, sobretodo en el caso de ser un proyecto de legado.

-Paginar la data desde el backend para evitar sobrecarga del frontend cuando se realizan paginaciones de lado del cliente.

-Limitar las consultas que sean unicas puede mejorar nuestra respuesta si se encuentra el objeto unico y agregar salidas (break) las funciones de este tipo, en caso de encontrar la data antes de realizar la busqueda o mapeo.

-Se puede verificar si es que se esta utilizando el sistema de Caché de MySQL en las consultas ya que el almacenamiento de cache es mas rapido.

-Dejar la menor cantidad de logica para tratar la informacion en el frontend, para evitar sobrecarga de esta misma.

-Utlilizar el localStorage como fuente de almacenamiento para evitar recargas de pagina o nuevas consultas.

Deben existir muchas mejores maneras de mejorar el rendimiento para el problema planteado, pero solo incluyo lo que puedo analizar desde la experiencia y lo que podria probar si tuviese la necesidad de hacerlo.

Saludos!'




