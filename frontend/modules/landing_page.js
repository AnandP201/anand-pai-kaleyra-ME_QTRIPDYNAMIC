import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  let data = []
  try {
    data = await fetch('http://localhost:8082/cities')
      .then((res) => { return res.json() })
  } catch (e) {
    return null;
  }

  return data

}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  const container = document.getElementById('data')
  container.innerHTML += ` 
  <div class="col-lg-3 col-xs-12 col-md-6 mb-2">
  <a href="/frontend/pages/adventures/?city=${id}" class="card" id=${id}>
    <div class="tile">
      <img src="${image}" class="rounded img-fluid" />
      <div class="tile-text text-center">
        <h5>${city.toUpperCase()}</h5>
        <p>${description}</p>
      </div>
    </div>
  </a>
  </div>`


}

export { init, fetchCities, addCityToDOM };
