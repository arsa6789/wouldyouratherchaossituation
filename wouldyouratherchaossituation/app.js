const questionEl = document.getElementById('question');
const option1Btn = document.getElementById('option1');
const option2Btn = document.getElementById('option2');
const newQuestionBtn = document.getElementById('newQuestion');
const resultEl = document.getElementById('result');

const questions = [
   {
    question: 'Would you rather.....',
    option1: 'Have a pet dragon',
    option2: 'Be a wizard',
    response1: 'Roaring success! A dragon would make every day epic!',
    response2: 'Abracadera! Casting spells sounds magical!'
   },
   {
    question: 'Would you rather.....',
    option1: 'Explore deep space',
    option2: 'Explore the deep ocean',
    response1: 'To infinity and beyond! The cosmos await!',
    response2: 'Deep sea diving! Discovering sunken treasures and alien-like fish!'
   },
   {
    question: 'Would you rather.....',
    option1: 'Always be 10 minutes late',
    option2: 'Always be 20 minutes early',
    response1: 'Running on fashionably late time!',
    response2: 'Always prepared and never rushed!'
   },
   {
    question: 'Would you rather.....',
    option1: 'Be able to fly',
    option2: 'Be able to turn invisible',
    response1: 'Soaring through the clouds like a bird!',
    response2: 'Now you see me, now you don’t!'
   },
   {
    question: 'Would you rather.....',
    option1: 'Only be able to whisper',
    option2: 'Only be able to shout',
    response1: 'Shh... keeping everything top secret!',
    response2: 'LOUD AND PROUD! EVERYONE CAN HEAR YOU!'
   },
   {
    question: 'Would you rather.....',
    option1: 'Live in a treehouse',
    option2: 'Live in a houseboat',
    response1: 'High up in the canopy with the birds!',
    response2: 'Floating gently on the waves every night!'
   },
   {
    question: 'Would you rather.....',
    option1: 'Have the power oftelekinesis',
    option2: 'Have the power of telepathy',
    response1: 'Moving objects with just a flick of your mind!',
    response2: 'Hearing what everyone is really thinking!'
   },
   {
    question: 'Would you rather.....',
    option1: 'Eat only sweet foods for a year',
    option2: 'Eat only savory foods for a year',
    response1: 'A sugar rush that never seems to end!',
    response2: 'Salty, crunchy goodness for days!'
   },
   {
    question: 'Would you rather.....',
    option1: 'Travel 100 years into the past',
    option2: 'Travel 100 years into the future',
    response1: 'History in real-time! Time to meet the ancestors.',
    response2: 'Flying cars and futuristic gadgets await!'
   },
   {
    question: 'Would you rather.....',
    option1: 'Never need to sleep again',
    option2: 'Never need to eat again',
    response1: 'Extra hours every single day to conquer the world!',
    response2: 'No more meal prep, grocery shopping, or dishes!'
   }
];

function displayQuestion(){
    const randomIndex = Math.floor(Math.random() * questions.length)
    const currentQuestion = questions[randomIndex]

    questionEl.textContent = currentQuestion.question;
    option1Btn.textContent = currentQuestion.option1;
    option2Btn.textContent = currentQuestion.option2;
    option1Btn.disabled = false;
    option2Btn.disabled = false;
    resultEl.textContent = '';

    option1Btn.dataset.response = currentQuestion.response1;
    option2Btn.dataset.response = currentQuestion.response2;
}
function handleChoice(response){
    resultEl.textContent = response;
    option1Btn.disabled = true;
    option2Btn.disabled = true;
}
option1Btn.addEventListener('click', ()=>handleChoice(option1Btn.dataset.response));
option2Btn.addEventListener('click', ()=>handleChoice(option2Btn.dataset.response));
newQuestionBtn.addEventListener('click', displayQuestion);

displayQuestion();