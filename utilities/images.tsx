
interface Images  {
    name: string,
    image: string,
    description: string
}

export const images: Array<Images> = [
    {
        name: "image0",
        image: require("../assets/profile_picture.png"),
        description: "Default Profile Image",
      },
]

export const GetImage = (name: string,imageArray: Array<Images>) => {
    const found = imageArray.find(image => image.name === name);
    return found ? found.image : null;
}