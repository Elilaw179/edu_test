let list = document.getElementById("list");
let x = document.getElementById("x");
let navColumn = document.getElementById("navColumn");

list.addEventListener("click", () => {
  navColumn.classList.add("active");
});

x.addEventListener("click", () => {
  navColumn.classList.remove("active");
});

function topCardContainer(icon, tag, courses) {
  return `<div class="card">
            <div class="card-icon">
              <img src="${icon}" alt="" />
            </div>
            <div class="card-txt"> 
              <h5>${tag}</h5> 
              <p>${courses}</p>
            </div>
          </div>`;
}

const createTopCards = [
  {
    icon: "Icon.png",
    tag: "Art & Design",
    courses: "38 Courses",
  },
  {
    icon: "Component 2.png",
    tag: "Development",
    courses: "38 Courses",
  },
  {
    icon: "Icon (1).png",
    tag: "Communication",
    courses: "38 Courses",
  },
  {
    icon: "Group.png",
    tag: "Videography",
    courses: "38 Courses",
  },
  {
    icon: "Icon (2).png",
    tag: "Photography",
    courses: "38 Courses",
  },
];

const secondCreateTopCards = [
  {
    icon: "Icon (3).png",
    tag: "Marketing",
    courses: "38 Courses",
  },
  {
    icon: "Icon (4).png",
    tag: "Content Writing",
    courses: "38 Courses",
  },
  {
    icon: "Icon (5).png",
    tag: "Finance",
    courses: "38 Courses",
  },
  {
    icon: "Icon (7).png",
    tag: "Science",
    courses: "38 Courses",
  },
  {
    icon: "Icon.png",
    tag: "Network",
    courses: "38 Courses",
  },
];

let topBox = document.getElementById("top-box");
let secondTopBox = document.getElementById("second-top-box");
function renderTopCards(container, data) {
  data.forEach(({ icon, tag, courses }) => {
    container.innerHTML += topCardContainer(icon, tag, courses);
  });
}
renderTopCards(topBox, createTopCards);
renderTopCards(secondTopBox, secondCreateTopCards);

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
];

const secondCardData = [
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
const secondCardContainer = document.getElementById("second-card-container");

function renderCards(container, data) {
  data.forEach((cardData) => {
    container.innerHTML += createCard(cardData);
  });
}

renderCards(cardContainer, cardsData);
renderCards(secondCardContainer, secondCardData);

function enableSliding(container, speed = 50) {
  let scrollPosition = 0;
  let isUserScrolling = false;
  let scrollTimer;

  function slide() {
    if (!isUserScrolling) {
      scrollPosition += 2;
      container.scrollLeft = scrollPosition;

      if (scrollPosition >= container.scrollWidth - container.clientWidth) {
        scrollPosition = 0;
      }
    }
  }

  container.addEventListener("scroll", () => {
    isUserScrolling = true;
    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(() => {
      isUserScrolling = false;
    }, 3000);
  });

  setInterval(slide, speed);
}

enableSliding(cardContainer, 50);
enableSliding(secondCardContainer, 100);

function activeCountRecord({ num, txt }) {
  return `<div class="count-bx" id="counting-box">
          <div>
            <h3>${num}</h3>
          <p>${txt}</p>
          </div>
        </div>`;
}

const countBoxes = [
  {
    num: "25+",
    txt: "Active Students",
  },
  {
    num: "899",
    txt: "Total Courses",
  },
  {
    num: "158",
    txt: "Instructor",
  },
  {
    num: "100%",
    txt: "Satisfaction Rate",
  },
];

let countingBox = document.getElementById("counting-box");
function renderCountBox(container, data) {
  data.forEach((item) => {
    container.innerHTML += activeCountRecord(item);
  });
}
renderCountBox(countingBox, countBoxes);

function lpContent(img, p, tag, paragraph, btn) {
  return `  <img src="${img}"alt="img" /><span>
          <div class="lp-txt-box">
            <div class="lp-txt-div">
              <p>${p}</p>
              <br />
              <h4>${tag}</h4>
            </div>
            <div class="lp-btn-div">
              <p>
                ${paragraph}
              </p>

              <button>${btn}</button>
            </div>
          </div>
        </span>`;
}
const learnPressItems = [
  {
    img: "Mask group.png",
    p: "GET MORE POWER FROM",
    tag: "LearnPress Add-Ons",
    paragraph:
      "The next level of LearnPress - LMS WordPress Plugin. More  Powerful, Flexible and Magical Inside.",
    btn: "Explore Courses",
  },
];

let learnPress = document.getElementById("learn-press");

function renderLearnPress(container, data) {
  data.forEach(({ img, p, tag, paragraph, btn }) => {
    container.innerHTML += lpContent(img, p, tag, paragraph, btn);
  });
}
renderLearnPress(learnPress, learnPressItems);
