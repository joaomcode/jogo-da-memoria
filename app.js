document.addEventListener('DOMContentLoaded', () => {
  // opções de cartões
  const cardArray = [
    {
      name: 'cheeseburger',
      img: '.github/cheeseburger.png',
    },
    {
      name: 'cheeseburger',
      img: '.github/cheeseburger.png',
    },
    {
      name: 'fries',
      img: '.github/fries.png',
    },
    {
      name: 'fries',
      img: '.github/fries.png',
    },
    {
      name: 'hotdog',
      img: '.github/hotdog.png',
    },
    {
      name: 'hotdog',
      img: '.github/hotdog.png',
    },
    {
      name: 'ice-cream',
      img: '.github/ice-cream.png',
    },
    {
      name: 'ice-cream',
      img: '.github/ice-cream.png',
    },
    {
      name: 'milkshake',
      img: '.github/milkshake.png',
    },
    {
      name: 'milkshake',
      img: '.github/milkshake.png',
    },
    {
      name: 'pizza',
      img: '.github/pizza.png',
    },
    {
      name: 'pizza',
      img: '.github/pizza.png',
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#resultado')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  // Criação da tabela
  function createBoard() {
    for(let i = 0; i < cardArray.length; i++){
      var card = document.createElement('img')
      card.setAttribute('src', '.github/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  // Check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('Você encontrou um par!')
      cards[optionOneId].setAttribute('src', '.github/white.png')
      cards[optionTwoId].setAttribute('src', '.github/white.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', '.github/blank.png')
      cards[optionTwoId].setAttribute('src', '.github/blank.png')
      alert('Tente novamente')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Parabéns! Você encontrou todos os cartões!'
    }
  }

  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

createBoard()
})