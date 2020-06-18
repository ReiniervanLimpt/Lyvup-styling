const newCard = document.querySelectorAll('.new__card');

newCard.forEach((card) => {
  const expandText = document.getElementsByClassName('more__text');
  const expandReceivers = document.getElementsByClassName('expanded__receivers');
  const shortReceivers = document.getElementsByClassName('new__card_receivers');

  card.addEventListener('click', function() {
    let card_index = Array.prototype.indexOf.call(newCard, card);

    if (expandText[card_index].classList.contains('hide') && expandReceivers[card_index].classList.contains('hide')) {
      expandText[card_index].classList.remove('hide');
      expandReceivers[card_index].classList.remove('hide');
      expandReceivers[card_index].classList.add('show');
      shortReceivers[card_index].style.display = 'none';
    } else {
      expandText[card_index].classList.add('hide');
      expandReceivers[card_index].classList.remove('show');
      expandReceivers[card_index].classList.add('hide');
      shortReceivers[card_index].style.display = 'flex';
    }
  });
});