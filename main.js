import { addRow, filterTable, resetTable } from './functions.js';

const idForm = document.getElementById('idForm');
const idTableBody = document.getElementById('idTableBody');
const subtitle = document.getElementById('subtitle');
const resetButton = document.getElementById('resetButton');
const filterID = document.getElementById('filterID');
const filterName = document.getElementById('filterName');

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

        // Add new option to filterID
        const newOption = document.createElement('option');
        newOption.value = idValue;
        newOption.textContent = idValue;
        filterID.appendChild(newOption);
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

// Add event listener for filterID
filterID.addEventListener('change', () => {
    const selectedID = filterID.value;
    filterTable(selectedID);
});

filterName.addEventListener('input', () => {
    const filterValue = filterName.value.toLowerCase();
    const rows = idTableBody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        const name = rows[i].cells[2].textContent.toLowerCase(); // Assuming "Name" is the third column (index 2)
        if (name.includes(filterValue)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
});
