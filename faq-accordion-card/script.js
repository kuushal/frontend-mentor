

// function toggleElement(id) {
//     if (document.getElementById(id).style.display == 'none') {
//         document.getElementById(id).style.display = 'flex';
//         document.getElementById(id).style.marginRight = '0.7rem';
//     }
//     else {
//         document.getElementById(id).style.display = 'none';
//     }
// }

const allQuestions = document.querySelectorAll('.faq__question')

allQuestions.forEach(question => addEventListener('click', toggleAnswer));

function toggleAnswer(e) {

    if (e.target && (e.target.matches('a') || e.target.matches('span.faq__question--arrow'))) {

        const idOfAnswer = e.target.parentNode.classList[1];

        if (document.getElementById(idOfAnswer).style.display == 'none') {
            document.getElementById(idOfAnswer).style.display = 'flex';
            e.target.parentNode.style.fontWeight = 'bold';
        } else {
            document.getElementById(idOfAnswer).style.display = 'none';
            e.target.parentNode.style.fontWeight = '';
        }
    }
}

