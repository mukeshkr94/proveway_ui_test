// Get all the cards
const cards = document.querySelectorAll('.card');
let currentOpenCard = null;

// Function to open a card
function openCard(card) {
  const c = card.querySelector('.s-b-con');
  const r = card.querySelector('.c-box');
  
  if (currentOpenCard && currentOpenCard !== card) {
    const prevC = currentOpenCard.querySelector('.s-b-con');
    const prevR = currentOpenCard.querySelector('.c-box');
    if (prevC) prevC.style.display = 'none';
    if (prevR) prevR.checked = false;
    currentOpenCard.style.borderColor = '#c8c8c8'; 
    currentOpenCard.style.backgroundColor = '';
  }

  if (c) c.style.display = 'flex';
  if (r) r.checked = true;
  card.style.borderColor = '#ff6b82'; 
  card.style.backgroundColor = '#fff2f5'; 
  currentOpenCard = card;
}

// Initialize the first card state
if (cards.length > 1) {
  openCard(cards[1]); // Open the second card by default
}

// Add event listeners to each card
cards.forEach((card) => {
  card.addEventListener('click', () => {
    openCard(card);
  });
});
