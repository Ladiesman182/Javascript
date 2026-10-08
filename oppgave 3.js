let temperaturer = [12, 14, 11, 9, 15, 17, 13];
sum = 0;
let over13 = 0;
let høyeste = temperaturer[0];
let laveste = temperaturer[0];
for (let temperatur of temperaturer) {
    sum = sum + temperatur;
    if (temperatur > 13){
        over13++;
    }
    if (temperatur > høyeste){
        høyeste = temperatur;
    }
    if (temperatur < laveste){
        laveste = temperatur;
    }
}
gjenomsnitt = sum / temperaturer.length;
console.log("Summen av temperaturen denne uken er : " ,sum ," grader celsius" )
console.log("Gjennomsnitts temperaturen denne uken er: " , gjenomsnitt , "grader celsius")
console.log("Antall dager temperaturen var over 13 grader:", over13);

console.log("Høyeste temperatur:", høyeste, "grader celsius");

console.log("Laveste temperatur:", laveste, "grader celsius");