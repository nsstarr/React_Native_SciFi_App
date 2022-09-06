interface Image {
    name: string,
    image: any,
    description: string
}

export const images: Array<Image> = [
    {
        name: 'image1',
        image: require('../assets/profile_picture.png'),
        description: 'Default Profile Image'
    },
    {
        name: 'image2',
        image: require('../assets/Yoda.jpg'),
        description: 'Picture of Yoda'
    },
]

export const GetImage = (name: string) => {
    const found = images.find(image => image.name === name);
    return found ? found.image : null;
}