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


let handlekruv = []

const lagret = localStorage.getItem("handlekruv")
if (lagret !== null) {
    handlekruv = JSON.parse(lagret)
}

function add_kurv() {
    handlekruv.push(id)
    localStorage.setItem("handlekurv", JSON.stringify(handlekruv))
    console.log(handlekruv)
}

