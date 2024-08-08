// Reference For elements
const introducingContainer = document.querySelector('.welcome_container'),
  startBTN = document.querySelector('.start-btn'),
  rightBTN = document.querySelector('.right-btn-for-question'),
  leftBTN = document.querySelector('.left-btn-for-question'),
  cencelBTNForlasDivUP = document.querySelector('.degrees-for-up .cencel'),
  restartBTNForlastDivUP = document.querySelector('.degrees-for-up .restart'),
  cencelBTNForlastDivDOWN = document.querySelector('.degrees-for-down .cencel'),
  restartBTNForlastDivDOWN = document.querySelector(
    '.degrees-for-down .restart'
  ),
  submitBTN = document.querySelector('.submit'),
  divOfBTNOfQuiz = document.querySelector('.symbol-control')
let orderOfQuestion = document.querySelector('.no-of-question'),
  theMainQuestion = document.querySelector('.the-question'),
  theOptions = document.querySelectorAll('.options'),
  theQuestionContainer = document.querySelector('.main-question-containar'),
  theDegreesContainerUP = document.querySelector('.degrees-for-up'),
  theDegreesContainerDOWN = document.querySelector('.degrees-for-down'),
  userDegreeUP = document.querySelector('.degrees-for-up .degree'),
  userDegreeDOWN = document.querySelector('.degrees-for-down .degree'),
  qc = document.querySelector('.the-main-question'),
  scoreCount = 0,
  questionNumber = 0,
  HTMLmin = document.querySelector('.min'),
  HTMLsec = document.querySelector('.sec'),
  minutes = 10,
  seconds = 15

// class of Questions objects and the objects
class Questions {
  constructor(theQuestion, correctAnswer, options) {
    this.theQuestion = theQuestion
    this.correctAnswer = correctAnswer
    this.options = options
  }
}
q1 = new Questions(
  'If the angle between the two vectors A and B is &Theta;, then [(A &#8963; B) + (B &#8963; A)] =',
  'Zero',
  ['AB sin &Theta; n', '2(A.B)', '2(A &#8963; B)', 'Zero']
)
q2 = new Questions(
  'When the projectile which is projected at an angle reaches the same horizontal level after time T, then it reaches the maximum height after time',
  '&#189; T',
  ['&#189; T', 'T', '2T', 'T<sup>2</sup>']
)
q3 = new Questions(
  'The horizontal displacement reached by two identical projectiles is the same when they are projected at the same initial velocity from the same point at angles',
  '40° and 50°',
  ['80° and 60°', '40° and 50°', '80° and 20°', '80° and 30°']
)
q4 = new Questions(
  'If an object is projected upwards at an angle of 30° to the horizontal and its initial velocity is 20 m/s, so the maximum height reached by the object is ......  (Consider: g= 10 m/s<sup>2</sup>)',
  '5m',
  ['5m', '10m', '15m', '20m']
)
q5 = new Questions(
  'A boy projects a ball with velocity 10 m/s at an angle of 30° to the horizontal. So, the maximum distance reached by the ball at the same level of projection is ... (g= 10 m/s<sup>2</sup>)',
  '8.66m',
  ['2.60m', '5.20m', '4.33m', '8.66m']
)
q6 = new Questions(
  'When a bus that is moving in a straight line stops suddenly, the bus passengers get thrown ',
  'Forward',
  ['Forward', 'To the left', 'To the right', 'Backward']
)
q7 = new Questions(
  'When a bus moves suddenly from rest in the forward direction, the bus passengers get thrown',
  'Backward',
  ['To the right', 'Forward', 'Backward', 'To the bottom']
)
q8 = new Questions(
  'The continuity of rotation of the blades of the electric fan for a period of time although the electric current is turned off is due to ',
  'inertia',
  [
    'the equilibrium of the acting forces',
    'the heavy mass of the fan blades',
    'inertia',
    'the stored amount of electric current',
  ]
)
q9 = new Questions(
  'When blowing up a balloon and leaving it free, the balloon moves',
  'in the opposite direction of the air rush',
  [
    'in the direction of the air rush',
    'in a direction right to the direction of the air rush',
    'in the opposite direction of the air rush',
    'in a direction left to the direction of the air rush',
  ]
)
q10 = new Questions(
  'If a body (x) acts on another body (y) by a force of 9 N, then the reaction force of body y on body x equals',
  '-9N',
  ['1N', '-9N', '9N', '4N']
)
q11 = new Questions(
  'If the resultant force acting on a moving body vanished, it means that its ........... vanished',
  'Acceleration',
  ['Displacement', 'Mass', 'Acceleration', 'Ram']
)
q12 = new Questions(
  'The fundamental physical quantities of the following are',
  'Time and mass',
  [
    'Mass and volume',
    'The length and the area',
    'Time and mass',
    'The velocity and acceleration',
  ]
)
q13 = new Questions(
  'If the radius of the hydrogen atom is 0.053nm , then it is equivalent to',
  'All the previous correct',
  [
    '0.53 &#215; 10<sup>-10</sup>m',
    '5.3 &#215; 10<sup>-11</sup>m',
    '53 &#215; 10<sup>-12</sup>m',
    'All the previous correct',
  ]
)
q14 = new Questions("What's Ram's birthday ?", '22 December 2005', [
  '22 December 2005',
  '22 December 2006',
  '2 June 2006 ',
  '2 July 2005',
])
// array that contain the questions
let arrayOfQuestions = [
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
  q8,
  q9,
  q10,
  q11,
  q12,
  q13,
  q14,
]

// function that get the array and randomize it
function randomArray(array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}

// timer of countdown
function countDownTimer() {
  news = seconds -= 1 // seconds = seconds -1
  HTMLmin.innerHTML = minutes
  HTMLsec.innerHTML = seconds
  if (minutes == 0 && seconds == 0) {
    alert('Sorry, your time is ran out')
    checker()
  } else if (seconds == 00) {
    minutes -= 1
    seconds = 60
    HTMLsec.innerHTML = `0${news}`
  } else if (seconds < 10) {
    HTMLsec.innerHTML = `0${news}`
  }
}

// cencel  btn quiz for down
cencelBTNForlastDivDOWN.onclick = function () {
  theDegreesContainerDOWN.classList.add('hide')
  introducingContainer.classList.remove('hide')
  document.body.style.backgroundColor = '#000'
}

// restart btn quiz for down
restartBTNForlastDivDOWN.onclick = function () {
  initial()
  theQuestionContainer.classList.remove('hide')
  theDegreesContainerDOWN.classList.add('hide')
}

// cencel btn quiz for up
cencelBTNForlasDivUP.onclick = function () {
  document.body.style.backgroundColor = '#000'
  theDegreesContainerUP.classList.add('hide')
  introducingContainer.classList.remove('hide')
}

// restart btn quiz for up
restartBTNForlastDivUP.onclick = function () {
  initial()
  theQuestionContainer.classList.remove('hide')
  theDegreesContainerUP.classList.add('hide')
}

// submit btn button
submitBTN.onclick = function () {
  checker()
}

// arrows control BTNs display
rightBTN.onclick = function () {
  questionNumber += 1
  displayQuiz()
}
leftBTN.onclick = function () {
  questionNumber -= 1
  displayQuiz()
}

// handle last and first question
function handle() {
  rightBTN.classList.remove('disable')
  if (orderOfQuestion.innerHTML == 1) {
    leftBTN.classList.add('disable')
    rightBTN.style.display = 'flex'
  } else if (orderOfQuestion.innerHTML == arrayOfQuestions.length) {
    leftBTN.style.display = 'flex'
    rightBTN.classList.add('disable')
  } else {
    leftBTN.classList.remove('disable')
    rightBTN.classList.remove('disable')
    rightBTN.style.display = 'flex'
  }
}

// checking for a correct answer
function checker() {
  confirmSubmmiting = false
  confirmSubmmiting1 = false
  // Container of options (NODE)
  let answers = document.querySelectorAll('.selected')
  if (
    answers.length != arrayOfQuestions.length &&
    seconds != 0 &&
    minutes != 0
  ) {
    confirmSubmmiting = confirm(
      'You do not answer all questions, submit any where?'
    )
  } else if (
    answers.length == arrayOfQuestions.length &&
    seconds != 0 &&
    minutes != 0
  ) {
    confirmSubmmiting1 = confirm('Are you sure submit a quiz?')
  }
  // Check for a correct answer and add a degree to scoreCount
  if (
    confirmSubmmiting == true ||
    confirmSubmmiting1 == true ||
    (minutes == 0 && seconds == 0)
  ) {
    theQuestionContainer.classList.add('hide')
    clearInterval(logic)
    for (let i = 0; i < answers.length; i++) {
      if (
        arrayOfQuestions[answers[i].parentElement.parentElement.id]
          .correctAnswer ==
        arrayOfQuestions[answers[i].parentElement.parentElement.id].options[
          answers[i].id
        ]
      ) {
        scoreCount += 1
      } else {
        scoreCount = scoreCount
      }
    }
    // control degrees container
    if (scoreCount > 7) {
      userDegreeUP.innerHTML = scoreCount
      theDegreesContainerUP.classList.remove('hide')
      document.body.style.backgroundColor = '#00ff40'
    } else {
      userDegreeDOWN.innerHTML = scoreCount
      theDegreesContainerDOWN.classList.remove('hide')
      document.body.style.backgroundColor = '#cf0a0a'
    }
  }
}

// selected options
function selected() {
  let optionsNode = document.querySelectorAll('.container-of-options')
  for (let i = 0; i < optionsNode.length; i++) {
    optionsNode[i].querySelectorAll('.options').forEach((element) => {
      element.addEventListener('click', () => {
        optionsNode[i].querySelectorAll('.options').forEach((element) => {
          element.classList.remove('selected')
        })
        element.classList.add('selected')
      })
    })
  }
}

// display questions
function displayQuiz() {
  let questionsNode = document.querySelectorAll('.containerOFall')
  // display questions and hide others
  questionsNode.forEach((card) => {
    card.classList.add('hide')
  })
  questionsNode[questionNumber].classList.remove('hide')
  // the question number
  orderOfQuestion.innerHTML = questionNumber + 1
  // handle last and first question
  handle()
  // select an option
  selected()
}

// create a question
function createQuiz() {
  // randomally sort questions
  randomArray(arrayOfQuestions)
  for (let i of arrayOfQuestions) {
    // randomally sort options
    randomArray(i.options)
    // create container of question
    divContainer = document.createElement('div')
    divContainer.className = 'containerOFall hide'
    // create a quetion
    let question = document.createElement('p')
    question.classList.add('the-question')
    question.innerHTML = i.theQuestion
    // creat container of options and append options on it
    let optionContainer = document.createElement('div')
    optionContainer.classList.add('container-of-options')
    optionContainer.innerHTML = `
                <div class="options" id="0">${i.options[0]}</div>
                <div class="options" id="1">${i.options[1]}</div>
                <div class="options" id="2">${i.options[2]}</div>
                <div class="options" id="3">${i.options[3]}</div> `
    // add question and container of options to container
    divContainer.appendChild(question)
    divContainer.appendChild(optionContainer)
    qc.appendChild(divContainer)
  }
  mainNode = document.querySelectorAll('.containerOFall')
  for (no = 0; no < arrayOfQuestions.length; no++) {
    mainNode[no].id = `${no}`
  }
  displayQuiz()
}

// restart a qiuz with initial
function initial() {
  document.body.style.backgroundColor = '#007bff'
  qc.replaceChildren('')
  HTMLmin.innerHTML = 10
  HTMLsec.innerHTML = 15
  minutes = 10
  seconds = 15
  questionNumber = 0
  scoreCount = 0
  createQuiz()
  logic = setInterval(countDownTimer, 1000)
}

// start btn quiz
startBTN.onclick = function () {
  initial()
  theQuestionContainer.classList.remove('hide')
  introducingContainer.classList.add('hide')
  document.body.style.backgroundColor = '#007bff'
}

// handle containers on load
theDegreesContainerUP.classList.add('hide')
theDegreesContainerDOWN.classList.add('hide')
theQuestionContainer.classList.add('hide')

jonathanArray = [3, 5, 7, 'ram', 'jonathan', true]
console.log(jonathanArray)
