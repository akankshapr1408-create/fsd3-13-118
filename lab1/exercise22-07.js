// Write a function to take number between 1-9 and return in words 
function numberToWords(num) {    
    const words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return words[num - 1] 
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



// create another function that takes a nmber and show in words with the help of numbertowordsarrow 
const showNumberInWords = (num) => {
    const numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i]);
        console.log(numberToWordsArrow(digit));
    }
}
    console.log(showNumberInWords(123456789));


    const rollnum="2345678";
    const digits=String(rollnum).split('');
    console.log(digits);
    for(let i=0;i<digits.length;i++){
        console.log(numberToWordsArrow(parseInt(digits[i])));
    }
    let inwords='';
    digits.forEach((d)=> {
       inwords+=" "+numberToWordsArrow(Number(d));
    }
);
console.log(inwords);