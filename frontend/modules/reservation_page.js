import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  let reservations = [];
  try {
    reservations = await fetch(`${config.backendEndpoint}/reservations`).then(
      (res) => {
        return res.json();
      }
    );
  } catch (e) {
    return null;
  }

  // Place holder for functionality to work in the Stubs
  return reservations;
}

function getDateString(d) {
  const date = new Date(d);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    date.getDate() +
    " " +
    monthNames[date.getMonth()] +
    " " +
    date.getFullYear() +
    ", " +
    date.toLocaleTimeString("en-IN")
  );
}

function getDateStr(date) {
  const arr = date.split("-");

  return parseInt(arr[2]) + "/" + parseInt(arr[1]) + "/" + arr[0];
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table
  if (reservations.length === 0) {
    document.getElementById("no-reservation-banner").style.display = "block";
    document.getElementById("reservation-table-parent").style.display = "none";
    return;
  } else {
    document.getElementById("no-reservation-banner").style.display = "none";
    document.getElementById("reservation-table-parent").style.display = "block";
  }
  const table = document.getElementById("reservation-table");

  reservations.forEach((item) => {
    table.innerHTML += ` <tr>
        <td><b>${item.id}</b></td>
        <td>${item.name}</td>
        <td>${item.adventureName}</td>
        <td>${item.person}</td>
        <td>${getDateStr(item.date)}</td>
        <td>${item.price}</td>
        <td>${getDateString(item.time)}</td>
        <td><button id=${
          item.id
        } class="reservation-visit-button"><a href="/pages/detail/?adventure=${
      item.adventure
    }">Visit Adventure</a></button></td>
      </tr>`;
  });
  //Conditionally render the no-reservation-banner and reservation-table-parent

  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */
}

export { fetchReservations, addReservationToTable };
