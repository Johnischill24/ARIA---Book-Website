import { getBooks, getReviews } from './data.js';

// Function to render books
function renderBooks(books) {
  const booksContainer = document.getElementById('books-container');
  booksContainer.innerHTML = ''; // Clear previous content

  books.forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.innerHTML = `
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <button data-isbn="${book.isbn}" class="view-reviews">View Reviews</button>
    `;
    booksContainer.appendChild(bookElement);
  });

  // Add event listeners to "View Reviews" buttons
  document.querySelectorAll('.view-reviews').forEach((button) => {
    button.addEventListener('click', (event) => {
      const isbn = event.target.getAttribute('data-isbn');
      getReviews(isbn, renderReviews);
    });
  });
}

// Function to render reviews
function renderReviews(reviews) {
  const reviewsContainer = document.getElementById('reviews-container');
  reviewsContainer.innerHTML = ''; // Clear previous content

  if (reviews.length === 0) {
    reviewsContainer.innerHTML = '<p>No reviews available for this book.</p>';
    return;
  }

  reviews.forEach((review) => {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `
      <p>${review.text}</p>
      <p><strong>Reviewer:</strong> ${review.reviewer}</p>
    `;
    reviewsContainer.appendChild(reviewElement);
  });
}

// Fetch and render books on page load
getBooks(renderBooks);