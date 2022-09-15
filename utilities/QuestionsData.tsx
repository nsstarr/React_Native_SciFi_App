interface Questions {
    name: string,
    image: any,
    description: string,
    question: string,
    answers: {
        id: string,
        value: string,
        label: string,
        name: string
        color?:string
        labelStyle?: any
        containerStyle?: any
}[]
    }
    

  export const quizCardData = {
    name: "First Quiz",
    image: ""
  }

export const questionsData: Array<Questions> = [
  {
    name: "image0",
    image: require("../assets/Yoda.jpg"),
    description: "Picture of Yoda",
    question: "Who is this character?",
    answers: [
      { id: "1", name: "question1", value: "Picard", label: "Picard" },
      { id: "2", name: "question1", value: "Chewbacca", label: "Chewbacca" },
      { id: "3", name: "question1", value: "E.T.", label: "E.T." },
      { id: "4", name: "question1", value: "Yoda", label: "Yoda" },
    ],
  },
  {
    name: "image1",
    image: require("../assets/EndersGame.jpg"),
    description: "Movie Poster of Ender's game",
    question: "In battle School, Ender takes command of his own army, what is the name of the army?",
    answers: [
      { id: "1", name: "question2", value: "Salamander", label: "Salamander" },
      { id: "2", name: "question2", value: "Dragon", label: "Dragon" },
      { id: "3", name: "question2", value: "Griffin", label: "Griffin" },
      { id: "4", name: "question2", value: "Tiger", label: "Tiger" },
    ],
  },
  {
    name: "image2",
    image: require("../assets/BladeRunner.jpg"),
    description: "Blade Runner Aesthetics",
    question: "What city is Blade Runner set in?",
    answers: [
      { id: "1", name: "question3", value: "New York", label: "New York" },
      { id: "2", name: "question3", value: "Los Angeles", label: "Los Angeles" },
      { id: "3", name: "question3", value: "Chicago", label: "Chicago" },
      { id: "4", name: "question3", value: "Miami", label: "Miami" },
    ],
  },
  {
    name: "image3",
    image: require("../assets/Serenity.jpg"),
    description: "Serenity Ship",
    question: "In the TV-show Firefly, what is the Serenity named after?",
    answers: [
      { id: "1", name: "question4", value: "State of Mind", label: "State of Mind" },
      { id: "2", name: "question4", value: "Planet", label: "Planet" },
      { id: "3", name: "question4", value: "Person", label: "Person" },
      { id: "4", name: "question4", value: "Battle", label: "Battle" },
    ],
  },
  {
    name: "image4",
    image: require("../assets/ETMoon.jpg"),
    description: " Poster of E.T.",
    question: "What's the the name of the boy who find and befriends E.T.?",
    answers: [
      { id: "1", name: "question5", value: "Lucas", label: "Lucas" },
      { id: "2", name: "question5", value: "Johnny", label: "Johnny" },
      { id: "3", name: "question5", value: "Elliot", label: "Elliot" },
      { id: "4", name: "question5", value: "Dennis", label: "Dennis" },
    ],
  },
  {
    name: "image5",
    image: require("../assets/Matrix.jpg"),
    description: "Scene from the Matrix.",
    question: "In the Matrix Trilogy, machines kept humans inside the Matrix, for what purpose?",
    answers: [
      { id: "1", name: "question6", value: "Batteries", label: "To use as Batteries" },
      { id: "2", name: "question6", value: "Neural Network", label: "To use as a Neural Network" },
      { id: "3", name: "question6", value: "Research", label: "To research Human behaviour" },
      { id: "4", name: "question6", value: "Punishment", label: "To punish Humans" },
    ],
  },
];

export const answerKey = {
  question1: "Yoda",
  question2: "Dragon",
  question3: "Los Angeles",
  question4: "Battle",
  question5: "Elliot",
  question6: "Batteries"
}

export const resultsData = [
  {
    name: "Jar Jar Binks",
    image: require("../assets/jarJarBinks.jpg"),
    description: "I’m... I’m so sorry, but the results don’t lie",
  },
  {
    name: "Anakin Skywalker",
    image: require("../assets/anakin.jpg"),
    description: "You still have a bit of growing up to do..",
  },
  {
    name: "Qui Gon Jinn",
    image: require("../assets/QuiGon.png"),
    description: "You may have what it takes to be a Jedi Master.",
  },
  {
    name: "Yoda",
    image: require("../assets/yodaLight.jpg"),
    description: "Wise one you are.",
  },
];