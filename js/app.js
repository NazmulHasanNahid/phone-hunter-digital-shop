const phone = () =>{
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value ; 
    //console.log(searchText);
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
     .then(res => res.json())
     .then(data => showPhone(data.data))
}

const showPhone  = (phones)=>{
const phoneContainer = document.getElementById('phone-container')
phoneContainer.innerHTML = '' ;
 phones.forEach(phone =>{
  //  console.log(phone);
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = ` 
    <div class="card">
    <img width="400px"  src="${phone.image}" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title">Brand: ${phone.brand}</h5>
      <p class="card-text"> Model: ${phone.phone_name}</p>
      <p class="card-text"> Relese Date: ${phone.releaseDate}</p>
      <button onClick="moreInfo('${phone.slug}')" class="btn btn-info text-white">Details</button>
    </div>
  </div>
     `
     phoneContainer.appendChild(div)
 })
}

// const moreInfo = (id) =>{
//  fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
//   .then(res => res.json())
//   .then(data => showInfo(data.data))
// }

// const showInfo = (information) =>{
//   const infoContainer = document.getElementById('info-container')
//   for(const info of information){
//       console.log(info);
//   }
// } 
