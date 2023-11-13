let questions = [
  {
    question: "Welcher Planet ist der 'Zwilling' der Erde?",
    question_nr: 1,
    answer_a: "Mars",
    answer_b: "Venus",
    answer_c: "Jupiter",
    answer_d: "Saturn",
    right_answer: "b",
  },
  {
    question: "Was ist das kleinste Säugetier?",
    question_nr: 2,
    answer_a: "Spitzmaus",
    answer_b: "Eichhörnchen",
    answer_c: "Maus",
    answer_d: "Fledermaus",
    right_answer: "a",
  },
  {
    question: "Welcher Fluss fließt durch Paris?",
    question_nr: 3,
    answer_a: "Donau",
    answer_b: "Themse",
    answer_c: "Seine",
    answer_d: "Rhein",
    right_answer: "c",
  },
  {
    question: "Was ist die Hauptstadt von Kanada?",
    question_nr: 4,
    answer_a: "Vancouver",
    answer_b: "Montreal",
    answer_c: "Toronto",
    answer_d: "Ottawa",
    right_answer: "d",
  },
  {
    question: "Welcher ist der einzige Vogel, der rückwärts fliegen kann?",
    question_nr: 5,
    answer_a: "Kolibri",
    answer_b: "Strauß",
    answer_c: "Pinguin",
    answer_d: "Papagei",
    right_answer: "a",
  },
  {
    question: "Wie nennt man eine Gruppe Wale?",
    question_nr: 6,
    answer_a: "Herde",
    answer_b: "Schwarm",
    answer_c: "Rudel",
    answer_d: "Pod",
    right_answer: "d",
  },
  {
    question: "Wer hat die Glühbirne erfunden?",
    question_nr: 7,
    answer_a: "Thomas Edison",
    answer_b: "Alexander Graham Bell",
    answer_c: "Nikola Tesla",
    answer_d: "Isaac Newton",
    right_answer: "a",
  },
  {
    question: "Welcher ist der tiefste Ozean?",
    question_nr: 8,
    answer_a: "Atlantischer Ozean",
    answer_b: "Indischer Ozean",
    answer_c: "Pazifischer Ozean",
    answer_d: "Arktischer Ozean",
    right_answer: "c",
  },
  {
    question: "Wie viele Kontinente gibt es?",
    question_nr: 9,
    answer_a: "5",
    answer_b: "6",
    answer_c: "7",
    answer_d: "8",
    right_answer: "c",
  },
  {
    question: "Wer malte die Mona Lisa?",
    question_nr: 10,
    answer_a: "Vincent van Gogh",
    answer_b: "Leonardo da Vinci",
    answer_c: "Pablo Picasso",
    answer_d: "Michelangelo",
    right_answer: "b",
  },
  {
    question: "Was ist die Hauptstadt von Australien?",
    question_nr: 11,
    answer_a: "Melbourne",
    answer_b: "Sydney",
    answer_c: "Canberra",
    answer_d: "Brisbane",
    right_answer: "c",
  },
  {
    question: "Welches Land ist für seine Tulpen berühmt?",
    question_nr: 12,
    answer_a: "Deutschland",
    answer_b: "Niederlande",
    answer_c: "Frankreich",
    answer_d: "Belgien",
    right_answer: "b",
  },
  {
    question: "Wer schrieb 'Romeo und Julia'?",
    question_nr: 13,
    answer_a: "Charles Dickens",
    answer_b: "William Shakespeare",
    answer_c: "Jane Austen",
    answer_d: "Mark Twain",
    right_answer: "b",
  },
  {
    question: "Welche ist die längste Schlange der Welt?",
    question_nr: 14,
    answer_a: "Königskobra",
    answer_b: "Anakonda",
    answer_c: "Schwarze Mamba",
    answer_d: "Python",
    right_answer: "b",
  },
  {
    question: "Welches ist das meistgesprochene Sprachsystem in der Welt?",
    question_nr: 15,
    answer_a: "Mandarin",
    answer_b: "Englisch",
    answer_c: "Spanisch",
    answer_d: "Hindi",
    right_answer: "a",
  },
  {
    question: "Welches ist das kleinste Land der Welt?",
    question_nr: 16,
    answer_a: "Monaco",
    answer_b: "Vatikanstadt",
    answer_c: "San Marino",
    answer_d: "Malta",
    right_answer: "b",
  },
  {
    question: "Welches Tier hat kein Herz?",
    question_nr: 17,
    answer_a: "Seestern",
    answer_b: "Qualle",
    answer_c: "Tintenfisch",
    answer_d: "Wurm",
    right_answer: "a",
  },
  {
    question: "Wer ist der Erfinder des Telefons?",
    question_nr: 18,
    answer_a: "Thomas Edison",
    answer_b: "Alexander Graham Bell",
    answer_c: "Guglielmo Marconi",
    answer_d: "Samuel Morse",
    right_answer: "b",
  },
  {
    question: "Was ist die Hauptstadt von Neuseeland?",
    question_nr: 19,
    answer_a: "Auckland",
    answer_b: "Wellington",
    answer_c: "Christchurch",
    answer_d: "Queenstown",
    right_answer: "b",
  },
  {
    question: "Wie viele Tasten hat ein klassisches Klavier?",
    question_nr: 20,
    answer_a: "88",
    answer_b: "76",
    answer_c: "100",
    answer_d: "64",
    right_answer: "a",
  },
  {
    question: "Welche Frucht enthält mehr Vitamin C als eine Orange?",
    question_nr: 21,
    answer_a: "Erdbeere",
    answer_b: "Kiwi",
    answer_c: "Zitrone",
    answer_d: "Papaya",
    right_answer: "b",
  },
  {
    question:
      "Welches Tier ist bekannt für seine Fähigkeit, Farben zu wechseln?",
    question_nr: 22,
    answer_a: "Chamäleon",
    answer_b: "Papagei",
    answer_c: "Frosch",
    answer_d: "Pfau",
    right_answer: "a",
  },
  {
    question: "Wer hat die Relativitätstheorie entwickelt?",
    question_nr: 23,
    answer_a: "Isaac Newton",
    answer_b: "Albert Einstein",
    answer_c: "Stephen Hawking",
    answer_d: "Galileo Galilei",
    right_answer: "b",
  },
  {
    question: "Welcher Fluss ist der längste in Afrika?",
    question_nr: 24,
    answer_a: "Nil",
    answer_b: "Kongo",
    answer_c: "Niger",
    answer_d: "Sambesi",
    right_answer: "a",
  },
  {
    question: "Was ist der höchste Berg Europas?",
    question_nr: 25,
    answer_a: "Mont Blanc",
    answer_b: "Matterhorn",
    answer_c: "Elbrus",
    answer_d: "Zugspitze",
    right_answer: "c",
  },
  {
    question: "Wie viele Beine hat eine Spinne?",
    question_nr: 26,
    answer_a: "6",
    answer_b: "8",
    answer_c: "10",
    answer_d: "12",
    right_answer: "b",
  },
  {
    question: "Welcher ist der kleinste Planet in unserem Sonnensystem?",
    question_nr: 27,
    answer_a: "Merkur",
    answer_b: "Mars",
    answer_c: "Pluto",
    answer_d: "Erde",
    right_answer: "a",
  },
  {
    question: "Welcher Künstler schuf das Gemälde 'Die Sternennacht'?",
    question_nr: 28,
    answer_a: "Claude Monet",
    answer_b: "Vincent van Gogh",
    answer_c: "Salvador Dalí",
    answer_d: "Pablo Picasso",
    right_answer: "b",
  },
  {
    question: "Was ist der Durchmesser der Erde?",
    question_nr: 29,
    answer_a: "Etwa 6.000 km",
    answer_b: "Etwa 10.000 km",
    answer_c: "Etwa 12.800 km",
    answer_d: "Etwa 15.000 km",
    right_answer: "c",
  },
  {
    question: "Welcher ist der längste Fluss in den USA?",
    question_nr: 30,
    answer_a: "Missouri River",
    answer_b: "Mississippi River",
    answer_c: "Colorado River",
    answer_d: "Columbia River",
    right_answer: "b",
  },
  {
    question: "Welches ist das größte Säugetier?",
    question_nr: 31,
    answer_a: "Elefant",
    answer_b: "Blauwal",
    answer_c: "Giraffe",
    answer_d: "Nilpferd",
    right_answer: "b",
  },
  {
    question: "Welches ist das meistverkaufte Buch nach der Bibel?",
    question_nr: 32,
    answer_a: "Der Herr der Ringe",
    answer_b: "Harry Potter und der Stein der Weisen",
    answer_c: "Der kleine Prinz",
    answer_d: "Don Quijote",
    right_answer: "c",
  },
  {
    question: "Wie heißt die Hauptfigur im Buch 'Der Fänger im Roggen'?",
    question_nr: 33,
    answer_a: "Holden Caulfield",
    answer_b: "Jay Gatsby",
    answer_c: "Sherlock Holmes",
    answer_d: "Oliver Twist",
    right_answer: "a",
  },
  {
    question: "Welche Farbe hat eine Pille, die Neo in 'Die Matrix' wählt?",
    question_nr: 34,
    answer_a: "Rot",
    answer_b: "Blau",
    answer_c: "Grün",
    answer_d: "Gelb",
    right_answer: "b",
  },
  {
    question: "Wer hat die 'Mondlandung' inszeniert?",
    question_nr: 35,
    answer_a: "USA",
    answer_b: "Russland",
    answer_c: "China",
    answer_d: "Deutschland",
    right_answer: "a",
  },
  {
    question: "Welches Land hat das meiste Gold?",
    question_nr: 36,
    answer_a: "USA",
    answer_b: "Russland",
    answer_c: "China",
    answer_d: "Indien",
    right_answer: "b",
  },
  {
    question: "Welches Tier ist das schnellste auf dem Land?",
    question_nr: 37,
    answer_a: "Gepard",
    answer_b: "Löwe",
    answer_c: "Antilope",
    answer_d: "Strauß",
    right_answer: "a",
  },
  {
    question: "Welche Stadt wird als die Stadt der Liebe bezeichnet?",
    question_nr: 38,
    answer_a: "Venedig",
    answer_b: "Paris",
    answer_c: "Rom",
    answer_d: "Wien",
    right_answer: "b",
  },
  {
    question: "Welches ist das meistgesprochene Wort in der Welt?",
    question_nr: 39,
    answer_a: "Hallo",
    answer_b: "Okay",
    answer_c: "Coca-Cola",
    answer_d: "Fußball",
    right_answer: "a",
  },
  {
    question: "Welches ist das meistverkaufte Getränk der Welt?",
    question_nr: 40,
    answer_a: "Kaffee",
    answer_b: "Bier",
    answer_c: "Tee",
    answer_d: "Wasser",
    right_answer: "c",
  },
  {
    question: "Wie nennt man eine Gruppe von Eulen?",
    question_nr: 41,
    answer_a: "Pulk",
    answer_b: "Schwarm",
    answer_c: "Kolonie",
    answer_d: "Parlament",
    right_answer: "d",
  },
  {
    question: "Welche ist die größte Wüste der Welt?",
    question_nr: 42,
    answer_a: "Sahara-Wüste",
    answer_b: "Gobi-Wüste",
    answer_c: "Antarktis",
    answer_d: "Arabische Wüste",
    right_answer: "c",
  },
  {
    question: "Was ist die Hauptstadt von Spanien?",
    question_nr: 43,
    answer_a: "Barcelona",
    answer_b: "Sevilla",
    answer_c: "Valencia",
    answer_d: "Madrid",
    right_answer: "d",
  },
  {
    question: "Welche ist die kleinste Knochen im menschlichen Körper?",
    question_nr: 44,
    answer_a: "Kniescheibe",
    answer_b: "Steigbügel",
    answer_c: "Handwurzelknochen",
    answer_d: "Ohrknöchelchen",
    right_answer: "b",
  },
  {
    question: "Wie nennt man eine Gruppe von Pandas?",
    question_nr: 45,
    answer_a: "Herde",
    answer_b: "Schwarm",
    answer_c: "Rudel",
    answer_d: "Truppe",
    right_answer: "d",
  },
  {
    question: "Welches ist das meistgesprochene künstliche Sprache?",
    question_nr: 46,
    answer_a: "Esperanto",
    answer_b: "Klingonisch",
    answer_c: "Dothraki",
    answer_d: "Na'vi",
    right_answer: "a",
  },
  {
    question: "Wer hat das World Wide Web erfunden?",
    question_nr: 47,
    answer_a: "Tim Berners-Lee",
    answer_b: "Steve Jobs",
    answer_c: "Bill Gates",
    answer_d: "Mark Zuckerberg",
    right_answer: "a",
  },
  {
    question: "Welches Tier hat die meisten Zähne?",
    question_nr: 48,
    answer_a: "Krokodil",
    answer_b: "Weißer Hai",
    answer_c: "Elefant",
    answer_d: "Seekuh",
    right_answer: "b",
  },
  {
    question: "Welches Land hat die meisten Nationalfeiertage?",
    question_nr: 49,
    answer_a: "Indien",
    answer_b: "USA",
    answer_c: "China",
    answer_d: "Russland",
    right_answer: "a",
  },
  {
    question: "Welcher Planet hat die längsten Tage?",
    question_nr: 50,
    answer_a: "Venus",
    answer_b: "Mars",
    answer_c: "Jupiter",
    answer_d: "Saturn",
    right_answer: "c",
  },
];

let questionsAsked = [];
let currentQuestion;
let rightAnswers = 0;
let AUDIO_SUCCESS = new Audio("audio/success.mp3");
let AUDIO_ERROR = new Audio("audio/error.mp3");
let AUDIO_END = new Audio("audio/won.mp3");

function getRandomQuestion() {
  let nextQuestion = Math.floor(Math.random() * questions.length);

  if (questionsAsked.length == 0) {
    return nextQuestion;
  } else {
    for (let i = 0; i < questionsAsked.length; i++) {
      const element = questionsAsked[i];
      if (element != nextQuestion) {
        return nextQuestion;
      } else {
        let newNextQuestion = Math.floor(Math.random() * questions.length);
        console.log(`
          Question already asked!
          nextQuestion: ${nextQuestion} 
          QuestionAsked: ${element}
          newNextQuestion: ${newNextQuestion}
          `);
        nextQuestion = newNextQuestion;
        i--;
      }
    }
  }
}

function loadCard() {
  let nr = getRandomQuestion();
  currentQuestion = questions[nr];

  if (questionsAsked.length >= 5) {
    showEndScreen();
  } else {
    loadQuestion(currentQuestion, nr);
  }
}

function loadQuestion(currentQuestion, nr) {
  document.getElementById("question").innerHTML =
    currentQuestion["question"] +
    `
    <p class="question-nr" id="question_nr">Frage #${currentQuestion["question_nr"]}</p>
    `;
  document.getElementById("answer_a").innerHTML = currentQuestion["answer_a"];
  document.getElementById("answer_b").innerHTML = currentQuestion["answer_b"];
  document.getElementById("answer_c").innerHTML = currentQuestion["answer_c"];
  document.getElementById("answer_d").innerHTML = currentQuestion["answer_d"];
  document.getElementById("current_question").innerHTML =
    questionsAsked.length + 1;
  remQuestionsAsked(nr);
}

function answer(x) {
  if (x == currentQuestion["right_answer"]) {
    document
      .getElementById(`answer_${x}`)
      .parentNode.classList.add("bg-success");
    AUDIO_SUCCESS.play();
    rightAnswers++;
  } else {
    document
      .getElementById(`answer_${x}`)
      .parentNode.classList.add("bg-danger");
    document
      .getElementById(`answer_${currentQuestion["right_answer"]}`)
      .parentNode.classList.add("bg-success");
    AUDIO_ERROR.play();
  }
  disableAnswers();
  document.getElementById("answer_btn").disabled = false;
}

function loadNextQuestion() {
  clearCard();
  loadCard();
  enableAnswers();
  advanceProgressBar();
}

function clearCard() {
  document.getElementById("answer_a").parentNode.classList.remove("bg-success");
  document.getElementById("answer_a").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_b").parentNode.classList.remove("bg-success");
  document.getElementById("answer_b").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_c").parentNode.classList.remove("bg-success");
  document.getElementById("answer_c").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_d").parentNode.classList.remove("bg-success");
  document.getElementById("answer_d").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_btn").disabled = true;
}

function disableAnswers() {
  document.getElementById("answer_a").removeAttribute("onclick");
  document.getElementById("answer_b").removeAttribute("onclick");
  document.getElementById("answer_c").removeAttribute("onclick");
  document.getElementById("answer_d").removeAttribute("onclick");
}

function enableAnswers() {
  document.getElementById("answer_a").setAttribute("onclick", "answer('a')");
  document.getElementById("answer_b").setAttribute("onclick", "answer('b')");
  document.getElementById("answer_c").setAttribute("onclick", "answer('c')");
  document.getElementById("answer_d").setAttribute("onclick", "answer('d')");
}

function showEndScreen() {
  document.getElementById("result").innerHTML = rightAnswers;
  document.getElementById("end-screen").classList.remove("d-none");
  document.getElementById("question_body").classList.add("d-none");
  document.getElementById("progress").classList.add("d-none");
  AUDIO_END.play();
}

function remQuestionsAsked(nr) {
  questionsAsked.push(nr);
}

function advanceProgressBar() {
  element = document.getElementById("progress_bar");
  currentPos = element.style.width;
  newPos = Number(currentPos.slice(0, -1)) + 20;
  element.style.width = newPos + "%";
}
