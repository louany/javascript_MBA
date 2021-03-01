var selectElementsStartingWithA = function(array) {
    let myArray = [];
    array.forEach(e => {
        e.charAt(0) != 'a' ? '' : myArray.push(e);
    });
    return myArray;
}

var selectElementsStartingWithVowel = function(array) {
    let myArray = [];
    const regExp = new RegExp('^[aAeEiIoOuUyY]');
    array.forEach(e => {
        regExp.test(e) ? myArray.push(e) : '' ;
    });
    return myArray;
}

var removeNullElements = function(array) {
    let myArray = [];
    array.forEach(e => {
        e != null ? myArray.push(e) : '';
    });
    return myArray;
}

var removeNullAndFalseElements = function(array) {
    let myArray = [];
    array.forEach(e => {
        if(e || e === 0) {
            myArray.push(e);
        }
    });
    return myArray;
}

var reverseWordsInArray = function(array) {
    let myArray = [];
    array.forEach(e => {
        let reverseWord = e.split("").reverse().join("");
        myArray.push(reverseWord);
    });
    return myArray;
}

var everyPossiblePair = function(array) {
    return "write your methode here!";
}

var allElementsExceptFirstThree = function(array) {
    let myArray = [];
    myArray = array.splice(3);
    return myArray;
}

var addElementToBeginning = function(array, element) {
    let myArray = [];
    myArray = array;
    myArray.unshift(element);
    return myArray;
}

// ---- Je suis à la ramasse aujourd'hui

var sortByLastLetter = function(array) {
    return 'Write your method here';
}

// var getFirstHalf = function(string) {
//     return 'Write your method here';
// }

// var makeNegative = function(number) {
//     return 'Write your method here';
// }

// var numberOfPalindromes = function(array) {
//     return 'Write your method here';
// }

// var shortestWord = function(array) {
//     return 'Write your method here';
// }

// var longestWord = function(array) {
//     return 'Write your method here';
// }

// var sumNumbers = function(array) {
//     return 'Write your method here';
// }

// var repeatElements = function(array) {
//     return 'Write your method here';
// }

// var stringToNumber = function(string) {
//     return 'Write your method here';
// }

// var calculateAverage = function(array) {
//     return 'Write your method here';
// }

// var getElementsUntilGreaterThanFive = function(array) {
//     return 'Write your method here';
// }

// var convertArrayToObject = function(array) {
//     return 'Write your method here';
// }

// var getAllLetters = function(array) {
//     return 'Write your method here';
// }

// var swapKeysAndValues = function(object) {
//     return 'Write your method here';
// }

// var sumKeysAndValues = function(object) {
//     return 'Write your method here';
// }

// var removeCapitals = function(string) {
//     return 'Write your method here';
// }

// var roundUp = function(number) {
//     return 'Write your method here';
// }

// var formatDateNicely = function(date) {
//     return 'Write your method here';
// }

// var getDomainName = function(string) {
//     return 'Write your method here';
// }

// var titleize = function(string) {
//     return 'Write your method here';
// }

// var checkForSpecialCharacters = function(string) {
//     return 'Write your method here';
// }

// var squareRoot = function(number) {
//     return 'Write your method here';
// }

// var factorial = function(number) {
//     return 'Write your method here';
// }

// var findAnagrams = function(string) {
//     return 'Write your method here';
// }

// var convertToCelsius = function(number) {
//     return 'Write your method here';
// }

// var letterPosition = function(array) {
//     return 'Write your method here';
// }
