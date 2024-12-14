let list = document.getElementById("list");
let x = document.getElementById("x");
let navColumn = document.getElementById("navColumn");

list.addEventListener("click", () => {
  navColumn.classList.add("active");
});

x.addEventListener("click", () => {
  navColumn.classList.remove("active");
});

function createCard({ imgSrc, author, title, metaImg, oldPrice, newPrice }) {
  return `
        <div class="ft-card">
          <div class="ft-card-img">
            <img src="${imgSrc}" alt="img" />
          </div>
          <div class="ft-card-txt">
            <p>by ${author}</p>
            <h5>${title}</h5>
          </div>
          <div class="ft-date">
            <img src="${metaImg}" alt="Meta image" />
          </div>
          <div class="amount">
            <div>
              <s>$${oldPrice}</s>
              <b>${newPrice}</b>
            </div>
            <button>View More</button>
          </div>
        </div> 
       
       `;
}

const cardsData = [
  {
    imgSrc: "Image (1).png",
    author: "Determined-Poitras",
    title: "Create an LMS Website with LearnPress",
    metaImg: "Meta.png",
    oldPrice: "29.0",
    newPrice: "Free",
  },
  {
    imgSrc: "Image (2).png",
    author: "Determined-Poitras",
    title: "Create an LMS Website with LearnPress",
    metaImg: "Meta.png",
    oldPrice: "29.0",
    newPrice: "Free",
  },
  {
    imgSrc: "Image (3).png",
    author: "Determined-Poitras",
    title: "Create an LMS Website with LearnPress",
    metaImg: "Meta.png",
    oldPrice: "29.0",
    newPrice: "Free",
  },
  {
    imgSrc: "Image (4).png",
    author: "Determined-Poitras",
    title: "Create an LMS Website with LearnPress",
    metaImg: "Meta.png",
    oldPrice: "29.0",
    newPrice: "Free",
  },
  {
    imgSrc: "Image (5).png",
    author: "Determined-Poitras",
    title: "Create an LMS Website with LearnPress",
    metaImg: "Meta.png",
    oldPrice: "29.0",
    newPrice: "Free",
  },
  {
    imgSrc: "Image (6).png",
    author: "Determined-Poitras",
    title: "Create an LMS Website with LearnPress",
    metaImg: "Meta.png",
    oldPrice: "29.0",
    newPrice: "Free",
  },
];

const cardContainer = document.getElementById("card-container");

cardsData.forEach((cardData) => {
  cardContainer.innerHTML += createCard(cardData);
});
