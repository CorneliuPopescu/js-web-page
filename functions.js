
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

export function resetTable(idTableBody, subtitle) { // Added 'export'
    idTableBody.innerHTML = '';
    subtitle.textContent = '0 registros';
}
