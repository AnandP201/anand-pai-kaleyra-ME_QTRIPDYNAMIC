
import config from "../conf/index.js";

//Implementation to extract city from query params
function getCityFromURL(search) {
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
  return new URLSearchParams(search).get('city')


}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data
  let adventures = []
  try {
    adventures = await fetch(`${config.backendEndpoint}/adventures/?city=${city}`).then((res) => {
      return res.json()
    })
  } catch (e) {
    return null
  }

  return adventures

}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM
  const container = document.getElementById('data')

  adventures.forEach((item) => {

    container.innerHTML += `
    <div class="  col-lg-3 col-xs-6 col-sm-6 col-md-6 mb-2">
    <a href="/frontend/pages/adventures/detail/?adventure=${item.id}" class="activity-card" id=${item.id}>
    <div class="category-banner">${item.category}</div>
      <img src=${item.image} class="activity-card-image"/>
      
      <div class="d-flex justify-content-between p-2">
        <h6>${item.name}</h6>
        <p>₹ ${item.costPerHead}</p>
      </div>
      <div class="d-flex justify-content-between p-2">
        <h6>Duration</h6>
        <p>${item.duration} Hours</p>
      </div>
    </a>
  </div>`

  })



}

//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list
  let filteredList = []

  list.forEach((item) => {
    if (item.duration >= low && item.duration <= high) {
      filteredList.push(item)
    }
  })
  return filteredList;

}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list
  let filteredList = []

  list.forEach((item) => {
    if (categoryList.includes(item.category)) filteredList.push(item)
  })

  return filteredList

}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods

  const categoryFlag = filters.category.length > 0 ? true : false;
  const durationFlag = filters.duration === "" ? false : true
  let s = 0, e = 0

  if (durationFlag) {
    const arr = filters.duration.split("-");

    s = arr[0]
    e = arr[1]
  }


  if (categoryFlag && durationFlag) {
    list = filterByCategory(list, filters.category)
    list = filterByDuration(list, s, e)
  } else if (categoryFlag && !durationFlag) {
    list = filterByCategory(list, filters.category)
  } else if (!categoryFlag && durationFlag) {
    list = filterByDuration(list, s, e)
  }




  // Place holder for functionality to work in the Stubs
  return list;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage
  localStorage.setItem('filters', JSON.stringify(filters))

  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object
  const filters = JSON.parse(localStorage.getItem('filters'))


  // Place holder for functionality to work in the Stubs
  return filters;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills
  const filterContainer = document.getElementById('category-list')

  filters.category.forEach((item) => {
    filterContainer.innerHTML += `<div class="category-filter">
    ${item}
    </div>`
  })

}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
