// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
/**
 * A utility function for building components
 * @param {string} tagName 
 * @param {string} content 
 * @param {string} className 
 * @param {string} url 
 */
function buildElement (tagName, content = null, className = null, url = null) {
   // create element
   const tag = document.createElement(tagName);

   //add properties
   if (content) tag.textContent = content;
   if (className) tag.classList.add(className);
   if (url && tag.src !== undefined) tag.src = url;
   if (url && tag.href !== undefined) tag.href = url;

   //return element
   return tag;
}


function Tabs () {
   //Get data from API
   axios
      .get("https://lambda-times-backend.herokuapp.com/topics")
      .then(response => {
         // console.log(JSON.stringify(response, null, 3));
         // create elements
         const topicsData = response.data.topics;
         const topicsElement = document.querySelector(".topics");
         const topics = topicsData.map(topic => buildElement("div", topic, "tab"));

         // attach children
         topicsElement.append(...topics);
      })
      .catch(error => {
         console.log("There was a problem while getting data from the server.");
         console.log(error);
      });


   // const response = {
   //    "data": {
   //       "topics": [
   //          "javascript",
   //          "bootstrap",
   //          "technology",
   //          "jquery",
   //          "node.js"
   //       ]
   //    },
   //    "status": 200,
   //    "statusText": "OK",
   //    "headers": {
   //       "content-type": "application/json; charset=utf-8",
   //       "content-length": "69"
   //    },
   //    "config": {
   //       "url": "https://lambda-times-backend.herokuapp.com/topics",
   //       "method": "get",
   //       "headers": {
   //          "Accept": "application/json, text/plain, */*"
   //       },
   //       "transformRequest": [
   //          null
   //       ],
   //       "transformResponse": [
   //          null
   //       ],
   //       "timeout": 0,
   //       "xsrfCookieName": "XSRF-TOKEN",
   //       "xsrfHeaderName": "X-XSRF-TOKEN",
   //       "maxContentLength": -1
   //    },
   //    "request": {}
   // };

   // // create elements
   // const topicsData = response.data.topics;
   // const topicsElement = document.querySelector(".topics");
   // const topics = topicsData.map(topic => buildElement("div", topic, "tab"));

   // // attach children
   // topicsElement.append(...topics);
}

// Initialize Tabs
(() => {
   Tabs();
})();