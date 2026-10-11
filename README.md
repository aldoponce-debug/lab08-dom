# Bitacora de JavaScript interactivo
 
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)
 
## Ejercicio 2: Seleccionar y modificar el DOM

 Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde la consola |si |no |
| textContent desde app.js |si |si |
| style.color |si |si |
| classList.add |si |si |
| createElement + appendChild |si |si |
 
## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click |1 |1 |
| dblclick |2 |1 |
| mouseover |1 |1 |
 
## Ejercicio 4: Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre |En la parte abajo aparece letra por letra lo que escribes|si |
| Enviar sin preventDefault |recarga la pantalla |si |
| Enviar con preventDefault, correo sin @ |aparece en rojo de que necesitas la arroba |no|
| Enviar con preventDefault, correo con @ |Envie al correo designado|no |
 
## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | descripcion() | conDescuento(0.25) |
|--------|--------|--------|---------------|--------------------|
| laptop |laptop |S/2500.00 |no |S/1875.00 |
| mouse |mouse|S/45.00 |no |S/33.75 |
| teclado |teclado |S/120.00 |no |S/90.00 |
| monitor |monitor |S/680.00 |no |S/510.00 |
 
## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba | Total que muestra la pagina | Correcto (Si/No) |
|--------|-----------------------------|------------------|
| Cuaderno 12.50 |El monto que pones |si |
| + Lapicero 3.20 |monto y suma |si |
| + Mochila 89.90 |monto y suma |si |
| Sin Number() |se cancela todo |si|
 
| Pieza | Linea de tu codigo donde aparece | Para que sirve |
|-------|----------------------------------|----------------|
| DOM |document.getElementById(...) o document.querySelector(...) |Permite conectar y manipular los elementos HTML desde JavaScript. |
| Evento |addEventListener('click', ...) |Detecta las acciones del usuario (como clics) para ejecutar código en respuesta. |
| Objeto |new Producto(...) |Agrupa datos y comportamientos relacionados (como nombre y precio) en una sola estructura. |


- [Bitacora de JavaScript interactivo](notas/BITACORA.md)
- [Ver la pagina en vivo](https://aldoponce-debug.github.io/lab08-dom/)