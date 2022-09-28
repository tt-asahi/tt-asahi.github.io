const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer));

function checkClickedAnswer(event){
    const checkClickedAnswerElement = event.currentTarget;
    let message;
    let answerColorCode;

    const selectedAnswer = checkClickedAnswerElement.dataset.answer;
    const correctAnswer = 'B';

    if(selectedAnswer === correctAnswer){
        message = '正解です';
        answerColorCode = '';

    }else{
        message = '不正解です';
        answerColorCode = '#a3057e';

    }

    

    alert(message);
    document.querySelector('span#correct-answer').style.color = answerColorCode;
    document.querySelector('#section-correct-answer').style.display = 'block';
    
}