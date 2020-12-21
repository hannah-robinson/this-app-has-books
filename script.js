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

  // Add for-loop to create flying books

  for (let i = 0; i < 8; i++) {
    let randomNumber1 = Math.floor(Math.random() * 8);
    let randomNumber2 = Math.floor(Math.random() * 8);
    let randomNumber3 = Math.floor(Math.random() * 8);
    let randomNumber4 = Math.floor(Math.random() * 8);
    let randomNumber5 = Math.floor(Math.random() * 8);
    let randomNumber6 = Math.floor(Math.random() * 8);
    let randomNumber7 = Math.floor(Math.random() * 8);
    let randomNumber8 = Math.floor(Math.random() * 8);
    let randomNumber9 = Math.floor(Math.random() * 8);
    let randomNumber10 = Math.floor(Math.random() * 8);
    let randomNumber11 = Math.floor(Math.random() * 8);
    let randomNumber12 = Math.floor(Math.random() * 8);
    let randomNumber13 = Math.floor(Math.random() * 8);
    let randomNumber14 = Math.floor(Math.random() * 8);

    setTimeout(() => {
      const bookWrapper = document.createElement('div');
      const book = document.createElement('div');
      bookWrapper.classList.add('book-wrapper', 'book-wrapper-' + i);
      container.appendChild(bookWrapper);
      book.classList.add('book', 'book-' + i);
      book.innerHTML = bookEmoji[randomNumber1];
      bookWrapper.appendChild(book);

      const altBookWrapper = document.createElement('div');
      const altBook = document.createElement('div');
      altBookWrapper.classList.add('book-wrapper', 'book-wrapper-' + (8 + i));
      altBook.classList.add('book', 'book-' + (8 + i));
      altBook.innerHTML = bookEmoji[randomNumber2];
      container.appendChild(altBookWrapper);
      altBookWrapper.appendChild(altBook);
    }, (200 * i))

    setTimeout(() => {
      const bookWrapper = document.createElement('div');
      const book = document.createElement('div');
      bookWrapper.classList.add('book-wrapper', 'book-wrapper-' + i);
      container.appendChild(bookWrapper);
      book.classList.add('book', 'book-' + i);
      book.innerHTML = bookEmoji[randomNumber3];
      bookWrapper.appendChild(book);

      const altBookWrapper = document.createElement('div');
      const altBook = document.createElement('div');
      altBookWrapper.classList.add('book-wrapper', 'book-wrapper-' + (8 + i));
      altBook.classList.add('book', 'book-' + (8 + i));
      altBook.innerHTML = bookEmoji[randomNumber4];
      container.appendChild(altBookWrapper);
      altBookWrapper.appendChild(altBook);
    }, (250 * i))

    setTimeout(() => {
      const bookWrapper = document.createElement('div');
      const book = document.createElement('div');
      bookWrapper.classList.add('book-wrapper', 'book-wrapper-' + i);
      container.appendChild(bookWrapper);
      book.classList.add('book', 'book-' + i);
      book.innerHTML = bookEmoji[randomNumber5];
      bookWrapper.appendChild(book);

      const altBookWrapper = document.createElement('div');
      const altBook = document.createElement('div');
      altBookWrapper.classList.add('book-wrapper', 'book-wrapper-' + (8 + i));
      altBook.classList.add('book', 'book-' + (8 + i));
      altBook.innerHTML = bookEmoji[randomNumber6];
      container.appendChild(altBookWrapper);
      altBookWrapper.appendChild(altBook);
    }, (300 * i))

    setTimeout(() => {
      const bookWrapper = document.createElement('div');
      const book = document.createElement('div');
      bookWrapper.classList.add('book-wrapper', 'book-wrapper-' + i);
      container.appendChild(bookWrapper);
      book.classList.add('book', 'book-' + i);
      book.innerHTML = bookEmoji[randomNumber7];
      bookWrapper.appendChild(book);

      const altBookWrapper = document.createElement('div');
      const altBook = document.createElement('div');
      altBookWrapper.classList.add('book-wrapper', 'book-wrapper-' + (8 + i));
      altBook.classList.add('book', 'book-' + (8 + i));
      altBook.innerHTML = bookEmoji[randomNumber8];
      container.appendChild(altBookWrapper);
      altBookWrapper.appendChild(altBook);
    }, (360 * i))

    setTimeout(() => {
      const bookWrapper = document.createElement('div');
      const book = document.createElement('div');
      bookWrapper.classList.add('book-wrapper', 'book-wrapper-' + i);
      container.appendChild(bookWrapper);
      book.classList.add('book', 'book-' + i);
      book.innerHTML = bookEmoji[randomNumber9];
      bookWrapper.appendChild(book);

      const altBookWrapper = document.createElement('div');
      const altBook = document.createElement('div');
      altBookWrapper.classList.add('book-wrapper', 'book-wrapper-' + (8 + i));
      altBook.classList.add('book', 'book-' + (8 + i));
      altBook.innerHTML = bookEmoji[randomNumber10];
      container.appendChild(altBookWrapper);
      altBookWrapper.appendChild(altBook);
    }, (400 * i))

    setTimeout(() => {
      const bookWrapper = document.createElement('div');
      const book = document.createElement('div');
      bookWrapper.classList.add('book-wrapper', 'book-wrapper-' + i);
      container.appendChild(bookWrapper);
      book.classList.add('book', 'book-' + i);
      book.innerHTML = bookEmoji[randomNumber11];
      bookWrapper.appendChild(book);

      const altBookWrapper = document.createElement('div');
      const altBook = document.createElement('div');
      altBookWrapper.classList.add('book-wrapper', 'book-wrapper-' + (8 + i));
      altBook.classList.add('book', 'book-' + (8 + i));
      altBook.innerHTML = bookEmoji[randomNumber12];
      container.appendChild(altBookWrapper);
      altBookWrapper.appendChild(altBook);
    }, (500 * i))

    setTimeout(() => {
      const bookWrapper = document.createElement('div');
      const book = document.createElement('div');
      bookWrapper.classList.add('book-wrapper', 'book-wrapper-' + i);
      container.appendChild(bookWrapper);
      book.classList.add('book', 'book-' + i);
      book.innerHTML = bookEmoji[randomNumber13];
      bookWrapper.appendChild(book);

      const altBookWrapper = document.createElement('div');
      const altBook = document.createElement('div');
      altBookWrapper.classList.add('book-wrapper', 'book-wrapper-' + (8 + i));
      altBook.classList.add('book', 'book-' + (8 + i));
      altBook.innerHTML = bookEmoji[randomNumber14];
      container.appendChild(altBookWrapper);
      altBookWrapper.appendChild(altBook);
    }, (540 * i))
  }

  setTimeout(() => {
    text.innerHTML = 'This app <em>had</em> books.';
    text.style.color = '#000';
  }, 7000);  
}
