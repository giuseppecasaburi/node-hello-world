const vocali = ["a", "e", "i", "o", "u"];
const stringVerif = process.argv[2].toLowerCase();
let count = 0;

for(let i = 0; i < stringVerif.length; i++) {
    if (vocali.includes(stringVerif[i])) {
        count ++;
    }
}

console.log("Le parola contiene " + count + " vocali");