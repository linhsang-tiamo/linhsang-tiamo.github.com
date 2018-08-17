var words = [{
  id: 1,
  word: 'Good Morning, Bi',
  language: 'English',
  description: 'Khi người Anh chúc Linh Sang buổi sáng'
}, {
  word: 'Bom Dia, little Lily',
  language: 'Portuguese',
  description: 'A bitter-sweet melancholic yearning for something beautiful that is now gone.'
}, {
  word: 'Hypíaine',
  language: 'Ancient Greek',
  description: 'Often translated as ‘happiness’, it really means the deepest kind of fulfilment, often comprising a flourishing work and love life.'
}, {
  word: 'Te amo, Linh Sang',
  language: 'Spanish',
  description: 'A place where we feel safe, a ‘home’ from which we draw our strength and inspiration.'
}, {
  word: 'Ohayou, Bi',
  language: 'Japanese',
  description: 'An acute sensitivity to the transience of lovely things; a melancholic awareness that everything nice will fade combined with a rich enjoyment of this short-lived beauty.'
}, {
  word: 'Joh-eun achim',
  language: 'Korean',
  description: 'Contemplation of the fact that dust used to be other things – the walls of a city, the chief of the guards, a book, a great tree: dust is always the ultimate destination. Such contemplation may loosen the grip of our worldly desires.'
}, {
  word: 'God morgon',
  language: 'Swedish',
  description: 'A mood in which one feels that the universe as a whole possesses a mysterious, elusive, but real, beauty. Moonlight, snow on distant mountains, birds flying very high in the evening sky all feed this sensibility.'
}, {
  word: 'guten Morgen',
  language: 'German',
  description: 'A traditional break from work usually involving a drink of coffee or tea. In Swedish offices, you are strongly expected to take a fika, no matter how busy you are. It’s democracy and community in a beverage.'
}, {
  word: 'Bonjour',
  language: 'France',
  description: 'A feeling of edgy anticipation that makes one keep on looking out the window to see if an expected visitor is coming up the path.'
}, {
  word: "Ba'ajjeveri hendhuneh",
  language: 'Maldivian',
  description: 'A state of calm that Stoic philosophers aspired to. It’s a lack of agitation that comes from understanding the ways of the universe, accepting fate, knowing what one can control and focusing only on the things one can actually change.'
}, {
  word: 'Chúc Bi một buổi sáng ngọt ngào',
  language: 'Người Điện Bàn',
  description: 'The quality of being attractive because of being imperfect in some way. Instead of getting annoyed and upset by imperfections, wabi-sabi suggests that we should see the flaw itself as being part of what is charming.'
}];

var body = document.body,
    card = document.getElementById('card'),
    cardWord = document.getElementById('word'),
    cardLang = document.getElementById('language'),
    cardDesc = document.getElementById('description'),
    bgWordBehind = document.getElementById('behind'),
    bgWordInfront = document.getElementById('infront'),
    lastBtn = document.getElementById('last'),
    nextBtn = document.getElementById('next'),
    i = 0,
    numWords = words.length,
    cardUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/380275/lightpaperfibers.png',
    cardImg = new Image();

bgWordBehind.textContent = words[i].word;
bgWordInfront.textContent = words[i].word;
cardWord.textContent = words[i].word;
cardLang.textContent = words[i].language;
cardDesc.textContent = words[i].description;

cardImg.onload = function() {
  card.style.background = "#FFF url(" + cardUrl + ") repeat fixed center";
}
cardImg.src = cardUrl;

document.onkeydown = checkKey;
function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == '37') {
    goLeft();
  } else if (e.keyCode == '39') {
    goRight();
  }
}
lastBtn.addEventListener("click", function(e) {
  goLeft();
}, false);
nextBtn.addEventListener("click", function(e) {
  goRight();
}, false);

function goLeft() {
  if (i > 0)
    i--;
  else
    i = numWords - 1;
  changeCard();
}

function goRight() {
  if (i < numWords - 1)
    i++;
  else
    i = 0;
  changeCard();
}

function changeCard() {
  setTimeout(loadBG, 400);
  setTimeout(loadCard, 900);
  card.className += " fadeout";
  body.className += " fadeout";
}

function loadBG() {
  bgWordBehind.textContent = words[i].word;
  bgWordInfront.textContent = words[i].word;
  removeClass(body, "fadeout");
}

function loadCard() {
  removeClass(card, "fadeout");
  cardWord.textContent = words[i].word;
  cardLang.textContent = words[i].language;
  cardDesc.textContent = words[i].description;
}

//Function to easily remove classes, it takes two parameters: 
//1. The element to have a class removed
//2. The name of the class we want to remove from our element
function removeClass(el, _class) {
  //Check if the element exists, 
  //if it has a class,
  //& specifically if it has the class we want to remove
  if (el && el.className && el.className.indexOf(_class) >= 0) {
    //Find the class to be removed (including any white space around it) using a regex search pattern
    var pattern = new RegExp('\\s*' + _class + '\\s*');
    //Replace that search with white space, therefore removing the class 
    el.className = el.className.replace(pattern, ' ');
  }
}
