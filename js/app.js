//error message
const error =    document.getElementById('error')
//clear field function
const clearField = () =>{
  const phoneContainer = document.getElementById('phone-container')
  phoneContainer.innerHTML = '' ;
  const infoContainer = document.getElementById('info-container')
  infoContainer.innerHTML = '' ;
}


//fetch phone data
const phone = () =>{
    //get input value
    
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value ; 
    document.getElementById('input-field').value = '' ;
     //error handleing
    
    if(searchText === typeof 'number' || searchText == ''  ){
    error.innerText ="Please Search By Phone Name..!"
    clearField()
    }
    else if(searchText < 0 ){
      error.innerText ="Sorry You Can't used Negative value..!" 
      clearField()
    }
    else {
      const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
      fetch(url)
       .then(res => res.json())
       .then(data => {
         if(data.data.length === 0){
          clearField()
          error.innerText ="Sorry No Result Found..!" 
         }
         else{
          showPhone(data.data.slice(0,20))
          error.innerText =" "
            
         }
       })
  
    }
}

const showPhone  = (phones)=>{
const phoneContainer = document.getElementById('phone-container')
phoneContainer.innerHTML = '' ;
const infoContainer = document.getElementById('info-container')
infoContainer.innerHTML = '' ;

 phones.forEach(phone =>{
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
  const infoContainer = document.getElementById('info-container')
  infoContainer.innerHTML = '' ;
  const div = document.createElement('div')
  div.classList.add('col')
  div.innerHTML= ` 
  <div class="card   p-3 shadow-lg ">
  <img  src="${information.image}" class="card-img-top img-fluid w-50 mx-auto " alt="...">
  <div class="card-body ">
  <p class="text-center text-info fw-bold my-3">Main Feature<br> _________</p>

    <div class="bg-light border border-info  p-3" >
    <p class="card-title"> <span class="fw-bold">Brand</span> : ${information.brand}</p>
    <p class="card-text"> <span class="fw-bold">Model</span> : ${information.name}</p>
    <p class="card-text"><span class="fw-bold"> ChipSet</span> : ${information.mainFeatures.chipSet}</p>
    <p class="card-text"> <span class="fw-bold"> Disply Size</span> : ${information.mainFeatures.displaySize}</p>
    <p class="card-text"> <span class="fw-bold">Memory</span>  : ${information.mainFeatures.memory}</p>
    <p class="card-text"> <span class="fw-bold">Sensor</span>  : ${information.mainFeatures.sensors}</p>
    <p id="date" class="card-text"> <span class="fw-bold">Relese Date</span>  : ${information.releaseDate ?information.releaseDate :'Not Found'} </p>
    </div>
    <p class="text-center text-info fw-bold my-3">Others Information  <br> _________</p>
    <div class="bg-light  p-3  border border-info">
    <p class="card-text"> <span class="fw-bold">NFC</span>  : ${information?.others?.NFC? information.others.NFC: " Not Found" }</p>
    <p class="card-text"> <span class="fw-bold">Bluetooth</span>  : ${information?.others?.Bluetooth? information.others.Bluetooth:" Not Found"}</p>
    <p class="card-text"> <span class="fw-bold">Radio</span>  : ${information?.others?.Radio? information.others.Radio:"Not Found"}</p>
    <p class="card-text"> <span class="fw-bold">Usb</span>  : ${information?.others?.USB ? information.others.USB :"Not Found"}</p>
    <p class="card-text"> <span class="fw-bold">GPS</span>  : ${information?.others?.GPS? information.others.GPS :"Not Found"}</p>
    <p class="card-text"> <span class="fw-bold">WALN</span>  : ${information?.others?.WLAN? information.others.WLAN :"Not Found"}</p>
    </div>
  </div>
</div>
  `
  infoContainer.appendChild(div)
  
} 


