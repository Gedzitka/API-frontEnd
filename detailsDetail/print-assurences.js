import deleteAssurences from "./deleteAssurences.js";
import editAssurence from "./editAssurences.js";
import deleteAll from "./deleteAll.js";
import detailAssurence from "./detailAssurences.js";

export default function printAssurences (id){
    id = window.location.search.split("=")[1];
    axios.get(`http://localhost:8000/api/assurances/`,
)
.then((res) => {
 

    const resData = res.data;
    const data=resData.find((item)=>item.clientID===id
    )
    console.log(data);
   
    const assurences = document.getElementById("table");
    let table=
    `<thead class="">
    <tr>
        <th scope="col">Pojištění</th>
        <th scope="col">Částka</th>
        <th scope="col"></th>
    </tr>
    </thead>
    <tbody id="tbody" class="w-auto">
    <tr id="${data._id}">
        <td data-label="Jméno a příjmeni"><a id="detail" href="#">${data.type}</a></td>
        <td data-label="telefon">${data.price}</td>
        <td data-label="button"><button  id="btn-delete" type="button" class="mr-2 btn btn-danger">Odstranit</button><button id="btn-edit" type="button" class="  btn btn-warning">Editovat</button></td>
    </tr>
    `
    table += `</tbody>
    </table>`;
    assurences.innerHTML = table;
   const asID=data._id;
    console.log(asID);
    deleteAssurences();
    editAssurence();
    deleteAll();
    detailAssurence();
    
    }
    )
   }


    

//     axios.get(`http://localhost:8000/api/assurances/`,


// )
// .then((res) => {
//     const resData = res.data;

//     const data=resData.find((item)=>item.clientID===id
//     )




