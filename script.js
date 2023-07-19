document.getElementById('tableForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const rows = parseInt(document.getElementById('rows').value);
    const columns = parseInt(document.getElementById('columns').value);

    if (!isNaN(rows) && !isNaN(columns)) {
        if (rows <= 10 && columns <= 10) {
            generateTable(rows, columns);
        } else {
            showWarning("Please enter numbers less than or equal to 10 for rows and columns.");
        }
    }
});

function generateTable(rows, columns) {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('td');
            cell.textContent = getRandomNumber();
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    tableContainer.appendChild(table);
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function showWarning(message) {
    const warningElement = document.createElement('div');
    warningElement.className = 'warning';
    warningElement.textContent = message;

    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    tableContainer.appendChild(warningElement);
}
