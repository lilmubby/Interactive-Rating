let rated = document.querySelector('.rated');
let thanks = document.querySelector('.thanks');
let rating = document.querySelectorAll('.rating-container .rating');
let text = document.querySelector('.thanks div');
let btn = document.querySelector('.btn');
// this creates a new class for the div in the thank you section
text.classList.add('text');


// this adds a click event to the rating numbers
for (let i = 0; i < rating.length; i++) {
  let rate = rating[i].textContent;
  
  rating[i].addEventListener('click', () => {
    
    switch (i) {
      case 0:
        rating[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
        break;
      case 1:
        rating[0].style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
        break;
      case 2:
        rating[0].style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating[1].style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
        break;
      case 3:
        rating[0].style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating[1].style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating[2].style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
        break;
      case 4:
        rating[0].style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating[1].style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating[2].style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating[3].style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
        break;
      case 5:
        rating[0].style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating[1].style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating[2].style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating[3].style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating[4].style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
      break;
      
      default:
        break;
    }
    console.log(rate);
    text.textContent = 'You have selected ' + rate + ' out of 5';
    console.log(text);
  });
}

// this toggles the display section 
btn.addEventListener('click', () => {
    rated.style.display = 'none';
    thanks.style.display = 'block';
});