//Section2: UC3

window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

/*const createInnerHtml = () => {
    const headerHtml =
    `<tr>
        <th>Fullname</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Pin Code</th>
        <th>Phone Number</th>
        <th>Actions</th>
        </tr>`;

        const innerHtml = `${headerHtml}
        <tr>
            <td>Radhika</td>
            <td>SCB Nagar </td>
            <td> Hyderabad </td>
            <td> Telangana </td>
            <td> 500055 </td>
            <td> 91 9998889988 </td>
            <td>
            <img onclick="remove(this)" alt="delete"src="mages\deleteimage.svg">
            <img onclick="update(this)" alt="edit" src="Images\editimage.svg"  >
            </td>
        </tr>

        <tr>
            <td>Ramakanth </td>
            <td> Sriram Nagar </td>
            <td> Secundrabad </td>
            <td> Telangana </td>
            <td> 500054 </td>
            <td> 99 8822882233 </td>
            <td>
            <img onclick="remove(this)" alt="delete"src="Images\deleteimage.svg">
            <img onclick="update(this)" alt="edit" src="Images\editimage.svg"  >
            </td>
        </tr>
    </tr>`;
    document.querySelector('#table-display').innerHTML = innerHtml;
}*/


function save() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "AddressBookForm.html?name=Ramu&Address=H-No%3A5-27-399%2F2&city=1&state=TS&pin=50000055&phone=91+9292929292#", true);
    xhttp.send();
  }