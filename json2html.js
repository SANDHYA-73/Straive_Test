export default function json2html(data) {
    // Start the table with the data-user attribute
    let html = '<table data-user="jeldasandhya3@gmail.com">';
    
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
  
    // Loop through the data and add rows
    data.forEach(item => {
      html += `<tr>
        <td>${item.Name || ''}</td>
        <td>${item.Age || ''}</td>
        <td>${item.Gender || ''}</td>
      </tr>`;
    });
  
    // Close the table tags
    html += `
      </tbody>
    </table>`;
  
    return html;
  }
  