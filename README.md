# Tarea: Mi componente interactivo

## Componente elegido
Una **Calculadora de Propinas Interactiva** que calcula el total a pagar ingresando el monto de la cuenta, aplicando clases, eventos y manipulación del DOM.

## Version 1: solo DOM
* **Qué agregué:** Estructura HTML básica con inputs y divs, y código JavaScript inicial para seleccionar los elementos en pantalla mediante el DOM.
* **Por qué:** Para establecer la conexión visual entre los elementos de la página y el script.
* **Qué cambió en el comportamiento:** La interfaz se muestra estáticamente en el navegador a la espera de interacciones.

## Version 2: con eventos
* **Qué agregué:** Un `addEventListener` de tipo `click` en el botón y una validación con condicionales para verificar el campo de entrada.
* **Por qué:** Para capturar las acciones del usuario y asegurar que no ingresue datos vacíos o incorrectos.
* **Qué cambió en el comportamiento:** El botón reacciona al clic y muestra mensajes de error en pantalla si el valor no es válido.

## Version 3: con clases y objetos
* **Qué agregué:** La clase `CalculadoraPropina` con atributos (`montoBase`, `porcentaje`) y métodos, creando un objeto con `new CalculadoraPropina(...)`.
* **Por qué:** Para organizar la lógica matemática de forma orientada a objetos y separar responsabilidades.
* **Qué cambió en el comportamiento:** El sistema calcula de forma limpia la propina y el total, mostrando el desglose completo en la página.

## Donde uso DOM, eventos y objetos

| Parte del código final | Tipo de pieza | Para qué sirve |
|---|---|---|
| `document.getElementById(...)` | DOM | Conecta los elementos HTML con JavaScript. |
| `btnCalcular.addEventListener('click', ...)` | Evento | Detecta el clic del usuario en el botón. |
| `new CalculadoraPropina(...)` | Objeto | Instancia la clase para realizar los cálculos financieros. |

## Pruebas realizadas

| Acción | Resultado esperado | Resultado obtenido | ¿Cumple? (Sí / No) |
|---|---|---|---|
| Hacer clic con el campo vacío | Mostrar mensaje de error en rojo | Mostró mensaje de error en pantalla | Sí |
| Ingresar un texto inválido | Indicar que debe ingresar un monto válido | Detectó el error y avisó en pantalla | Sí |
| Ingresar "100" y hacer clic | Calcular propina (10) y total (110) | Mostró S/ 10.00 propina y S/ 110.00 total | Sí |
| Ingresar "250" y hacer clic | Calcular propina (25) y total (275) | Mostró S/ 25.00 propina y S/ 275.00 total | Sí |
| Recargar la página | Mostrar interfaz limpia | Apareció limpia esperando entrada | Sí |

## Por que disene asi mi clase
Diseñé la clase `CalculadoraPropina` con dos atributos y dos métodos para encapsular de manera limpia toda la lógica de los cálculos matemáticos, permitiendo que el código sea ordenado, reutilizable y fácil de entender sin mezclar operaciones directamente en la interfaz visual.

- [Tarea: mi componente interactivo](notas/TAREA.md)
- [Ver la tarea en vivo](https://aldoponce-debug.github.io/lab08-dom/tarea/)