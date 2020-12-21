const bookBtn = document.querySelector('.book-stack');
const clickMe = document.querySelector('.click-me');
const container = document.querySelector('.container');
const text = document.querySelector('h1');

const bookEmoji = {
  0: "📕",
  1: "📘",
  2: "📖",
  3: "📗",
  4: "📙",
  5: "📓",
  6: "📒",
  7: "📔"
};

bookBtn.addEventListener('click', makeBooksFly);

function makeBooksFly() {
  clickMe.remove();
  bookBtn.removeEventListener('click', makeBooksFly);
  bookBtn.remove();
  text.style.color = 'rgb(184, 184, 184)';

  // Add for loop to create books flying left
  
  const book1 = document.createElement('div');
  const book2 = document.createElement('div');
  const book3 = document.createElement('div');
  const book4 = document.createElement('div');

  book1.classList.add('book', 'book-1');
  // book1.innerHTML = '&#128210;';
  container.appendChild(book1);

  setTimeout(() => {
    book2.classList.add('book', 'book-2');
    // book2.innerHTML = '&#128217;';
    container.appendChild(book2);
  }, 100)

  setTimeout(() => {
    book3.classList.add('book', 'book-1');
    // book3.innerHTML = '&#128216;';
    container.appendChild(book3);
  }, 150)

  setTimeout(() => {
    book2.classList.add('book', 'book-1');
    // book2.innerHTML = '&#128217;';
    container.appendChild(book2);
  }, 200)

  setTimeout(() => {
    book4.classList.add('book', 'book-1');
    // book4.innerHTML = '&#128215;';
    container.appendChild(book4);
  }, 300)

  setTimeout(() => {
    book2.classList.add('book', 'book-2');
    // book2.innerHTML = '&#128217;';
    container.appendChild(book2);
  }, 400)

  setTimeout(() => {
    book3.classList.add('book', 'book-1');
    // book3.innerHTML = '&#128216;';
    container.appendChild(book3);
  }, 500)

  setTimeout(() => {
    book2.classList.add('book', 'book-2');
    // book2.innerHTML = '&#128217;';
    container.appendChild(book2);
  }, 600)

  setTimeout(() => {
    book4.classList.add('book', 'book-1');
    // book4.innerHTML = '&#128215;';
    container.appendChild(book4);
  }, 700)
  

  setTimeout(() => {
    text.innerHTML = 'This app <em>had</em> books.';
  }, 3000);

  
}


