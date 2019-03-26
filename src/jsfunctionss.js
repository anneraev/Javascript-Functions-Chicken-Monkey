for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    let message = ""
    if (currentNumber % 5 === 0) {
        message += "chicken";
    }
    if (currentNumber % 7 === 0) {
        message += "monkey";
    }
    console.log(currentNumber, message);
    message = "";
}