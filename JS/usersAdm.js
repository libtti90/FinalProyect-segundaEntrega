const usersAdm = JSON.parse(localStorage.getItem("Users"));
const btn = document.getElementById('btn-form')


// function for Table
function PintarUsers() {
    tableBody.innerHTML = '';


    usersAdm.forEach((user, index) => {
        tableBody.innerHTML += `
        <tr class="table-body">
            <td class="image-table"><img src="${user.image}" alt=""></td>
            <td class="name">${user.fullname}</td>
            <td class="bornDate">${formatedDate(user.bornDate)}</td>
            <td class="email">${user.email}</td>
            <td class="location">${user.location}</td>
            <td class="actions">
            
                  <button class="btn-table" title="edit" onclick="userEdit( '${user.id}')" ><i class="fa-solid fa-pen-to-square"></i></i>
                  <button class="btn-table" title="Delete" onclick="deleteUser(${index}, '${user.fullname}')">
  <i class="fa-solid fa-trash-can"></i>
</button>

            </td>
        </tr>`;
    });


}



function formatedDate(date) {
    const collator = new Intl.DateTimeFormat('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    const dateFormat = collator.format(date)
    return dateFormat
}



// New User
const tableBody = document.getElementById('table-body');

const formUser = document.getElementById('formUsers');
const button = formUser.querySelector('button[type=submit]');

formUser.addEventListener("submit", (evtForm) => {
    evtForm.preventDefault()

    let id;
    if (evtForm.target.elements.id.value) {
        id = evtForm.target.elements.id.value;
    }
    else {
        id = crypto.randomUUID()
    }

    const user = {
        fullname: evtForm.target.elements.fullname.value,
        age: evtForm.target.elements.age.valueAsNumber,
        email: evtForm.target.elements.email.value,
        password: evtForm.target.elements.password.value,
        active: evtForm.target.elements.active.value,
        bornDate: new Date(evtForm.target.elements.inputDateOfBirth.value).getTime(),
        location: evtForm.target.elements.state.value,
        id: id,
        image: evtForm.target.elements.image.value
    }
    if (evtForm.target.elements.id.value) {
        const indice = usersAdm.findIndex(userFind => {

            if (userFind.id === evtForm.target.elements.id.value) {
                return true
            }
        })

        usersAdm[indice] = user;
        Swal.fire(
            'Good Job',
            'User Edited',
            'success'
          ) 

    }


    else {
        usersAdm.push(user);
       
        Swal.fire(
            'Good Job',
            'User Added',
            'success'
          )
        
    }
    PintarUsers(usersAdm)

    localStorage.setItem('Users', JSON.stringify(usersAdm));

    formUser.reset();


})


PintarUsers();

//DELETE


function deleteUser(index, name) {

    const confirmDelete = confirm(`Do you want to delete user ${name}`);

    if (confirmDelete) {
        usersAdm.splice(index, 1);
        Swal.fire(
            'Good Job',
            'User Deleted',
            'success'
          )

        PintarUsers();
        localStorage.setItem('Users', JSON.stringify(usersAdm));
    }


}

//EDIT

function userEdit(idSent) {
    const userFound = usersAdm.find((user) => {
        if (user.id === idSent) {
            return true;
        }




    })

    if (userFound === undefined) {
        
        Swal.fire(
            'User No Found',
            'Try again',
            'error'
          )
    }

    const formElements = formUser.elements;

    formElements.fullname.value = userFound.fullname;
    formElements.inputDateOfBirth.value = formatInputDate(userFound.bornDate);
    formElements.email.value = userFound.email;
    formElements.age.value = userFound.age;
    formElements.state.value = userFound.location;
    formElements.image.value = userFound.image;
    formElements.checked = userFound.active;
    formElements.password.disabled = true;
    formElements.password2.disabled=true;
    formElements.id.value = userFound.id;


    button.classList.add('btn-Edit');
    button.innerText = "Edit";
    

    PintarUsers();
    localStorage.setItem('Users', JSON.stringify(usersAdm));
}



