const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer));

const correctAnswers = {
    question1: 'B',
    question2: 'D',
    question3: 'C',
    question4: 'A',
    question5: 'D',
}

function checkClickedAnswer(event){
    const clickedAnswerElement = event.currentTarget;
    let message;
    let answerColorCode;

    const selectedAnswer = clickedAnswerElement.dataset.answer;
    const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;
    const correctAnswer = correctAnswers[questionId];

    if(selectedAnswer === correctAnswer){
        message = '正解です!!!';
        answerColorCode = '';
        document.querySelector('#section-correct-answer').style.display = 'block';
    }else{
        message = '不正解です...';
        answerColorCode = '#a3057e';
    }

    alert(message);
    document.querySelector('span#correct-answer').style.color = answerColorCode;
       
}