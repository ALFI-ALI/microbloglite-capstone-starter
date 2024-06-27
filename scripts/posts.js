/* Posts Page JavaScript */

"use strict";
// const apiBaseURL = "http://microbloglite.us-east-2.elasticbeanstalk.com";
function getLoginData () {
    const loginJSON = window.localStorage.getItem("login-data");
    return JSON.parse(loginJSON) || {};
}

// function post() {
    const loginData = getLoginData ()
    const header = new Headers()
    header.append( 'accept', 'application/json') 
    header.append(  'Authorization', `Bearer ${loginData.token}` ) 
    
    const requestOption = {
        method : "GET",
        headers : header,
          redirect: "follow"
    };


let table = document.getElementById("userTable");
let carts = document.getElementById("cart");
fetch('http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts', requestOption)
  .then(response => response.json())
  .then(data => {
    let cardsHtml = '';
    for (let i = 0; i < data.length; i++) {
      cardsHtml += `
      <div class = "container">
      <div class ="row gy-3">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">NAME: ${data[i].username}</h5>
              <p class="card-text">POST: ${data[i].text}</p>
              <p class="card-text">TIME: ${data[i].createdAt}</p>
            </div>
          </div>
       
          
        </div>
        </div> 
        </div>`;
     }
    
    carts.innerHTML = cardsHtml;
  })
  .catch(error => console.error('Error fetching data:', error));




  //logout function

  function logout () {
    const loginData = getLoginData();

    // GET /auth/logout
    const options = { 
        method: "GET",
        headers: { 
            // This header is how we authenticate our user with the
            // server for any API requests which require the user
            // to be logged-in in order to have access.
            // In the API docs, these endpoints display a lock icon.
            Authorization: `Bearer ${loginData.token}`,
        },
    };

    fetch(apiBaseURL + "/auth/logout", options)
        .then(response => response.json())
        .then(data => console.log(data))
        .finally(() => {
            // We're using `finally()` so that we will continue with the
            // browser side of logging out (below) even if there is an 
            // error with the fetch request above.

            window.localStorage.removeItem("login-data");  // remove login data from LocalStorage
            window.location.assign("/");  // redirect back to landing page
        });
}


