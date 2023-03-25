const ratingValues = document.querySelectorAll('.rating__value');
const submitButton = document.querySelector('.rating__submit');
const ratingContainer = document.querySelector('.rating');
const submittedContainer = document.querySelector('.submitted');
const submittedRating = document.querySelector('.submitted__rating--value');

let activeList = ''


//event listeners
ratingValues.forEach(value => addEventListener('click', addActiveClass));
submitButton.addEventListener('click', submitRating);

// functions
function addActiveClass(e) {
    if (activeList === '' && e.target.matches("li.rating__value")) {
        activeList = e.target;
        activeList.classList.add('active');
    } else if (e.target.matches("li.rating__value")) {
        activeList.classList.remove('active');
        activeList = e.target;
        activeList.classList.add('active');
    }
}

function submitRating(e) {
    let rating = 0;
    if (activeList !== '') {
        rating = activeList.innerHTML;

        ratingContainer.style.display = 'none';
        submittedRating.textContent = rating;
        submittedContainer.style.display = 'flex';
    }


}