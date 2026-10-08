let handleliste = ["melk", "brød", "ost", "egg"];
handleliste.push("Banan");

handleliste.push("Toro tomatsuppe");

handleliste.push("Havregryn");

handleliste.push("Mel");

handleliste.reverse();

handleliste.splice(3,1);
for (let vare of handleliste) {

console.log(vare);

}