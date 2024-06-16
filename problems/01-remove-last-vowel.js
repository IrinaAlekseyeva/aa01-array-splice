/*
Write a function removeLastVowel(word) that takes in a string and returns the
string with its last vowel removed.
Vowels are the letters "a", "e", "i", "o", "u".
*/
/*
1. we have a string. to convert it to an arr use split method with ''separator
2. created an array. iterate through it backwards and find index of the last vowel
3. call splice method on this array and delete this vowel
4. join array back using separator
*/

function removeLastVowel(word){
   let arr = word.split('');
   
   for(let i = arr.length - 1; i > 0; i--){
    if("aeiou".includes(arr[i])){
        arr.splice(i,1);
        return arr.join('');
    } else {
        return word;
    }
   }
   
}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeLastVowel;
