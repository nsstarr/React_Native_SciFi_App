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
  name: "Matrix",
  image: ""
}

export const questionsData: Array<Questions> = [
  {
    name: "image1",
    image: require("../assets/MatrixQuiz/MatrixPoster.jpg"),
    description: "Image of Morpheus talking to Neo",
    question:
      "In the Matrix 1 opening scene, who is the first person to speak?",
    answers: [
      { id: "1", name: "question1", value: "Trinity", label: "Trinity" },
      { id: "2", name: "question1", value: "Neo", label: "Neo" },
      { id: "3", name: "question1", value: "Cypher", label: "Cypher" },
      { id: "4", name: "question1", value: "Dozer", label: "Dozer" },
    ],
  },
  {
    name: "image2",
    image: require("../assets/MatrixQuiz/Morpheus.jpg"),
    description: "Picture of Morpheus offering the pills",
    question:
      "Morpheus offers Neo two pills, which colour is the one Neo took?",
    answers: [
      { id: "1", name: "question2", value: "Purple", label: "The purple pill" },
      { id: "2", name: "question2", value: "Red", label: "The Red pill" },
      { id: "3", name: "question2", value: "Orange", label: "The Orange pill" },
      { id: "4", name: "question2", value: "Blue", label: "The Blue pill" },
    ],
  },
  {
    name: "image3",
    image: require("../assets/MatrixQuiz/WakeUp.jpg"),
    description: "The animal which Neo has to follow.",
    question: "Which animal does the computer tell Neo to follow",
    answers: [
      { id: "1", name: "question3", value: "Unicorn", label: "Unicorn" },
      { id: "2", name: "question3", value: "Cat", label: "Cat" },
      { id: "3", name: "question3", value: "Rabbit", label: "Rabbit" },
      { id: "4", name: "question3", value: "Horse", label: "Horse" },
    ],
  },
  {
    name: "image4",
    image: require("../assets/MatrixQuiz/Zion.jpg"),
    description: "The image of the people partying",
    question: "Image of the last city on Earth",
    answers: [
      {
        id: "1",
        name: "question4",
        value: "Nebuchadnezzar",
        label: "Nebuchadnezzar",
      },
      { id: "2", name: "question4", value: "Xenon", label: "Xenon" },
      { id: "3", name: "question4", value: "Argon", label: "Argon" },
      { id: "4", name: "question4", value: "Zion", label: "Zion" },
    ],
  },
  {
    name: "image5",
    image: require("../assets/MatrixQuiz/MatrixFarm.jpg"),
    description: "Scene from the farm",
    question:
      "In the Matrix Trilogy, machines kept humans inside the Matrix, for what purpose?",
    answers: [
      {
        id: "1",
        name: "question5",
        value: "Batteries",
        label: "To use as Batteries",
      },
      {
        id: "2",
        name: "question5",
        value: "Neural Network",
        label: "To use as a Neural Network",
      },
      {
        id: "3",
        name: "question5",
        value: "Research",
        label: "To research Human behaviour",
      },
      {
        id: "4",
        name: "question5",
        value: "Punishment",
        label: "To punish Humans",
      },
    ],
  },
  {
    name: "image6",
    image: require("../assets/MatrixQuiz/Elevator.jpg"),
    description: "Neo and Trinity in the Elevator",
    question:
      "After the lobby shootout scene, what floor do Neo and Trinity stop at in the elevator?",
    answers: [
      { id: "1", name: "question6", value: "7", label: "7" },
      { id: "2", name: "question6", value: "13", label: "13" },
      { id: "3", name: "question6", value: "36", label: "36" },
      { id: "4", name: "question6", value: "41", label: "41" },
    ],
  },
  {
    name: "image7",
    image: require("../assets/MatrixQuiz/FrenchMan.jpg"),
    description: "The Frenchman in the club",
    question: "The Frenchman is an alias to which rogue program?",
    answers: [
      { id: "1", name: "question7", value: "Medici", label: "Medici" },
      {
        id: "2",
        name: "question7",
        value: "Merovinginan",
        label: "Merovinginan",
      },
      {
        id: "3",
        name: "question7",
        value: "Hanoverians",
        label: "Hanoverians",
      },
      {
        id: "4",
        name: "question7",
        value: "Palaeologus",
        label: "Palaeologus",
      },
    ],
  },
  {
    name: "image8",
    image: require("../assets/MatrixQuiz/Glitch.jfif"),
    description: "",
    question: "What phenomena indicates a glitch in the Matrix?",
    answers: [
      { id: "1", name: "question8", value: "Deja Vu", label: "Deja Vu" },
      {
        id: "2",
        name: "question8",
        value: "Superstition",
        label: "Superstition",
      },
      {
        id: "3",
        name: "question8",
        value: "Woman in a Red Dress",
        label: "Woman in a Red Dress",
      },
      {
        id: "4",
        name: "question8",
        value: "Telephone Ringing",
        label: "Telephone Ringing",
      },
    ],
  },
  {
    name: "image9",
    image: require("../assets/MatrixQuiz/Subway.jpg"),
    description: "",
    question: "Fill in the blank: 'You're ____.' 'So are you.'",
    answers: [
      { id: "1", name: "question9", value: "Program", label: "Program" },
      { id: "2", name: "question9", value: "The One", label: "The One" },
      { id: "3", name: "question9", value: "Matrix", label: "In the Matrix" },
      { id: "4", name: "question9", value: "Empty", label: "Empty" },
    ],
  },
  {
    name: "image10",
    image: require("../assets/"),
    description: "",
    question: "What does agent Smith say at the end of Matrix Revolutions?",
    answers: [
      {
        id: "1",
        name: "question15",
        value: "Humans",
        label: "Human beings are a disease, a cancer of this planet",
      },
      {
        id: "2",
        name: "question15",
        value: "Good",
        label: "What good is a phone call, if you are unables to speak?",
      },
      {
        id: "3",
        name: "question15",
        value: "Everything",
        label:
          "Everything that has a beginning has an end. I see the end coming, I see the darkness spreading. I see death.",
      },
      {
        id: "4",
        name: "question15",
        value: "Purpose",
        label:
          "It is purpose that created us. Purpose that connects us. Purpose that pulls us",
      },
    ],
  },
];

export const answerKey = {
  question1: "Cypher",
  question2: "Red",
  question3: "Rabbit",
  question4: "Zion",
  question5: "Batteries",
  question6: "",
  question7: "",
  question8: "",
  question9: "",
  question10: "",
  question11: "",
  question12: "",
  question13: "",
  question14: "",
  question15: ""
}

export const resultsData = [
  {
    name: "",
    image: require("../assets/"),
    description: "",
  },
  {
    name: "",
    image: require("../assets/"),
    description: "",
  },
  {
    name: "",
    image: require("../assets/"),
    description: "",
  },
  {
    name: "",
    image: require("../assets/"),
    description: "",
  },
];