const container = document.querySelector(".wrapper");
const createCardBtn = document.querySelector(".button-create");
const cardCounterField = document.querySelector(".card-counter");
const removeCardBtn = document.querySelector(".close-btn");
const burgerBtn = document.querySelector(".burger");
const menu = document.querySelector(".menu-content");

// Menu animations
burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("toggle");
  menu.classList.toggle("is-active");
});

cardCounterVar = 0; // increment each time when adding a new card to the DOM
createCardBtn.addEventListener("click", () => {
  const card = createCard();
  container.append(card);
  cardCounterVar++;
  cardCounterField.textContent = cardCounterVar;
});

// Creating card element
function createCard() {
  const parentDiv = document.createElement("div"); // main div for the card
  parentDiv.classList.add("card");
  const headDiv = document.createElement("div");
  headDiv.classList.add("card-head");
  const cardTitle = document.createElement("h1");
  cardTitle.textContent = "Title";
  headDiv.append(cardTitle);
  const closeBtn = document.createElement("button");

  // Removing card functionality
  closeBtn.addEventListener("click", () => {
    cardCounterVar--; // decrement when removing a card from the DOM
    cardCounterField.textContent = cardCounterVar;
    const closeBtnParent = closeBtn.parentElement; // .card-head div (class)
    const cardParent = closeBtnParent.parentElement; // .card div (main card element)
    cardParent.remove();
  });
  closeBtn.innerHTML = "&times;";
  closeBtn.classList.add("close-btn");
  headDiv.append(closeBtn);
  parentDiv.append(headDiv);
  const bodyDiv = document.createElement("div");
  bodyDiv.classList.add("card-body");
  bodyDiv.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi similique natus temporibus amet quis tempore eum ";
  parentDiv.append(bodyDiv);
  return parentDiv;
}
