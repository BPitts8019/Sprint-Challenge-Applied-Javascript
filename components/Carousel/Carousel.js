/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function buildCarousel () {
   //create elements
   const carousel = buildElement("div", null, "carousel");
   const leftButton = buildElement("div", " < ", "left-button");
   const rightButton = buildElement("div", " > ", "right-button");
   const images = [
      buildElement("img", null, null, "./assets/carousel/mountains.jpeg"),
      buildElement("img", null, null, "./assets/carousel/computer.jpeg"),
      buildElement("img", null, null, "./assets/carousel/trees.jpeg"),
      buildElement("img", null, null, "./assets/carousel/turntable.jpeg")
   ];

   //show first image
   function toggleElement (element) {
      element.style.display = (element.style.display === "")? "block" : "";
   }
   toggleElement(images[0]);

   //setup children array for easy appending to DOM
   let children = [leftButton];
   children = children.concat(images);
   children.push(rightButton);

   // setup event handlers
   let currentImg = 0;
   const MAX_INDEX = images.length-1;

   //--- handler ---//
   function changeImage(direction = 1) {
      direction = (direction >= 0)? 1 : -1;

      // hide current image
      toggleElement(images[currentImg]);

      // show next image
      currentImg += direction;
      if (currentImg > MAX_INDEX) {
         currentImg = 0;
      } else if (currentImg < 0) {
         currentImg = MAX_INDEX;
      }

      toggleElement(images[currentImg]);
   }

   //--- attach event handlers ---//
   leftButton.addEventListener("click",() => {
      changeImage(-1);
   });
   rightButton.addEventListener("click",() => {
      changeImage();
   });
   

   //attach children
   carousel.append(...children);

   //attach component to DOM
   const carouselContainer = document.querySelector(".carousel-container");
   carouselContainer.appendChild(carousel);

   

}

// Initialize the carousel
buildCarousel();