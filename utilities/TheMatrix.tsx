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
    image: require("../assets/"),
    description: "Picture of morpheus offering the pills",
    question: "In the Matrix 1 opening scene, who is the first person to speak?",
    answers: [
      { id: "1", name: "question1", value: "Trinity", label: "Trinity" },
      { id: "2", name: "question1", value: "Neo", label: "Neo" },
      { id: "3", name: "question1", value: "Cypher", label: "Cypher" },
      { id: "4", name: "question1", value: "Dozer", label: "Dozer" },
    ],
  },
  {
    name: "image2",
    image: require("../assets/"),
    description: "Image of Morpheus talking to Neo",
    question: "Morpheus offers Neo two pills, which colour is the one Neo took?",
    answers: [
      { id: "1", name: "question2", value: "Purple", label: "The purple pill" },
      { id: "2", name: "question2", value: "Red", label: "The Red pill" },
      { id: "3", name: "question2", value: "Orange", label: "The Orange pill" },
      { id: "4", name: "question2", value: "Blue", label: "The Blue pill" },
    ],
  },
  {
    name: "image3",
    image: require("../assets/"),
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
    image: require("../assets/"),
    description: "The image of the people partying",
    question: "Image of the last city on Earth",
    answers: [
      { id: "1", name: "question4", value: "Nebuchadnezzar", label: "Nebuchadnezzar" },
      { id: "2", name: "question4", value: "Xenon", label: "Xenon" },
      { id: "3", name: "question4", value: "Argon", label: "Argon" },
      { id: "4", name: "question4", value: "Zion", label: "Zion" },
    ],
  },
  {
    name: "image5",
    image: require("../assets/"),
    description: "Scene from the farm",
    question: "In the Matrix Trilogy, machines kept humans inside the Matrix, for what purpose?",
    answers: [
      { id: "1", name: "question5", value: "Batteries", label: "To use as Batteries" },
      { id: "2", name: "question5", value: "Neural Network", label: "To use as a Neural Network" },
      { id: "3", name: "question5", value: "Research", label: "To research Human behaviour" },
      { id: "4", name: "question5", value: "Punishment", label: "To punish Humans" },
    ],
  },
  {
    name: "image6",
    image: require("../assets/"),
    description: "",
    question: "",
    answers: [
      { id: "1", name: "question6", value: "", label: "" },
      { id: "2", name: "question6", value: "", label: "" },
      { id: "3", name: "question6", value: "", label: "" },
      { id: "4", name: "question6", value: "", label: "" },
    ],
  },
  {
    name: "image7",
    image: require("../assets/"),
    description: "",
    question: "",
    answers: [
      { id: "1", name: "question7", value: "", label: "" },
      { id: "2", name: "question7", value: "", label: "" },
      { id: "3", name: "question7", value: "", label: "" },
      { id: "4", name: "question7", value: "", label: "" },
    ],
  },
  {
    name: "image8",
    image: require("../assets/"),
    description: "",
    question: "",
    answers: [
      { id: "1", name: "question8", value: "", label: "" },
      { id: "2", name: "question8", value: "", label: "" },
      { id: "3", name: "question8", value: "", label: "" },
      { id: "4", name: "question8", value: "", label: "" },
    ],
  },
  {
    name: "image9",
    image: require("../assets/"),
    description: "",
    question: "",
    answers: [
      { id: "1", name: "question9", value: "", label: "" },
      { id: "2", name: "question9", value: "", label: "" },
      { id: "3", name: "question9", value: "", label: "" },
      { id: "4", name: "question9", value: "", label: "" },
    ],
  },
  {
    name: "image10",
    image: require("../assets/"),
    description: "",
    question: "",
    answers: [
      { id: "1", name: "question10", value: "", label: "" },
      { id: "2", name: "question10", value: "", label: "" },
      { id: "3", name: "question10", value: "", label: "" },
      { id: "4", name: "question10", value: "", label: "" },
    ],
  },
  {
    name: "image11",
    image: require("../assets/"),
    description: "",
    question: "",
    answers: [
      { id: "1", name: "question11", value: "", label: "" },
      { id: "2", name: "question11", value: "", label: "" },
      { id: "3", name: "question11", value: "", label: "" },
      { id: "4", name: "question11", value: "", label: "" },
    ],
  },
  {
    name: "image12",
    image: require("../assets/"),
    description: "",
    question: "",
    answers: [
      { id: "1", name: "question12", value: "", label: "" },
      { id: "2", name: "question12", value: "", label: "" },
      { id: "3", name: "question12", value: "", label: "" },
      { id: "4", name: "question12", value: "", label: "" },
    ],
  },
  {
    name: "image13",
    image: require("../assets/"),
    description: "",
    question: "",
    answers: [
      { id: "1", name: "question13", value: "", label: "" },
      { id: "2", name: "question13", value: "", label: "" },
      { id: "3", name: "question13", value: "", label: "" },
      { id: "4", name: "question13", value: "", label: "" },
    ],
  },
  {
    name: "image14",
    image: require("../assets/"),
    description: "",
    question: "",
    answers: [
      { id: "1", name: "question14", value: "", label: "" },
      { id: "2", name: "question14", value: "", label: "" },
      { id: "3", name: "question14", value: "", label: "" },
      { id: "4", name: "question14", value: "", label: "" },
    ],
  },
  {
    name: "image15",
    image: require("../assets/"),
    description: "",
    question: "",
    answers: [
      { id: "1", name: "question15", value: "", label: "" },
      { id: "2", name: "question15", value: "", label: "" },
      { id: "3", name: "question15", value: "", label: "" },
      { id: "4", name: "question15", value: "", label: "" },
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