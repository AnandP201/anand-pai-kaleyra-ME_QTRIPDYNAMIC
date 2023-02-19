import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL

  return new URLSearchParams(search).get('adventure')

  // Place holder for functionality to work in the Stubs
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  let data = {}
  try {
    data = await fetch(`http://localhost:8082/adventures/detail/?adventure=${adventureId}`).then((res) => {
      return res.json()
    })
  } catch (e) {
    return null;
  }



  // Place holder for functionality to work in the Stubs
  return data
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  const adventureNameElem = document.getElementById('adventure-name')
  const adventureSubElem = document.getElementById('adventure-subtitle')
  const adventureConElem = document.getElementById('adventure-content')

  adventureNameElem.innerHTML = adventure.name
  adventureSubElem.innerHTML = adventure.subtitle
  adventureConElem.innerHTML = adventure.content

  addBootstrapPhotoGallery(adventure.images)

}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {


  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  const photoGallery = document.getElementById('photo-gallery')
  photoGallery.innerHTML = ""

  photoGallery.innerHTML = `
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
  ${images.map((_, index) => {
    return `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to=${index} aria-label="Slide ${index}" aria-current=${index === 0 ? "true" : ""} class=${index === 0 ? 'active' : ''}></button>`
  })}
  
  </div>
  <div class="carousel-inner">
  ${images.map((image, index) => {
    return `<div class="carousel-item ${index === 0 ? 'active' : ''}">
    <img src=${image} class="d-block w-100 activity-card-image" alt="...">
  </div>`

  })}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div > `
}



//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
