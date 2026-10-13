let tall = [12, 7, 19, 4, 25, 8];

let sok = 19;
let funnet = false;

for (let verdi of tall) {
    if (verdi === sok) {
        funnet = true;
        break;
    }
}

if (funnet) {
    console.log("Fant tallet");
} else {
    console.log("Fant ikke tallet");
}

let antallSjekker = 0;
