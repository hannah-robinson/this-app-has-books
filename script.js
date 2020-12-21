const bookBtn = document.querySelector('.book-stack');
const clickMe = document.querySelector('.click-me');
const container = document.querySelector('.container');
const text = document.querySelector('h1');

bookBtn.addEventListener('click', makeBooksFly);

function makeBooksFly() {
  clickMe.remove();
  bookBtn.removeEventListener('click', makeBooksFly);
  bookBtn.remove();
  text.style.color = 'rgb(184, 184, 184)';

  // Add for-loop to create flying books

  for (let i = 0; i < 8; i++) {
    let randomNumber = Math.floor(Math.random() * 8);
    setTimeout(() => {
      const book = document.createElement('div');
      book.classList.add('book', 'book-' + (randomNumber));
      container.appendChild(book);
      const bookMirror = document.createElement('div');
      bookMirror.classList.add('book', 'book-' + (randomNumber + i));
      container.appendChild(bookMirror);
    }, (200 * i))

    setTimeout(() => {
      const book = document.createElement('div');
      book.classList.add('book', 'book-' + (randomNumber));
      container.appendChild(book);
      const bookMirror = document.createElement('div');
      bookMirror.classList.add('book', 'book-' + (randomNumber + i));
      container.appendChild(bookMirror);
    }, (250 * i))

    setTimeout(() => {
      const book = document.createElement('div');
      book.classList.add('book', 'book-' + (randomNumber));
      container.appendChild(book);
      const bookMirror = document.createElement('div');
      bookMirror.classList.add('book', 'book-' + (randomNumber + i));
      container.appendChild(bookMirror);
    }, (300 * i))

    setTimeout(() => {
      const book = document.createElement('div');
      book.classList.add('book', 'book-' + (randomNumber));
      container.appendChild(book);
      const bookMirror = document.createElement('div');
      bookMirror.classList.add('book', 'book-' + (randomNumber + i));
      container.appendChild(bookMirror);
    }, (360 * i))

    setTimeout(() => {
      const book = document.createElement('div');
      book.classList.add('book', 'book-' + (randomNumber));
      container.appendChild(book);
      const bookMirror = document.createElement('div');
      bookMirror.classList.add('book', 'book-' + (randomNumber + i));
      container.appendChild(bookMirror);
    }, (400 * i))

    setTimeout(() => {
      const book = document.createElement('div');
      book.classList.add('book', 'book-' + (randomNumber));
      container.appendChild(book);
      const bookMirror = document.createElement('div');
      bookMirror.classList.add('book', 'book-' + (randomNumber + i));
      container.appendChild(bookMirror);
    }, (500 * i))

    setTimeout(() => {
      const book = document.createElement('div');
      book.classList.add('book', 'book-' + (randomNumber));
      container.appendChild(book);
      const bookMirror = document.createElement('div');
      bookMirror.classList.add('book', 'book-' + (randomNumber + i));
      container.appendChild(bookMirror);
    }, (540 * i))
  }

  setTimeout(() => {
    text.innerHTML = 'This app <em>had</em> books.';
    text.style.color = '#000';
  }, 7000);  
}


