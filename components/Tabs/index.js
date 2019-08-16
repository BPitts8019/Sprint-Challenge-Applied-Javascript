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