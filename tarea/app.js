// Clase propia con atributos y métodos
class CalculadoraPropina {
    constructor(montoBase, porcentaje) {
        this.montoBase = montoBase;
        this.porcentaje = porcentaje;
    }

    calcularTotal() {
        return this.montoBase + (this.montoBase * (this.porcentaje / 100));
    }

    obtenerPropina() {
        return this.montoBase * (this.porcentaje / 100);
    }
}

// Selección de elementos del DOM
const montoInput = document.getElementById('montoInput');
const btnCalcular = document.getElementById('btnCalcular');
const resultadoDiv = document.getElementById('resultado');

// Evento click con validación de datos
btnCalcular.addEventListener('click', function(e) {
    const valor = parseFloat(montoInput.value);

    // Validación visible en la página (sin alert)
    if (isNaN(valor) || valor <= 0) {
        resultadoDiv.innerHTML = "<p style='color: red;'>Por favor, ingresa un monto válido mayor a 0.</p>";
        return;
    }

    // Creación de objeto a partir de la clase
    const cuenta = new CalculadoraPropina(valor, 10);
    const totalPagar = cuenta.calcularTotal();
    const propina = cuenta.obtenerPropina();

    // Modificación del DOM para mostrar resultados
    resultadoDiv.innerHTML = `
        <p>Monto base: S/ ${cuenta.montoBase.toFixed(2)}</p>
        <p>Propina (10%): S/ ${propina.toFixed(2)}</p>
        <p><strong>Total a pagar: S/ ${totalPagar.toFixed(2)}</strong></p>
    `;
});