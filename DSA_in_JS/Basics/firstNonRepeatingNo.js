//First non-repeating char	"aabbccddeefg"	"f"

function firstNonRepeatingChar(str) {
    const charCount = {};

    // Count the occurrences of each character
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;           
    }
    // Find the first non-repeating character
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeating character is found, return null
    return null;    
}
const inputString = "aabbccddeefg";
const result = firstNonRepeatingChar(inputString);
console.log(result); // Output: "f"
