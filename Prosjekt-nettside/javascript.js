const produkter = {
    Volleyball: {
        navn: "Volleyball",
        pris: 5000,
        bilde: "Bilder/1.png"
    },

    Volleyballsko: {
        navn: "Volleyballsko",
        pris: 1275,
        bilde: "Bilder/2.png"
    },

    Knebeskyttere: {
        navn: "Knebeskyttere",
        pris: 10000,
        bilde: "Bilder/5.jpg"
    },

    Volleyballbager: {
        navn: "Volleyballbager",
        pris: 1,
        bilde: "Bilder/3.jpg"
    },

    Volleyballtrøyer: {
        navn: "Volleyballtrøyer",
        pris: 10000,
        bilde: "Bilder/4.png"
    }
}


const id = new URLSearchParams(window.location.search).get("id")
const produkt = produkter[id]

let handlekruv = []

const lagret = localStorage.getItem("handlekurv")
if (lagret !== null) {
    handlekruv = JSON.parse(lagret)
}

function add_kurv() {
    handlekruv.push(id)
    localStorage.setItem("handlekurv", JSON.stringify(handlekruv))
    console.log(handlekruv)

    
}


function fjern_fra_kurv(index) {
    handlekruv.splice(index, 1)
    localStorage.setItem("handlekurv", JSON.stringify(handlekruv))
    location.reload()
}

function tom_kurv() {
    handlekruv = []
    localStorage.setItem("handlekurv", JSON.stringify(handlekruv))
    document.getElementById("kurv-innhold").innerHTML =""
    document.getElementById("sum").textContent ="Sum: 0Kr"
}





const boks = document.getElementById("kurv-innhold")

if (boks) {
    let sum = 0


    for (let i = 0; i < handlekruv.length; i++) {
        const vare = produkter[handlekruv[i]]

        boks.innerHTML += `
            <div class="kruv-rad">
                <img src="${vare.bilde}" alt="${vare.navn}">
                <span>${vare.pris} kr </span>
                <span>${vare.navn} kr </span>
                <button onclick="fjern_fra_kurv(${i})">Fjern</button>
            </div>
        `

    sum = sum+ vare.pris

    }
document.getElementById("sum").textContent = "Sum: " + sum + " Kr"


}


