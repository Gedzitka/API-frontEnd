//editace pojištění
const id = window.location.search.split('=')[1];
axios.get(`http://localhost:8000/api/clients/${id}`)
      .then((res) => {
          console.log(res.data);
          const client = res.data;
          console.log(client);
      
      
      const clientName=document.getElementById('name')
      
      let h4=`<h4 id="${client._id}" class="mb-5">${client.firstName} ${client.lastName}</h4> `
      clientName.innerHTML=h4
           
      })
        .catch((err) => console.log(err));
    
const editAssurances = () => {
    const id = window.location.search.split('=')[1];

    axios.get(`http://localhost:8000/api/assurances/${id}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
  
        document.getElementById('assurence-type').value = data.assurenceType;
        document.getElementById('clientID').value = data.clientID;
        document.getElementById('price').value = data.price;
        document.getElementById('valid-from').value = data.validFrom;
        document.getElementById('subject-asurance').value = data.subjectOfinsurance;
        document.getElementById('valid-to').value = data.validTo;
      })
      .catch((err) => console.log(err));
  };
    
editAssurances();
    putAssurences=()=>{
 
        const form = document.getElementById('form')
        const imputName=document.getElementById('clientID')
        imputName.value=id
    console.log(imputName.value);

console.log(form);
form.addEventListener('submit', (e) => {
     e.preventDefault()
     ;
     const data = new FormData(form)
     const dataForm=[...data]
     const dataEteries = JSON.stringify(Object.fromEntries(dataForm))
     console.log(dataEteries);

   const id = window.location.search.split('=')[1];
     
    axios({
        method: "put",
        url: `http://localhost:8000/api/assurances/${id}`,
        data: dataEteries,
        headers: { "Content-Type": "application/json" }
        
    }
    
    )
        .then((res) => {
            const data = res.data;
            console.log(data + "pojištění upraveno")
            console.log(data.clientID);
      
            window.location.href=`http://127.0.0.1:5500/client-detail.html?=${data.clientID}`
           
           
        }
        
        )

        .catch((err) =>
        console.log(err));
    }
    
    )}
putAssurences()
      


