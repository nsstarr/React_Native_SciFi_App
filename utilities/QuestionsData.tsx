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
];

export const GetImage = (name: string) => {
    const found = questionsData.find(image => image.name === name);
    return found ? found.image : null;
}