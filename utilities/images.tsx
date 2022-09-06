interface Image {
    name: string,
    image: any,
    description: string
}

export const images: Array<Image> = [
    {
        name: 'image1.png',
        image: require('../assets/profile_picture.png'),
        description: 'Default Profile Image'
    }
]

export const GetImage = (name: string) => {
    const found = images.find(image => image.name === name);
    return found ? found.image : null;
}