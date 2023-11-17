
            const stars = document.querySelectorAll('.star');
            const reviewText = document.getElementById('review-text');
            const submitButton = document.getElementById('submit-review');
          
            // Add event listeners to stars to capture user rating
            stars.forEach((star, index) => {
              star.addEventListener('click', () => {
                const rating = index + 1;
                // Highlight stars based on the selected rating
                for (let i = 0; i <= index; i++) {
                  stars[i].classList.add('selected');
                }
                // Remove highlighting from other stars
                for (let i = index + 1; i < stars.length; i++) {
                  stars[i].classList.remove('selected');
                }
              });
            });
          
            // Add event listener to submit button to collect the review data
            submitButton.addEventListener('click', () => {
              const rating = document.querySelectorAll('.selected').length;
              const review = reviewText.value;
          
              // Send the review data to the server for storage (see backend steps below)
            });
          
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const reviews = [];

app.use(bodyParser.json());

// Endpoint to handle review submissions
app.post('/submit-review', (req, res) => {
  const { rating, review } = req.body;
  const newReview = { rating, review };
  reviews.push(newReview);
  res.status(201).send('Review submitted successfully');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
