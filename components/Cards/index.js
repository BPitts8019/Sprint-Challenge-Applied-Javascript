// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
function Cards () {
   axios
      .get("https://lambda-times-backend.herokuapp.com/articles")
      .then(response => {
         // console.log(JSON.stringify(response, null, 3));
         buildCard(response.data);
      })
      .catch(error => {
         console.log("There was a problem getting the articles data from the server");
         console.log(error);
      });


   // const response = {
   //    "data": {
   //       "articles": {
   //          "javascript": [
   //             {
   //                "headline": "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
   //                "authorPhoto": "./assets/sir.jpg",
   //                "authorName": "SIR RUFF'N'STUFF"
   //             },
   //             {
   //                "headline": "Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences",
   //                "authorPhoto": "./assets/bones.jpg",
   //                "authorName": "BONES R. LIFE"
   //             },
   //             {
   //                "headline": "When to Rest, When to Spread: Why There Are Two Meanings Behind '...'",
   //                "authorPhoto": "./assets/puppers.jpg",
   //                "authorName": "PUPPER S. DOGGO"
   //             },
   //             {
   //                "headline": "Typescript: Ten Things you Should Know Before Building Your Next Angular Application",
   //                "authorPhoto": "./assets/sir.jpg",
   //                "authorName": "SIR RUFF'N'STUFF"
   //             }
   //          ],
   //          "bootstrap": [
   //             {
   //                "headline": "Bootstrap 5: Get a Sneak Peak at all the New Features",
   //                "authorPhoto": "./assets/fido.jpg",
   //                "authorName": "FIDO WALKSALOT"
   //             },
   //             {
   //                "headline": "UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)",
   //                "authorPhoto": "./assets/max.jpg",
   //                "authorName": "MAX GOODBOYE"
   //             },
   //             {
   //                "headline": "The Hottest New Bootstrap 4 Components Every Developer Needs to Know About",
   //                "authorPhoto": "./assets/max.jpg",
   //                "authorName": "MAX GOODBOYE"
   //             }
   //          ],
   //          "technology": [
   //             {
   //                "headline": "AI: What Are the Ethical Ramifications of the Future?",
   //                "authorPhoto": "./assets/max.jpg",
   //                "authorName": "MAX GOODBOYE"
   //             },
   //             {
   //                "headline": "AR or VR: How We Will See the World Through a Digital Lense",
   //                "authorPhoto": "./assets/max.jpg",
   //                "authorName": "MAX GOODBOYE"
   //             },
   //             {
   //                "headline": "Quantum Computing: Where we Are Now, and Where We Will Be Very Soon",
   //                "authorPhoto": "./assets/max.jpg",
   //                "authorName": "MAX GOODBOYE"
   //             }
   //          ],
   //          "jquery": [
   //             {
   //                "headline": "History of Javascript Libraries: from jQuery to React",
   //                "authorPhoto": "./assets/puppers.jpg",
   //                "authorName": "PUPPER S. DOGGO"
   //             },
   //             {
   //                "headline": "jQuery Animations: When and Where to Use Them, and Not CSS",
   //                "authorPhoto": "./assets/fido.jpg",
   //                "authorName": "FIDO WALKSALOT"
   //             },
   //             {
   //                "headline": "Why I Use jQuery in Every Application I Create and Why You Should Too",
   //                "authorPhoto": "./assets/fido.jpg",
   //                "authorName": "FIDO WALKSALOT"
   //             }
   //          ],
   //          "node": [
   //             {
   //                "headline": "Node.js in 2018: Which Framework? Express, Sails, Hapi?",
   //                "authorPhoto": "./assets/sir.jpg",
   //                "authorName": "SIR RUFF'N'STUF"
   //             },
   //             {
   //                "headline": "MongoDB: NoSQL vs. SQL, the Debate Continues..",
   //                "authorPhoto": "./assets/bones.jpg",
   //                "authorName": "BONES R. LIFE"
   //             }
   //          ]
   //       }
   //    },
   //    "status": 200,
   //    "statusText": "OK",
   //    "headers": {
   //       "content-type": "application/json; charset=utf-8",
   //       "content-length": "2240"
   //    },
   //    "config": {
   //       "url": "https://lambda-times-backend.herokuapp.com/articles",
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

   // buildCard(response.data);
}

function buildCard (data) {
   //loop through articles
   const categoriesList = Object.keys(data.articles);
   const cardGroups = categoriesList.map(category => {
      const articles = data.articles[category].map(article => {
         //create Elements
         const card = buildElement("div", null, "card");
         const children = [
            buildElement("div", article.headline, "headline"),
            buildAuthor(article)
         ];

         //attach children
         card.append(...children);

         //return component
         return card;
      });

      return articles;
   });
   let children = [];
   cardGroups.forEach(group => {
      children = children.concat(group);
   });

   // attach children
   const cardsContainer = document.querySelector(".cards-container");
   cardsContainer.append(...children);
}

function buildAuthor (data) {
   //create Elements
   const author = buildElement("div", null, "author");
   const children = [
      buildImage(data.authorPhoto),
      buildElement("span", `By ${data.authorName}`)
   ];

   //attach children
   author.append(...children);

   //return component
   return author;
}

function buildImage (url) {
   //create Elements
   const container = buildElement("div", null, "img-container");
   const imgTag = buildElement("img", null, null, url);

   //attach children
   container.appendChild(imgTag);

   //return component
   return container;
}

// Initialize Articles
Cards();