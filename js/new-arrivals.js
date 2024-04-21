document.addEventListener('DOMContentLoaded', function () {
    const bookList = document.getElementById('bookList');

    const books = [
        { title: 'Harry Potter and the Cursed Child', author: 'Jk Rowling', cover: '../images/1.jpeg' },
        { title: 'The Dark Side of Winter', author: 'Jk Maxwell',cover: '../images/2.jpeg' },
        { title: 'Sin Eater', author: 'Megan Campisi', cover: '../images/6.jpeg' },
    ];

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <img src="${book.cover}" alt="${book.title} Cover">
            <div class="book-details">
                <h2>${book.title}</h2>
                <p>Author: ${book.author}</p>               
            </div>
           
            
        `;
        bookList.appendChild(bookElement);
    });
});


