const items = [
  {
    title: "Игрушки для ванной детские набор для купания на присосках 0+",
    description: "Представляем вам магический набор игрушек для купания Funny Bubbles от YooToys. Он превратит обычное купание вашего малыша в захватывающее приключение! ",
    tags: ["мальчик", "девочка"],
    price: 38,
    img: "./img/bath_toys.png",
    rating: 4.4,
  },
  {
    title: "Мягкая игрушка капибара браслет на руку 20 см",
    description: "Представляем вам невероятно милую штучку — плюшевую капибару, которая с легкостью станет лучшим другом вашего ребенка! Эта маленькая обнимашка идеально подойдет для подарков в день рождения и станет отличным подарочком как для девочки, так и для мальчика. ",
    tags: ["мальчик", "девочка"],
    price: 48,
    img: "./img/capybara.png",
    rating: 3.1,
  },
  {
    title: "Набор инструментов детский Винт и Гайка",
    description: "Развивающий набор инструментов станет идеальным подарком для мальчиков на день рождения или любой другой праздник.",
    tags: ["мальчик"],
    price: 300,
    img: "./img/carpenter's_table.png",
    rating: 5.0,
  },
  {
    title: "Коляска для кукол 3 в 1",
    description: "Коляска для кукол Junion Kukibon представляет собой уникальное сочетание функциональности и стиля. В комплект входят люлька, прогулочный блок, автолюлька и корзина для хранения.",
    tags: ["девочка"],
    price: 220,
    img: "./img/doll_stroller.png",
    rating: 4.7,
  },
  {
    title: "Гусь обнимусь мягкая игрушка обнимашка 190 см",
    description: "Гусь обнимусь. Эта мягкая игрушка, плюшевая утка фигурка станет не только прекрасным украшением интерьера, но и верным спутником в сон. Создайте уют и комфорт в вашем доме. Серый гусь обнимусь с мягким телом подарит вам уютные объятия и поможет расслабиться.",
    tags: ["мальчик", "девочка"],
    price: 35,
    img: "./img/goose_hug.png",
    rating: 4.9,
  },
  {
    title: "Деревянная кухня",
    description: "Деревянная кухня Junion «Уголок вкусных историй» станет подходящим подарком для детей, которые мечтают почувствовать себя настоящим поваром. Множество функций и щепотка приправы из воображения — вот идеальный рецепт для тысяч блюд.",
    tags: ["девочка"],
    price: 450,
    img: "./img/kitchen.png",
    rating: 3.2,
  },
  {
    title: "Kuromi и My Melody книжка-игрушка из бумаги стикербук",
    description: "Увлекательная игрушка для девочек - набор Куроми из бумаги. Удивительный комплект предназначен для детей и включает в себя все необходимое для создания собственного кукольного дома. В набор входят карточки с милыми Kuromi & My Melody, предметами интерьера, мебелью, посудой и даже едой. Все части легко крепятся с помощью двухстороннего скотча, что делает процесс сборки простым и увлекательным.",
    tags: ["девочка"],
    price: 45,
    img: "./img/kuromi_house.png",
    rating: 2.9,
  },
  {
    title: "Электронный попит на русском антистресс",
    description: "Развивающая игрушка (развивашка) pop it предназначена для использования ребенком в возрасте от 5 лет. Это отличный подарок на день рождения девочке и мальчику. Развивающая игрушка для развития мелкой моторики, координации движений, внимательности и логического мышления.",
    tags: ["мальчик", "девочка"],
    price: 25,
    img: "./img/pop_it.png",
    rating: 3.4,
  },
  {
    title: "Пазлы для малышей крупные деревянные развивающие набор 8 шт",
    description: "Крупные деревянные пазлы для малышей от Woodkevich Kids – это идеальный выбор для родителей, ищущих игрушки, способствующие развитию мелкой моторики рук и логического мышления у своих детей.!",
    tags: ["мальчик", "девочка"],
    price: 40,
    img: "./img/puzzles.png",
    rating: 4.8,
  },
  {
    title: "Развивающие игрушки погремушки для новорожденных малышей 0+",
    description: "Набор погремушек Fergokids прекрасный подарок новорожденным малышам. Развивающий набор для самых маленьких состоит из 9 погремушек и прорезывателей грызунков. Мультяшные мордашки и зверушки станут первыми друзьями вашему ребенку. ",
    tags: ["мальчик", "девочка"],
    price: 50,
    img: "./img/rattles.png",
    rating: 3.2,
  },
  {
    title: "Световой меч джедая детский игрушечный светящийся лазерный",
    description: "Лазерный световой меч - это отличный подарок мальчику или девочке на день рождения и любой другой праздник. Такие интересные светящиеся игрушки помогут детям погрузиться в крутые галактические приключения star wars. Этот волшебный клинок станет пропуском в мир космических баталий.",
    tags: ["мальчик", "девочка"],
    price: 55,
    img: "./img/sword.png",
    rating: 3.7,
  },
  {
    title: "Машинка на пульте управления грузовая игрушечная детям",
    description: "Радиоуправляемый cамосвал NEWJEL — классная игрушка, которая надолго увлечет ребенка! Детализированная модель с водителем в кабине выполнена в масштабе 1:20. Она отличается реалистичным дизайном и не оставит равнодушным даже взрослого. ",
    tags: ["мальчик"],
    price: 120,
    img: "./img/truck.png",
    rating: 4.1,
  },
];

let currentState = [...items];

const itemsContainer = document.querySelector("#shop-items");
const itemTemplate = document.querySelector("#item-template");
const nothingFound = document.querySelector("#nothing-found");

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");
const sortControl = document.querySelector("#sort");
 
function sortByAlphabet(a, b) {
  return a.title.localeCompare(b.title);
}

function renderItems(arr) {
  nothingFound.textContent = "";
  itemsContainer.innerHTML = "";

  arr.forEach((item) => {
    itemsContainer.append(prepareShopItem(item));
  });

  if (!arr.length) {
    nothingFound.textContent = "Ничего не найдено";
  }
}

 function prepareShopItem(shopItem) {
   const { title, description, tags, img, price, rating } = shopItem;
   const item = itemTemplate.content.cloneNode(true);
   
   item.querySelector("h1").textContent = title;
   item.querySelector("p").textContent = description;
   item.querySelector("img").src = img;
   item.querySelector(".price").textContent = `${price} руб.`;
 
   const tagsHolder = item.querySelector(".tags");
   tags.forEach((tag) => {
     const element = document.createElement("span");
     element.textContent = tag;
     element.classList.add("tag");
     tagsHolder.append(element);
   });
   const ratingContainer = item.querySelector(".rating");
   const fullStars = Math.floor(rating);
   const halfStar = rating % 1 >= 0.5;
 
   for (let i = 0; i < fullStars; i++) {
     const star = document.createElement("i");
     star.classList.add("fa", "fa-star");
     ratingContainer.append(star);
   }
 
   if (halfStar) {
     const star = document.createElement("i");
     star.classList.add("fa", "fa-star-half-alt");
     ratingContainer.append(star);
   }
 
   return item; 
 }
 function applySearch() {
  const searchString = searchInput.value.trim().toLowerCase();

  if (!searchString) {
    currentState = [...items];
  } else {
    currentState = items.filter((el) =>
      el.title.toLowerCase().includes(searchString)
    );
  }

  currentState.sort(sortByAlphabet);
  renderItems(currentState);
  sortControl.value = "alphabet";
}

sortControl.addEventListener("change", (event) => {
  const selectedOption = event.target.value;

  switch (selectedOption) {
    case "expensive":
      currentState.sort((a, b) => b.price - a.price);
      break;
    case "cheap":
      currentState.sort((a, b) => a.price - b.price);
      break;
    case "rating":
      currentState.sort((a, b) => b.rating - a.rating);
      break;
    case "alphabet":
    default:
      currentState.sort(sortByAlphabet);
      break;
  }

  renderItems(currentState);
});

searchButton.addEventListener("click", applySearch);
searchInput.addEventListener("input", applySearch);
searchInput.addEventListener("search", applySearch);

currentState.sort(sortByAlphabet);
renderItems(currentState);