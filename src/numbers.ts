const getRandomNumber = (min: number, max: number, count: number) => {
    const randomNumbers: number[] = [];
    while (randomNumbers.length < count) {
        const randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
    return randomNumbers.sort((a, b) => a - b);
};

export default getRandomNumber;