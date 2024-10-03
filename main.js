import { addRow, resetTable } from './functions.js';

const idForm = document.getElementById('idForm');
const idTableBody = document.getElementById('idTableBody');
const subtitle = document.getElementById('subtitle');
const resetButton = document.getElementById('resetButton');

idForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const idInput = document.getElementById('search');
    const idValue = idInput.value;
    const tipoSelect = document.getElementById('tipo');
    const tipoValue = tipoSelect.value;
    const nombreInput = document.getElementById('nombre');
    const nombreValue = nombreInput.value;
    const añoInput = document.getElementById('año');
    const añoValue = parseInt(añoInput.value);
    const cantidadInput = document.getElementById('cantidad');
    const cantidadValue = parseInt(cantidadInput.value);

    let idExists = false;
    for (let i = 0; i < idTableBody.rows.length; i++) {
        if (idTableBody.rows[i].cells[0].textContent === idValue) {
            idExists = true;
            break;
        }
    }

    const id = parseInt(idValue);
    if (!idExists && id > 0 && idValue.length <= 8 && /^\d+$/.test(idValue)) {
        addRow(idTableBody, idValue, tipoValue, nombreValue, añoValue, cantidadValue, subtitle);
        idInput.value = '';
        tipoSelect.selectedIndex = 0; // Reset Tipo dropdown
        nombreInput.value = ''; // Clear the "Nombre" input field
        añoInput.value = ''; // Clear the "Año" input field
        cantidadInput.value = ''; // Clear the "Cantidad" input field
    } else {
        if (idExists) {
            alert('ID repetido. Introduzca un ID único.');
        } else {
            alert('El ID debe ser un entero positivo mayor a cero, hasta 8 dígitos.');
        }
    }
});

resetButton.addEventListener('click', () => {
    resetTable(idTableBody, subtitle);
});
