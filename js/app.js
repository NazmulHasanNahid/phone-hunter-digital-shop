//fetch phone data
const phone = () =>{
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value ; 
    document.getElementById('input-field').value = '' ;
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
     .then(res => res.json())
     .then(data => showPhone(data.data.slice(0,20)))
}

const showPhone  = (phones)=>{
const phoneContainer = document.getElementById('phone-container')
phoneContainer.innerHTML = '' ;

 phones.forEach(phone =>{
    //console.log(phone);
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = ` 
    <div class="card p-3 text-center shadow-lg ">
    <img  src="${phone.image}" class="card-img-top  w-50 mx-auto" alt="...">
    <div class="card-body border-0  ">
      <h5 class="card-title">Brand: ${phone.brand}</h5>
      <p class="card-text"> Model: ${phone.phone_name}</p>
      <button onClick="moreInfo('${phone.slug}')" class="btn btn-info text-white">Details</button>
    </div>
  </div>
     `
     phoneContainer.appendChild(div)
 })
}

//fetch details api
const moreInfo = (id) =>{

 fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  .then(res => res.json())
  .then(data => showInfo(data.data))
}

const showInfo = (information) =>{
 console.log(information);
  const infoContainer = document.getElementById('info-container')
  infoContainer.innerHTML = '' ;
  const div = document.createElement('div')
  div.classList.add('col')
  div.innerHTML= ` 
  <div class="card p-3 shadow-lg">
  <img   src="${information.image}" class="card-img-top img-fluid w-50 mx-auto" alt="...">
  <div class="card-body">
    <p class="card-title"> <span class="fw-bold">Brand</span> : ${information.brand}</p>
    <p class="card-text"> <span class="fw-bold">Model</span> : ${information.name}</p>
    <p class="card-text"><span class="fw-bold"> ChipSet</span> : ${information.mainFeatures.chipSet}</p>
    <p class="card-text"> <span class="fw-bold"> Disply Size</span> : ${information.mainFeatures.displaySize}</p>
    <p class="card-text"> <span class="fw-bold">Memory</span>  : ${information.mainFeatures.memory}</p>
    <p class="card-text"> <span class="fw-bold">Sensor</span>  : ${information.mainFeatures.sensors}</p>
    <p class="card-text"> <span class="fw-bold">Relese Date</span>  : ${information.releaseDate}</p>
    <p class="text-center text-info">Others Information <br> _________</p>
    <p class="card-text"> <span class="fw-bold">NFC</span>  : ${information.others.NFC}</p>
    <p class="card-text"> <span class="fw-bold">Bluetooth</span>  : ${information.others.Bluetooth}</p>
    <p class="card-text"> <span class="fw-bold">Radio</span>  : ${information.others.Radio}</p>
    <p class="card-text"> <span class="fw-bold">Usb</span>  : ${information.others.USB}</p>
    <p class="card-text"> <span class="fw-bold">GPS</span>  : ${information.others.GPS}</p>
    <p class="card-text"> <span class="fw-bold">WALN</span>  : ${information.others.WLAN}</p>
    

  </div>
</div>
  `
  infoContainer.appendChild(div)
  
} 
