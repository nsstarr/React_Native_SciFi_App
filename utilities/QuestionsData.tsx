interface Questions {
    name: string,
    image: any,
    description: string,
    question?: string,
    answers?: {
        id: string,
        value: string,
        label: string,
    }[]
}

export const questionsData: Array<Questions> = [
  {
    name: "image0",
    image: require("../assets/profile_picture.png"),
    description: "Default Profile Image",
  },
  {
    name: "image1",
    image: require("../assets/Yoda.jpg"),
    description: "Picture of Yoda",
    question: "Who is this charatcter?",
    answers: [
      { id: "1", value: "Picard", label: "Picard" },
      { id: "2", value: "Chewbacca", label: "Chewbacca" },
      { id: "3", value: "E.T.", label: "E.T." },
      { id: "4", value: "Yoda", label: "Yoda" },
    ],
  },
  {
    name: "image2",
    image: require("../assets/EndersGame.jpg"),
    description: "Movie Poster of Ender's game",
    question: "In battle School, Ender takes command of his own army, what is the name of the army?",
    answers: [
      { id: "1", value: "Salamander", label: "Salamander" },
      { id: "2", value: "Dragon", label: "Dragon" },
      { id: "3", value: "Griffin", label: "Griffin" },
      { id: "4", value: "Tiger", label: "Tiger" },
    ],
  },
  {
    name: "image3",
    image: require("../assets/BladeRunner.jpg"),
    description: "Blade Runner Aesthetics",
    question: "What city is Blade Runner set in?",
    answers: [
      { id: "1", value: "New York", label: "New York" },
      { id: "2", value: "Los Angeles", label: "Los Angeles" },
      { id: "3", value: "Chicago", label: "Chicago" },
      { id: "4", value: "Miami", label: "Miami" },
    ],
  },
  {
    name: "image4",
    image: require("../assets/Serenity.jpg"),
    description: "Serenity Ship",
    question: "In the TV-show Firefly, what is the Serenity named after?",
    answers: [
      { id: "1", value: "State of Mind", label: "State of Mind" },
      { id: "2", value: "Planet", label: "Planet" },
      { id: "3", value: "Person", label: "Person" },
      { id: "4", value: "Battle", label: "Battle" },
    ],
  },
  {
    name: "image5",
    image: require("../assets/ETMoon.jpg"),
    description: " Poster of E.T.",
    question: "What's the the name of the boy who find and befriends E.T.?",
    answers: [
      { id: "1", value: "Lucas", label: "Lucas" },
      { id: "2", value: "Johnny", label: "Johnny" },
      { id: "3", value: "Elliot", label: "Elliot" },
      { id: "4", value: "Dennis", label: "Dennis" },
    ],
  },
];

export const GetImage = (name: string) => {
    const found = questionsData.find(image => image.name === name);
    return found ? found.image : null;
}