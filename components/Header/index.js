// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
   //create elements
   const header = buildElement("div", null, "header");
   const children = [
      buildElement("span", "SMARCH 28, 2019", "date"),
      buildElement("h1", "Lambda Times"),
      buildElement("span", "98°", "temp")
   ];

   // attach children
   header.append(...children);

   //return completed component
   return header;
}


// Initialize header
(() => {
   // attach header to the DOM
   const headerContainer = document.querySelector(".header-container");
   headerContainer.appendChild(Header());
})();