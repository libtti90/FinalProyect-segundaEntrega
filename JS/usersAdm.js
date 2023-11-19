const usersAdm=JSON.parse(localStorage.getItem("Users"));
console.log(usersAdm)

const tableBody = document.getElementById('table-body');



function PintarUsers() {
    usersAdm.forEach(user => {
        tableBody.innerHTML += `
        <tr class="table-body">
            <td class="image-table"><img src="${user.image}" alt=""></td>
            <td class="name">${user.fullname}</td>
            <td class="bornDate">${user.bornDate}</td>
            <td class="email">${user.email}</td>
            <td class="location">${user.location}</td>
            <td class="actions">
            <button class="edit-btn" ><i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button class="edit-btn"><i class="fa-solid fa-trash-can"></i></i>
                  </button>
            </td>
        </tr>`;
    });
    
  
  }
PintarUsers()
