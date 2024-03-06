function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let romanNumeral = '';

    for (let key in obj) {
        let value = obj[key][1];
        let symbol = obj[key][0];

        while (num >= value) {
            romanNumeral += symbol;
            num -= value;
        }

        // Convert key to number for arithmetic operations
        key = parseInt(key);

        // Check for subtractive notation
        if (key < 6 && num >= obj[key][1] - obj[key + 2][1] && obj[key + 2][1] !== 1000) {
            romanNumeral += obj[key + 2][0] + obj[key][0];
            num -= (obj[key][1] - obj[key + 2][1]);
        }
    }

    return romanNumeral;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
