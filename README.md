![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Algoritmos básicos de JS

<br>

![lab-js-basic-algorithms-code-collaboration-gif](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-js-basic-algorithms-code-collaboration-gif.gif)

<br>

<details>
  <summary>
   <h2>Objetivos de aprendizaje</h2>
  </summary>

  Este ejercicio te permitirá practicar y aplicar los conceptos y las técnicas que se enseñaron en clase.

  Al completar este ejercicio, podrás:

  - Ejecutar código JavaScript desde tu IDE y usar un servidor local para cargarlo en el navegador.
  - Declarar variables con las palabras clave `const` y `let` y usarlas para almacenar valores.
  - Asignar valores a variables mediante operadores de asignación (`=`, `+=`, `-=`, etc.).
  - Usar sentencias condicionales (`if`, `else if`, `else`) y operadores lógicos (AND, OR, NOT) para controlar el flujo del programa.
  - Acceder a caracteres y subcadenas, y consultar y comparar la longitud de cadenas.
  - Manipular cadenas con métodos básicos como `toUpperCase()` y `toLowerCase()`.
  - Comparar valores con operadores de comparación (`<`, `>`, `<=`, `>=`, `===`).
  - Usar bucles `for` o `while` para recorrer cadenas en orden normal e inverso.

  <br>
  <hr> 

</details>

## Introducción

¡Te damos la bienvenida a tu primer laboratorio de JavaScript en Ironhack!

El objetivo de este ejercicio es que te familiarices con los tipos de datos primitivos y los conceptos básicos de JavaScript que hemos visto hasta ahora, y que puedas ponerlos en práctica. Consulta los materiales de las clases y del trabajo previo cuando lo necesites; no te limites: sé curioso y explora distintas soluciones en Google.

Trabajarás con un compañero o compañera en este laboratorio, practicando la **programación en pareja**. Durante el ejercicio, trabajarán juntos en un mismo ordenador o editor de código y se turnarán para escribir el código. Una persona será quien **conduce** y la otra quien **navega**. Quien conduce escribe el código, mientras que quien navega lo revisa y guía a su compañero o compañera.

Cambien de rol cada 15 minutos o al completar cada iteración, para que ambos tengan la oportunidad de escribir código y practicar cómo conversar sobre problemas y soluciones.

¿Listos para empezar?

<br>

## Primeros pasos
Para este ejercicio, usaremos VS Code y la extensión Live Server para ejecutar el código JavaScript. Sigue estos pasos:



- Crea un *fork* de este repositorio.

  

- Clónalo en tu ordenador.

  

- Abre la carpeta del proyecto en VS Code.

  

- Una vez en VS Code, abre el archivo con la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). Para hacerlo, haz clic derecho en el archivo `index.html` y selecciona **Open with Live Server**.

  

- Se abrirá una nueva ventana del navegador con el archivo `index.html`. Ya puedes empezar a trabajar en el ejercicio.

<br>



## Entrega

- Cuando termines, ejecuta los siguientes comandos:

```bash
git add .
git commit -m "Solved lab"
git push origin master
```

- Crea un *pull request* para entregar tu trabajo.

<br>

*En Ironhack usamos las solicitudes de incorporación de cambios (PR) para entregar los laboratorios y revisar el trabajo del alumnado. Cuando hayas completado todas las iteraciones obligatorias, confirma tus cambios y crea una solicitud de incorporación de cambios. Si no puedes terminar alguna parte de una iteración, o aún no has completado todas las iteraciones o los retos adicionales, no pasa nada: de todas formas, entrega la solicitud antes de que empiece la clase del día siguiente.*<br>

*Una vez creado el PR, cada vez que subas cambios (siguiendo los tres pasos anteriores), estos aparecerán automáticamente en el PR para que el equipo docente pueda revisar tu entrega.*

<br>



## Instrucciones

Debes hacer todo el trabajo en el archivo `index.js`. Este archivo ya está vinculado a `index.html`, así que puedes abrir `index.html` en el navegador y ver los resultados en la consola.

<br>

Antes de empezar a escribir código, lee atentamente las instrucciones de cada iteración y asegúrate de entender qué tienes que hacer.

¡Esperamos que lo disfrutes! :blue_heart:

<br>

### Iteración 1: Nombres y entrada

  1.1 Crea una variable `hacker1` con el nombre de quien conduce. <br>
  1.2 Muestra `"El nombre de quien conduce es XXXX"`.<br>
  1.3 Crea una variable `hacker2` con el nombre de quien navega.<br>
  1.4 Muestra `"El nombre de quien navega es YYYY"`.

### Iteración 2: Condicionales

  2.1. Según qué nombre [sea más largo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), muestra:
  <br>
    - `El nombre de quien conduce es el más largo: tiene XX caracteres.` o <br>
    - `Parece que el nombre de quien navega es el más largo: tiene XX caracteres.` o <br>
    - `¡Vaya! Los dos nombres tienen la misma longitud: XX caracteres.`

### Iteración 3: Bucles

  3.1 Muestra los caracteres del nombre de quien conduce, separados por espacios y [en mayúsculas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase); por ejemplo, `"J O H N"`.

  3.2 Muestra todos los caracteres del nombre de quien navega en orden inverso; por ejemplo, `"nhoJ"`.

  3.3 Según el [orden lexicográfico](https://en.wikipedia.org/wiki/Lexicographical_order) de las cadenas, muestra: <br>

- `El nombre de quien conduce va primero.` <br>
- `¡Oye, el nombre de quien navega va primero, sin duda!` <br>
- `¿Qué? ¿Los dos tienen el mismo nombre?`

### ¡Hora de los retos adicionales!

#### Reto adicional 1:

Ve al sitio web del [generador de Lorem Ipsum](http://www.lipsum.com/) y:

  - Genera 3 párrafos. Guarda el texto en una nueva variable de tipo cadena llamada `longText`.
  - Haz que tu programa cuente el número de palabras de la cadena.
  - Haz que tu programa cuente cuántas veces aparece la palabra latina [`et`](https://en.wiktionary.org/wiki/et#Latin).

#### Reto adicional 2:

Crea una nueva variable llamada `phraseToCheck` que contenga una cadena. Escribe código para comprobar si el valor asignado a esta variable es un [palíndromo](https://en.wikipedia.org/wiki/Palindrome). Aquí tienes algunos ejemplos:

  - "A man, a plan, a canal, Panama!"
  - "Amor, Roma"
  - "race car"
  - "stack cats"
  - "step on no pets"
  - "taco cat"
  - "put it up"
  - "Was it a car or a cat I saw?" and "No 'x' in Nixon".

  __IMPORTANTE__: Si buscas una solución para esta iteración en Google, puede que encuentres soluciones avanzadas que usan métodos de cadenas o arreglos (como _join()_, _reverse()_, etc.). Sin embargo, queremos que apliques lo que sabes hasta ahora e intentes resolverlo usando únicamente un bucle `for`, sentencias `if-else` y algunas instrucciones `break` y `continue`.

__¡A programar!__ :heart:

## Recursos adicionales

- [Cadenas - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [if - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [while - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [for - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

<br>

## Preguntas frecuentes

<br>

<details>
  <summary>Me he quedado atascado en el ejercicio y no sé cómo resolver el problema ni por dónde empezar.</summary>
  <br>

  Si te has quedado atascado con el código y no sabes cómo resolver el problema ni por dónde empezar, da un paso atrás e intenta formular una pregunta clara sobre el problema concreto. Esto te ayudará a delimitarlo y a encontrar posibles soluciones.

  Por ejemplo, ¿hay algún concepto que no entiendes o recibes un mensaje de error que no sabes cómo solucionar? Por lo general, es útil describir el problema con la mayor claridad posible e incluir cualquier mensaje de error. Así podrás explicar la situación a otras personas y quizá recibir ayuda de tus compañeros o de recursos en línea.

  Cuando tengas claro cuál es el problema, podrás empezar a buscar una solución.

  [Volver al principio](#preguntas-frecuentes)
</details>

<details>
  <summary>¿Cómo se obtiene la longitud de una cadena en JavaScript?</summary>
  <br>

  Para obtener la longitud de una cadena, puedes usar la propiedad `length`. Aquí tienes un ejemplo:

  ```js
  const str = "Hello, world!"";
  console.log(str.length); // 13
  ```

  La propiedad `length` devuelve el número de caracteres de la cadena, incluidos los espacios y los caracteres especiales.

  [Volver al principio](#preguntas-frecuentes)
</details>

<details>
  <summary>¿Cómo recorro una cadena?</summary>
  <br>

  Aquí tienes un ejemplo de cómo recorrer una cadena con un bucle `for`:

  ```js
  let str = "ironhack";

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
  ```

  Este código recorre cada carácter de la cadena `str`. El bucle se ejecutará tantas veces como caracteres haya en la cadena.
  En cada iteración, mostrará el carácter actual en la consola.

  [Volver al principio](#preguntas-frecuentes)
</details>

<details>
  <summary>¿Cómo compruebo si una cadena contiene una subcadena?</summary>
  <br>

  Puedes usar el método `includes()` para comprobar si una cadena contiene una subcadena.

  Este método devuelve un valor booleano (`true` o `false`) que indica si la cadena contiene la subcadena especificada como argumento.

  Ejemplo:

  ```js
  let str = "hello world";

  console.log(str.includes("hello"));  // true
  console.log(str.includes("world"));  // true
  console.log(str.includes("bye"));    // false
  ```

  <br>

  También puedes usar el método `indexOf()`, que devuelve el índice de la primera aparición de la subcadena o -1 si no la encuentra.

  Ejemplo:

  ```js
  let str = "hello world";

  console.log(str.indexOf("h"));      // 0
  console.log(str.indexOf("world"));  // 6
  console.log(str.indexOf("bye"));    // -1
  ```

  [Volver al principio](#preguntas-frecuentes)
</details>

<details>
  <summary>¿Cómo convierto una cadena a mayúsculas o minúsculas?</summary>
  <br>

  #### Mayúsculas

  Para convertir una cadena a *mayúsculas*, usa el método `toUpperCase()`. Este método devuelve una cadena nueva con todos sus caracteres en mayúsculas.

  Ejemplo:

  ```js
  let str = "ironhack";

  console.log(str.toUpperCase());  // "IRONHACK"
  ```

  <br>

  #### Minúsculas

  Para convertir una cadena a *minúsculas*, puedes usar el método `toLowerCase()`. Este método devuelve una cadena nueva con todos sus caracteres en minúsculas.

  Ejemplo:

  ```js
  let str = "IRONHACK";

  console.log(str.toLowerCase());  // "ironhack"
  ```

  Ten en cuenta que los métodos `toUpperCase()` y `toLowerCase()` no modifican la cadena original. Devuelven una cadena nueva convertida al tipo de letra deseado.

  [Volver al principio](#preguntas-frecuentes)
</details>

<details>
  <summary>¿Cómo invierto una cadena?</summary>
  <br>

  Puedes usar un bucle `for` para recorrer los caracteres de la cadena y añadirlos en orden inverso a una cadena nueva.

  Ejemplo:

  ```js
  let str = "drawer";
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  console.log(reversed);  // "reward"
  ```

  El ejemplo anterior usa un bucle `for` para recorrer los caracteres de `str` en orden inverso, desde el último hasta el primero. En cada iteración, añade el carácter actual a la cadena `reversed`.

  [Volver al principio](#preguntas-frecuentes)
</details>

<details>
  <summary>¿Cómo creo una cadena de varias líneas en JavaScript?</summary>
  <br>

  Para crear una cadena de varias líneas en JavaScript, debes usar plantillas de cadena (*template literals*). Se delimitan con acentos graves (`) y permiten insertar expresiones en cadenas y crear texto que abarque varias líneas.

  Ejemplo:

  ```js
  let str = `This is an
  example of a
  multi-line string.`;

  console.log(str);
  ```

  [Volver al principio](#preguntas-frecuentes)
</details>

<details>
  <summary>No puedo subir cambios al repositorio. ¿Qué debo hacer?</summary>
  <br>

Hay varios motivos por los que quizá no puedas hacer *push* de los cambios a un repositorio Git:

1. **No has confirmado tus cambios:** Antes de subirlos al repositorio, debes confirmarlos con el comando `git commit`. Asegúrate de haberlos confirmado e intenta hacer *push* de nuevo. Para hacerlo, ejecuta los siguientes comandos en la terminal desde la carpeta del proyecto:
  ```bash
  git add .
  git commit -m "Your commit message"
  git push
  ```
2. **No tienes permiso para subir cambios al repositorio:** Si clonaste directamente el repositorio principal de Ironhack sin crear primero un *fork*, no tienes permisos de escritura.
Para comprobar qué repositorio remoto has clonado, ejecuta este comando en la terminal desde la carpeta del proyecto:
  ```bash
  git remote -v
  ```
Si el enlace que aparece corresponde al repositorio principal de Ironhack, primero tendrás que crear un *fork* en tu cuenta de GitHub y luego clonar ese *fork* en tu ordenador para poder subir los cambios.

**Nota**: Haz una copia de tu código local para evitar perderlo durante el proceso.

  [Volver al principio](#preguntas-frecuentes)

</details>
