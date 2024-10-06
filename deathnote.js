class CuadernoMuerte {
    constructor(nombre = "Ryuk") {
        this.shinigami = nombre
        this.escritor = null
        this.victimas = []
    }

    mostrarVictimas() {
        this.victimas.forEach(victima => {
            [
                '.............................................',
                `   puede morir:   ${victima.nombre}          `,
                "============================================="
            ].forEach(linea => console.log(linea))
        })
    }

    escribir(victima) {
        this.victimas.push(victima) 
    }
}


class Persona {
    constructor(nombre){
        this.nombre = nombre
    }
}

let diario = new CuadernoMuerte()
diario.escribir(new Persona("Paco"))
diario.escribir(new Persona("Manuel"))
diario.escribir(new Persona("Carlos"))
diario.escribir(new Persona("Asclepiodoto"))

diario.mostrarVictimas()
