let list = document.getElementById("list");
let x = document.getElementById("x");
let navColumn = document.getElementById("navColumn");

list.addEventListener("click", () => {
  navColumn.classList.add("active");
});

x.addEventListener("click", () => {
  navColumn.classList.remove("active");
});

function createCard({ imgSrc1, author1, title1, metaImg1, oldPrice1, newPrice1 }) {
  return `
        <div class="ft-card">
          <div class="ft-card-img">
            <img src="${imgSrc1}" alt="img" />
          </div>
          <div class="ft-card-txt">
            <p>by ${author1}</p>
            <h5>${title1}</h5>
          </div>
          <div class="ft-date">
            <img src="${metaImg1}" alt="Meta image" />
          </div>
          <div class="amount">
            <div>
              <s>$${oldPrice1}</s>
              <b>${newPrice1}</b>
            </div>
            <button>View More</button>
          </div>
        </div> 
       
       `;
}


function createSecondCard({ imgSrc2, author2, title2, metaImg2, oldPrice2, newPrice2 }) {
  return `
        <div class="ft-card">
          <div class="ft-card-img">
            <img src="${imgSrc2}" alt="img" />
          </div>
          <div class="ft-card-txt">
            <p>by ${author2}</p>
            <h5>${title2}</h5>
          </div>
          <div class="ft-date">
            <img src="${metaImg2}" alt="Meta image" />
          </div>
          <div class="amount">
            <div>
              <s>$${oldPrice2}</s>
              <b>${newPrice2}</b>
            </div>
            <button>View More</button>
          </div>
        </div> 
       
       `;
}




const cardsData = [
  {
    imgSrc1: "Image (1).png",
    author1: "Determined-Poitras",
    title1: "Create an LMS Website with LearnPress",
    metaImg1: "Meta.png",
    oldPrice1: "29.0",
    newPrice1: "Free",
  },
  {
    imgSrc1: "Image (2).png",
    author1: "Determined-Poitras",
    title1: "Create an LMS Website with LearnPress",
    metaImg1: "Meta.png",
    oldPrice1: "29.0",
    newPrice1: "Free",
  },
  {
    imgSrc1: "Image (3).png",
    author1: "Determined-Poitras",
    title1: "Create an LMS Website with LearnPress",
    metaImg1: "Meta.png",
    oldPrice: "29.0",
    newPrice1: "Free",
  },
  // {
  //   imgSrc: "Image (4).png",
  //   author: "Determined-Poitras",
  //   title: "Create an LMS Website with LearnPress",
  //   metaImg: "Meta.png",
  //   oldPrice: "29.0",
  //   newPrice: "Free",
  // },
  // {
  //   imgSrc: "Image (5).png",
  //   author: "Determined-Poitras",
  //   title: "Create an LMS Website with LearnPress",
  //   metaImg: "Meta.png",
  //   oldPrice: "29.0",
  //   newPrice: "Free",
  // },
  // {
  //   imgSrc: "Image (6).png",
  //   author: "Determined-Poitras",
  //   title: "Create an LMS Website with LearnPress",
  //   metaImg: "Meta.png",
  //   oldPrice: "29.0",
  //   newPrice: "Free",
  // },
];
const secondCardData = [
  
  {
    imgSrc2: "Image (4).png",
    author2: "Determined-Poitras",
    title2: "Create an LMS Website with LearnPress",
    metaImg2: "Meta.png",
    oldPrice2: "29.0",
    newPrice2: "Free",
  },
  {
    imgSrc2: "Image (5).png",
    author2: "Determined-Poitras",
    title2: "Create an LMS Website with LearnPress",
    metaImg2: "Meta.png",
    oldPrice2: "29.0",
    newPrice2: "Free",
  },
  {
    imgSrc2: "Image (6).png",
    author2: "Determined-Poitras",
    title2: "Create an LMS Website with LearnPress",
    metaImg2: "Meta.png",
    oldPrice2: "29.0",
    newPrice2: "Free",
  },

]

const cardContainer = document.getElementById("card-container");
const secondCardContainer = document.getElementById("second-card-container")

cardsData.forEach((cardData) => {
  cardContainer.innerHTML += createCard(cardData);
});

secondCardData.forEach((cardData)=>{
  secondCardContainer.innerHTML += createSecondCard(cardData)
});
