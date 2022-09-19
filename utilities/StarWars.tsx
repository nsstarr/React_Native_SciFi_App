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
    name: "Star Wars Quiz",
    image: require("../assets/Yoda.jpg")
  }

export const questionsData: Array<Questions> = [
  {
    name: "image0",
    image: require("../assets/Yoda.jpg"),
    description: "Picture of Yoda",
    question: "Who is this character?",
    answers: [
      { id: "1", name: "question1", value: "Picard", label: "Picard" },
      { id: "2", name: "question1", value: "Maul", label: "Maul" },
      { id: "3", name: "question1", value: "E.T.", label: "E.T." },
      { id: "4", name: "question1", value: "Yoda", label: "Yoda" },
    ],
  },
  {
    name: "image1",
    image: require("../assets/StarWarsQuiz/Cloud_City.jpeg"),
    description: "Cloud City of Bespin",
    question: "Who is in charge of the Cloud City of Bespin?",
    answers: [
      { id: "1", name: "question2", value: "Queen Amidala", label: "Queen Amidala" },
      { id: "2", name: "question2", value: "Han Solo", label: "Han Solo" },
      { id: "3", name: "question2", value: "Lando Calrissian", label: "Lando Calrissian" },
      { id: "4", name: "question2", value: "Princess Leia", label: "Princess Leia" },
    ],
  },
  {
    name: "image2",
    image: require("../assets/StarWarsQuiz/Boba_Fett.jpg"),
    description: "Boba Fett",
    question: "What type of armour does Boba Fett wear?",
    answers: [
      { id: "1", name: "question3", value: "Midi-Chlorian", label: "Midi-Chlorian" },
      { id: "2", name: "question3", value: "Mandalorian", label: "Mandalorian" },
      { id: "3", name: "question3", value: "Ilum", label: "Ilum" },
      { id: "4", name: "question3", value: "Mustafar", label: "Mustafar" },
    ],
  },
  {
    name: "image3",
    image: require("../assets/StarWarsQuiz/C3-PO.jpg"),
    description: "C3-PO",
    question: "How many languages can C3-PO speak?",
    answers: [
      { id: "1", name: "question4", value: "60", label: "60" },
      { id: "2", name: "question4", value: "60,000", label: "60,000" },
      { id: "3", name: "question4", value: "60,000,000", label: "60,000,000" },
      { id: "4", name: "question4", value: "60,000,000,000", label: "60,000,000,000" },
    ],
  },
  {
    name: "image4",
    image: require("../assets/StarWarsQuiz/Wookie.jpg"),
    description: "Chewbacca",
    question: "What species is Chewbacca?",
    answers: [
      { id: "1", name: "question5", value: "Wookie", label: "Wookie" },
      { id: "2", name: "question5", value: "Ewok", label: "Ewok" },
      { id: "3", name: "question5", value: "Jawa", label: "Jawa" },
      { id: "4", name: "question5", value: "Porg", label: "porg" },
    ],
  },
  {
    name: "image5",
    image: require("../assets/StarWarsQuiz/Ewoks.jpg"),
    description: "Ewoks",
    question: "Where do the Ewoks live?",
    answers: [
      { id: "1", name: "question6", value: "Dagobah", label: "Dagobah" },
      { id: "2", name: "question6", value: "Tatooine", label: "Tatooine" },
      { id: "3", name: "question6", value: "Hoth", label: "Hoth" },
      { id: "4", name: "question6", value: "Endor", label: "The Forest moon of Endor" },
    ],
  },
  {
    name: "image6",
    image: require("../assets/StarWarsQuiz/Darth_Vader.jpg"),
    description: "Darth Vader",
    question: "How many children does Darth Vader have?",
    answers: [
      { id: "1", name: "question7", value: "0", label: "0" },
      { id: "2", name: "question7", value: "1", label: "1" },
      { id: "3", name: "question7", value: "2", label: "2" },
      { id: "4", name: "question7", value: "3", label: "3" },
    ],
  },
  {
    name: "image7",
    image: require("../assets/StarWarsQuiz/Chancellor.jpg"),
    description: "Chancellor Palpatine talking to Anakin Skywalker",
    question: "What is the name of the Sith Lord that Chancellor Palpatine tells a story about?",
    answers: [
      { id: "1", name: "question8", value: "Darth Maul", label: "Darth Maul" },
      { id: "2", name: "question8", value: "Darh Vader", label: "Darth Vader" },
      { id: "3", name: "question8", value: "Darth Sidious", label: "Darth Sidious" },
      { id: "4", name: "question8", value: "Darth Plagius", label: "Darth Plagius" },
    ],
  },
  {
    name: "image8",
    image: require("../assets/StarWarsQuiz/Death_Star.jpg"),
    description: "The Death Star",
    question: "What ship destroys the second death star from Return of the Jedi?",
    answers: [
      { id: "1", name: "question9", value: "Tai-Fighter", label: "Tai-Fighter" },
      { id: "2", name: "question9", value: "Millenium Falcon", label: "Millenium Falcon" },
      { id: "3", name: "question9", value: "Y-Wing", label: "Y-Wing" },
      { id: "4", name: "question9", value: "X-Wing", label: "X-Wing" },
    ],
  },
  {
    name: "image9",
    image: require("../assets/StarWarsQuiz/Luke_Hand.jpg"),
    description: "Luke losing his hand",
    question: "Across the Skywalker family, how many limbs do they lose?",
    answers: [
      { id: "1", name: "question10", value: "1", label: "1" },
      { id: "2", name: "question10", value: "4", label: "4" },
      { id: "3", name: "question10", value: "5", label: "5" },
      { id: "4", name: "question10", value: "7", label: "7" },
    ],
  },
  {
    name: "image10",
    image: require("../assets/jarJarBinks.jpg"),
    description: "Jar Jar Binks",
    question: "What race does Jar Jar Binks belong to?",
    answers: [
      { id: "1", name: "question11", value: "Naboo", label: "Naboo" },
      { id: "2", name: "question11", value: "Ithorian", label: "Ithorian" },
      { id: "3", name: "question11", value: "Hutt", label: "Hutt" },
      { id: "4", name: "question11", value: "Gungan", label: "Gungan" },
    ],
  },
  {
    name: "image11",
    image: require("../assets/StarWarsQuiz/Han_and_Leia.jpg"),
    description: "Han and Leia",
    question: "On what planet do Leia and Han Solo meet after a long seperation, in Force Awakens?",
    answers: [
      { id: "1", name: "question12", value: "Naboo", label: "Naboo" },
      { id: "2", name: "question12", value: "Takodana", label: "Takodana" },
      { id: "3", name: "question12", value: "Jakku", label: "Jakku" },
      { id: "4", name: "question12", value: "D'Qar", label: "D'Qar" },
    ],
  },
  {
    name: "image12",
    image: require("../assets/QuiGon.png"),
    description: "Qui Gon Jinn",
    question: "Who was Qui Gon Jinn's master?",
    answers: [
      { id: "1", name: "question13", value: "Mace Windu", label: "Mace Windu" },
      { id: "2", name: "question13", value: "Count Dooku", label: "Count Dooku" },
      { id: "3", name: "question13", value: "Obi-Won Kenobi", label: "Obi-Won Kenobi" },
      { id: "4", name: "question13", value: "Yoda", label: "Yoda" },
    ],
  },
  {
    name: "image13",
    image: require("../assets/StarWarsQuiz/Mace_Windu.jpg"),
    description: "Mace Windu",
    question: "What colour is Mace Windu's Lightsaber?",
    answers: [
      { id: "1", name: "question14", value: "Blue", label: "Blue" },
      { id: "2", name: "question14", value: "Green", label: "Green" },
      { id: "3", name: "question14", value: "Yellow", label: "Yellow" },
      { id: "4", name: "question14", value: "Purple", label: "Purple" },
    ],
  },
  {
    name: "image14",
    image: require("../assets/StarWarsQuiz/R2-D2.jpg"),
    description: "R2-D2",
    question: "Who was R2-D2's first personal owner?",
    answers: [
      { id: "1", name: "question15", value: "Luke Skywalker", label: "Luke Skywalker" },
      { id: "2", name: "question15", value: "Princess Leia", label: "Princess Leia" },
      { id: "3", name: "question15", value: "Queen Amidala", label: "Queen Amidala" },
      { id: "4", name: "question15", value: "Anakin Skywalker", label: "Anakin Skywalker" },
    ],
  },
];

export const answerKey = {
  question1: "Yoda",
  question2: "Lando Calrissian",
  question3: "Mandalorian",
  question4: "60,000,000",
  question5: "Wookie",
  question6: "Endor",
  question7: "2",
  question8: "Darth Plagius",
  question9: "Millenium Falcon",
  question10: "5",
  question11: "Gungan",
  question12: "D'Qar",
  question13: "Count Dooku",
  question14: "Purple",
  question15: "Queen Amidala",
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