export const renderTable = (table) => {
    // Function to render the table
    // Parameters: table(array)
    // Returns: undefined
    const container = document.getElementById('container')
    container.innerHTML = ''
    table.forEach(row => {
        const rowElement = document.createElement('div')
        rowElement.classList.add('row')
        row.forEach(card => {
            rowElement.appendChild(card.cardElement)
        })
        container.appendChild(rowElement)
    })
}