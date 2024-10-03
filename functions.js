
export function addRow(idTableBody, idValue, tipoValue, nombreValue, añoValue, cantidadValue, subtitle) {
    let recordCount = parseInt(subtitle.textContent);
    const newRow = idTableBody.insertRow();
    const newCellId = newRow.insertCell();
    const newCellTipo = newRow.insertCell();
    const newCellNombre = newRow.insertCell();
    const newCellAño = newRow.insertCell();
    const newCellCantidad = newRow.insertCell();
    newCellId.textContent = idValue;
    newCellTipo.textContent = tipoValue;
    newCellNombre.textContent = nombreValue;
    newCellAño.textContent = añoValue;
    newCellCantidad.textContent = cantidadValue;
    recordCount++;
    if (recordCount === 1) {
        subtitle.textContent = `${recordCount} registro`;
    } else {
        subtitle.textContent = `${recordCount} registros`;
    }
}

export function filterTable(filterValue) {
    const rows = idTableBody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        const id = rows[i].cells[0].textContent;
        if (filterValue === 'Todos' || id === filterValue) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}

export function resetTable(idTableBody, subtitle) { // Added 'export'
    idTableBody.innerHTML = '';
    subtitle.textContent = '0 registros';

    // Reset filterID dropdown
    const filterID = document.getElementById('filterID');
    filterID.innerHTML = '<option value="Todos">Todos</option>';

    // Clear filterName input
    filterName.value = '';
}
