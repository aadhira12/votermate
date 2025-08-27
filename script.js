/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}
fetch('https://api.congress.gov/v3/congress?api_key=6QHdydabSDQmvM50LZyk8DNmItX1JKtNtriwSAHo')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  document.getElementById('title1cs').innerHTML += "Our current congress, the " + data.congresses[0].name + " starts in " + data.congresses[0].startYear + " and ends in " + data.congresses[0].endYear
  document.getElementById('1c').innerHTML += data.congresses[0].sessions[0].chamber
 
  document.getElementById('2c').innerHTML += data.congresses[0].sessions[1].chamber

   document.getElementById('1s').innerHTML += data.congresses[0].sessions[1].startDate
  document.getElementById('1e').innerHTML += data.congresses[0].sessions[1].endDate
   document.getElementById('2s').innerHTML += data.congresses[0].sessions[1].startDate
  document.getElementById('2e').innerHTML += data.congresses[0].sessions[1].endDate
})
  .catch((error) => console.error("Error fetching data:", error));



fetch('https://v3.openstates.org/people.geo?lat=42.36&lng=71.05&apikey=8f3fd912-76da-4560-80f2-4f90e17042df')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  
})
  .catch((error) => console.error("Error fetching data:", error));


fetch("https://api.open.fec.gov/v1/election-dates/?page=1&per_page=20&election_state=USA&office_sought=P&min_election_date=01%2F01%2F2024&max_election_date=12%2F31%2F2024&min_create_date=01%2F01%2F2024&max_create_date=10%2F14%2F2024&min_update_date=01%2F01%2F2024&max_update_date=12%2F31%2F2024&election_year=2024&min_primary_general_date=09%2F10%2F2024&max_primary_general_date=12%2F31%2F2024&sort=-election_date&sort_hide_null=false&sort_null_only=false&sort_nulls_last=false&api_key=YRwz2N3LKwa9xhlaz488VsVbKwW6rBmBefD8wRFP")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  
})
  .catch((error) => console.error("Error fetching data:", error));


// Step 1: Create a new h1 element


// https://v3.openstates.org/people?jurisdiction=4&district=5&page=1&per_page=10&apikey=462d4d16-e974-486b-ac55-e1707d41ef19
// const Geocodio = require('geocodio-library-node');
// const geocodio = new Geocodio('YOUR_API_KEY');

// geocoder.geocode('1109 N Highland St, Arlington VA', ['cd', 'stateleg'])
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.error(err);
//   }
// );

// geocoder.reverse('38.886672,-77.094735', ['cd', 'stateleg'])
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.error(err);
//   }
// );



    // script.js

// Set the election date
const electionDate = new Date('November 5, 2024 00:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = electionDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the results
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // If the countdown is over
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = '<h2>Election Day is here!</h2>';
    }
}, 1000);

    


// You can also leave out the parameter and define the "GEOCODIO_API_KEY" environment variable instead
fetch('https://www.googleapis.com/civicinfo/v2/representatives&key=AIzaSyDdWQ8-Bc5DznpaGnOnmNiA9Rha5FBYyUA')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  
})
  // .catch((error) => console.error("Error fetching data:", error));
df <- state.name %>% lapply(function(state){
  state <- state %>% tolower() %>% str_replace(" ","-")
  df <- fromJSON(glue("https://static01.nyt.com/elections-assets/2020/data/api/2020-11-03/state-page/{state}.json"))$data$races$counties[[1]]
  df$state <- state
  return(df)
}) %>% bind_rows()