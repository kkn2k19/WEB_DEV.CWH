/*
6. The Vowel Counter:
   You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
*/

let word = 'WeAreAHeroMadeOfOwn';

function vowelCount(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++;
        }
    }

    return count;
}

console.log(vowelCount(word));