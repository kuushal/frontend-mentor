const shareButtonPrimary = document.querySelector('.article__details__share--icon');
const shareButtonSecondary = document.querySelector('.secondary');


shareButtonPrimary.addEventListener('click', showSocialsToShareArticle);
shareButtonSecondary.addEventListener('click', hideSocials);

function showSocialsToShareArticle(e) {
    if (window.innerWidth < 960) {
        document.getElementsByClassName('article__owner')[0].style.display = 'none';
        document.getElementsByClassName('article__share')[0].style.display = 'flex';
    } else {
        if (document.getElementsByClassName('article__share')[0].style.display === 'none') {
            document.getElementsByClassName('article__share')[0].style.display = 'flex';
            document.getElementsByClassName('bottom-arrow')[0].style.display = 'block';
        } else {
            document.getElementsByClassName('article__share')[0].style.display = 'none';
            document.getElementsByClassName('bottom-arrow')[0].style.display = 'none';
        }

    }
}

function hideSocials() {
    if (window.innerWidth < 960) {
        document.getElementsByClassName('article__share')[0].style.display = 'none';
        document.getElementsByClassName('article__owner')[0].style.display = 'flex';
    }
}