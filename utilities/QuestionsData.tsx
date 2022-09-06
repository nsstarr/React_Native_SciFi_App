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
];

export const GetImage = (name: string) => {
    const found = questionsData.find(image => image.name === name);
    return found ? found.image : null;
}