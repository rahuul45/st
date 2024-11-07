// json2html.js
export default function json2html(data) {
    // Start the table with the data-user attribute
    let html = '<table data-user="rahulavunuri6@gmail.com">';
    
    // Add the table header
    html += `
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>`;

    // Loop through each object in the data array
    data.forEach(item => {
        html += '<tr>';
        html += `<td>${item.Name}</td>`;
        html += `<td>${item.Age}</td>`;
        html += `<td>${item.Gender || ''}</td>`; // Add Gender or empty if undefined
        html += '</tr>';
    });

    // Close the tbody and table tags
    html += `
        </tbody>
    </table>`;

    return html;
}
