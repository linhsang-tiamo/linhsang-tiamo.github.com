var words = [{
  id: 1,
  word: 'Good Morning, Bi ^^',
  language: 'English',
  description: 'Ở xứ sở sương mù xinh đẹp, nơi ánh bình minh vẫn thường hay ngủ quên sau màng sương lạnh giá, nhịp sống đã bắt đầu hối hả với tất cả mọi người. Người Anh ngủ dậy sớm không để làm gì, chỉ để pha một tách trà và nghĩ về  đất nước hình chữ S xa xôi mà thầm chúc một buổi sáng tốt lành đến một thiên thần vẫn đang hì hục ngủ, nàng tên là Linh Sang.'
}, {
  word: 'Bom Dia, little "Lily"',
  language: 'Portuguese',
  description: 'Xa xa bên kia ngọn đồi, người Bồ Đào Nha cũng đã bắt đầu rượng dậy sau một đêm dài nhiều mộng mị. Họ không mộng về những đêm trăng thanh, không mộng về những đêm gió mát. Họ mộng về  một đêm đi bão ăn mừng World Cup cùng CR7. Thôi mộng với mị, sáng rồi tất cả đều phải ra sân hô to cho tui: Bom Dia, little Lily ^^.'
}, {
  word: 'Te amo, Linh Sang',
  language: 'Spanish',
  description: 'Và ngôn ngữ đẹp nhất có lẽ đến từ quê hương của những bản tình ca guitar - "Español", thay mặt những tay nghệ sĩ TBN vẫn còn đang ngủ say trong kiếp cầm ca, anh chúc Sang một buổi sáng ngọt ngào - Te amo, Sang ^^'
}, {
  word: 'Buổi sáng ngọt ngào',
  language: 'Người Lạ Đây',
  description: 'Chúc Sang mỗi sáng thức dậy là một ngày vui. If by any chance, u greet me in the morning, plz do it in Spanish thôi nhé ^^'
},
{
  word: 'Joh-eun achim',
  language: 'Korean',
  description: 'To be continued.'
}, {
  word: 'Bonjour',
  language: 'France',
  description: 'To be continued.'
}, {
  word: "Ba'ajjeveri hendhuneh",
  language: 'Maldivian',
  description: 'To be continued.'
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
