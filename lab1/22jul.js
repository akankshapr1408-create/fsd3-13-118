// Write a function to take number between 1-9 and return in words 
function numberToWords(num) {    
    const words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    if (num >= 1 && num <= 9) {
        return words[num - 1];
    } else {
        return "Please enter a number between 1 and 9.";
    }
}
console.log(numberToWords(5)); 

 const numberToWordsArrow = (num) => {
    switch(num) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight"; 
        case 9:
            return "nine";
        default:
            return "Please enter a number between 1 and 9.";
    }
}
console.log(numberToWordsArrow(3));