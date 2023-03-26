const shareButtonPrimary = document.querySelector('.article__details__share--icon');
const shareButtonSecondary = document.querySelector('.secondary');


shareButtonPrimary.addEventListener('click', showSocialsToShareArticle);
shareButtonSecondary.addEventListener('click', hideSocials);

function showSocialsToShareArticle(e) {
    document.getElementsByClassName('article__owner')[0].style.display = 'none';
    document.getElementsByClassName('article__share')[0].style.display = 'flex';
}

function hideSocials() {
    document.getElementsByClassName('article__share')[0].style.display = 'none';
    document.getElementsByClassName('article__owner')[0].style.display = 'flex';
}