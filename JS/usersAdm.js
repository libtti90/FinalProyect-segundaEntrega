const usersAdm=JSON.parse(localStorage.getItem("Users"));
console.log(usersAdm)

function PintarUsers() {
    tableBody.innerHTML = '';


    usersAdm.forEach(user => {
        tableBody.innerHTML += `
        <tr class="table-body">
            <td class="image-table"><img src="${user.image}" alt=""></td>
            <td class="name">${user.fullname}</td>
            <td class="bornDate">${user.bornDate}</td>
            <td class="email">${user.email}</td>
            <td class="location">${user.location}</td>
            <td class="actions">
            
                  <button class="edit-btn" title="edit" onclick="userEdit( '${user.id}')" ><i class="fa-solid fa-pen-to-square"></i></i>
                  </button>
                  <button class=""><i class="fa-solid fa-trash-can"></i>
                  </button>
            </td>
        </tr>`;
    });
    
  
  }
  
  



const tableBody = document.getElementById('table-body');

const formUser = document.getElementById('formUsers');

formUser.addEventListener("submit",(evtForm)=>{
    evtForm.preventDefault()

    const user={
        fullname:evtForm.target.elements.fullname.value,
        age:evtForm.target.elements.age.valueAsNumber,
        email:evtForm.target.elements.email.value,
        password:evtForm.target.elements.password.value,
        active:evtForm.target.elements.active.value,
        bornDate:new Date (evtForm.target.elements.inputDateOfBirth.value).getTime(),
        location:evtForm.target.elements.state.value,
        id:crypto.randomUUID(),
        image:evtForm.target.elements.image.value
    }
    usersAdm.push(user);
    localStorage.setItem('Users', JSON.stringify(usersAdm));
    


   
})


PintarUsers();

function userEdit(idSent) {
    const userFound = usersAdm.find((user) => {
        if (user.Id === idSent) {
            return true;
        }

        


    })

    if(userFound===undefined){
        swal({
            title: "User not Found",
            text: "Try again",
            icon: "error",
        });
    }

    const formElements = formUser.elements;

    formElements.fullname.value =userFound.fullname;
    
}




