let validation = false;
var cadena = "";
var lineas = [];
var info = [];
let pila = [];

var tabla_predictiva = [["", "CUERPOACUOSO", "temperatura", "grasas", "huevosHelmintos", "fecales", "PH", "UT", "ARROLLO", "RIO", "CANAL", "200-250", "340-400", "460-500", "SST", "DO", "CO", "F", "N", "NA", "AP", "2-5", "6-9", "24-35", "100-180", ":", ";", "(", ")", "<", ">", "{", "}"],
["S", ["CA", "PI", "PRCA", "PF", "IC", "CCL", "FC"], "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["CA", "CUERPOACUOSO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["PI", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "(", "", "", "", "", ""],
["PRCA", "", "", "", "", "", "", "", "ARROLLO", "RIO", "CANAL", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["PF", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ")", "", "", "", ""],
["IC", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "{", ""],
["CCL", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ["PI", "MI", "TEM", "GRAS", "HELMINTO", "FECAL", "PH", "UT", "PF", "MF"], "", "", "", "", ""],
["TEM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ["PI", "MI", "FTEM", "MF", "PF", "PP", "RNTEM"], "", "", "", "", ""],
["FTEM", "", "temperatura", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["RNTEM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ["24-35", "LIM"], "", "", "", "", "", "", "", "", ""],
["LIM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ";", "", "", "", "", "", ""],
["GRAS", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ["PI", "MI", "FGRAS", "MF", "PF", "PP", "PGRAS"], "", "", "", "", ""],
["FGRAS", "", "", "grasas", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["PGRAS", "", "", "", "", "", "", "", "", "", "", "", "", "", ["SST", "RNGRAS"], ["DO", "RNGRAS"], ["CO", "RNGRAS"], ["F", "RNGRAS"], ["N", "RNGRAS"], "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["RNGRAS", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ["100-180", "LIM"], "", "", "", "", "", "", "", ""],
["HELMINTO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ["PI", "MI", "FHELMINTO", "MF", "PF", "PP", "PHEL"], "", "", "", "", ""],
["FHELMINTO", "", "", "", "huevosHelmintos", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["PHEL", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ["NA", "LIM"], ["AP", "LIM"], "", "", "", "", "", "", "", "", "", "", "", ""],
["FECAL", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ["PI", "MI", "FFECAL", "MF", "PF", "PP", "FESG"], "", "", "", "", ""],
["FFECAL", "", "", "", "", "fecales", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["FESG", "", "", "", "", "", "", "", ["ARROLLO", "RFCL2"], ["RIO", "RFCL1"], ["CANAL", "RFCL3"], "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["RFCL1", "", "", "", "", "", "", "", "", "", "", ["200-250", "LIM"], "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["RFCL2", "", "", "", "", "", "", "", "", "", "", "", ["340-400", "LIM"], "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["RFCL3", "", "", "", "", "", "", "", "", "", "", "", "", ["460-500", "LIM"], "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
["PH", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ["PI", "MI", "PH", "MF", "PF", "PP", "RNPH"], "", "", "", "", ""],
["RNPH", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ["6-9", "LIM"], "", "", "", "", "", "", "", "", "", ""],
["UT", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ["PI", "MI", "UT", "MF", "PF", "PP", "RNUT"], "", "", "", "", ""],
["RNUT", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ["2-5", "LIM"], "", "", "", "", "", "", "", "", "", "", ""],
["FC", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "}"],
["MI", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "<", "", "", ""],
["MF", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ">", "", ""],
["PP", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ":", "", "", "", "", "", "", ""],
];

function separar_cadena_lineas() {
    var aux = []
    var cadena_aux = cadena.split("\n");
    console.log(cadena_aux);
    for (let i in cadena_aux) {
        aux = cadena_aux[i].split(" ");
        for (let j in aux) {
            if (aux[j] != "") {
                lineas.push(aux[j]);
            }
        }
    }
    console.log(lineas);
}

function obtener_datos() {
    cadena = document.getElementById("datosClase").value
    console.log(cadena)
}

function obtener_info(elementos) {
    info.push(elementos[2])
    info.push(parseInt(elementos[13]))
    info.push(parseInt(elementos[22]))
    info.push(elementos[30])
    info.push(elementos[38])
    info.push(parseInt(elementos[39]))
    info.push(parseInt(elementos[47]))
    info.push(parseInt(elementos[55]))
}

function validar_canal() {
    if (info[1] >= 24 && info[1] <= 26) {
        if (info[2] >= 100 && info[2] <= 120) {
            if (info[3] == "NA") {
                if (info[4] == "CANAL") {
                    if (info[5] >= 460 && info[5] <= 500) {
                        if (info[6] >= 7 && info[6] <= 8) {
                            if (info[7] == 3) {
                                window.location.href = 'consumoHumano.html'
                            }
                        }
                    }
                }
            }
        }
    }
}

function validar_NextPage(){
    if (info[1] >= 27 && info[1] <= 32) {
        if (info[2] >= 130 && info[2] <= 155) {
            if (info[3] == "NA") {
                if (info[4] == "ARROLLO") {
                    if (info[5] >= 340 && info[5] <= 400) {
                        if (info[6] == 6) {
                            if (info[7] == 4) {
                                window.location.href = 'actividadesDomesticas.html'
                            }
                        }
                    }
                }else if(info[4] == "RIO"){
                    if (info[5] >= 200 && info[5] <= 250) {
                        if (info[6] == 6) {
                            if (info[7] == 4) {
                                window.location.href = 'actividadesDomesticas.html'
                            }
                        }
                    }
                }
            }
        }
    }else if(info[1] >= 33 && info[1] <= 35){
        if(info[2] >= 160 && info[2] <= 180){
            if (info[3] == "AP") {
                if (info[4] == "ARROLLO") {
                    if (info[5] >= 340 && info[5] <= 400) {
                        if (info[6] == 9) {
                            if (info[7] == 5) {
                                window.location.href = 'tratamiento.html'
                            }
                        }
                    }
                }else if(info[4] == "RIO"){
                    if (info[5] >= 200 && info[5] <= 250) {
                        if (info[6] == 9) {
                            if (info[7] == 5) {
                                window.location.href = 'tratamiento.html'
                            }
                        }
                    }
                }
            }
        }
    }
}


function validar() {
    obtener_datos();
    separar_cadena_lineas();
    let lineas_aux = lineas.slice();
    algoritmo_tabla_predictiva()
    if (pila.size() == 0 && lineas.length == 0) {
        alert("Cadena valida")
        obtener_info(lineas_aux);
        console.log(info);
        if (info[0] == "CANAL") {
            validar_canal();
        }else if(info[0] == "ARROLLO"||"RIO"){
            validar_NextPage();
        }
    }
    else {
        alert("Cadena invalida")
    }
}

function algoritmo_tabla_predictiva() {
    pila = new Stack();
    pila.push("S");
    while (lineas.length != 0) {
        console.log("Entrada :", lineas[0])
        console.log("Pila: ", pila.peek())
        if (lineas[0] == pila.peek() || pila.peek() == "RNTEM" || pila.peek() == "RNGRAS" || pila.peek() == "RFCL2" || pila.peek() == "RNPH" || pila.peek() == "RNUT" || pila.peek() == "RFCL1" || pila.peek() == "RFCL3") {
            let aux2 = parseInt(lineas[0])
            switch (pila.peek()) {
                case "RNTEM":
                    if (aux2 >= 24 && aux2 <= 35) {
                        pila.pop();
                        pila.push("LIM")
                        lineas.shift()
                    }
                    else {
                        alert("Error en la entrada")
                    }
                    break;
                case "RNGRAS":
                    if (aux2 >= 100 && aux2 <= 180) {
                        pila.pop();
                        pila.push("LIM")
                        lineas.shift()
                    }
                    else {
                        alert("Error en la entrada")
                    }
                    break;
                case "RFCL2":
                    if (aux2 >= 340 && aux2 <= 400) {
                        pila.pop();
                        pila.push("LIM")
                        lineas.shift()
                    }
                    else {
                        alert("Error en la entrada")
                    }
                    break;
                case "RFCL1":
                    if (aux2 >= 200 && aux2 <= 250) {
                        pila.pop();
                        pila.push("LIM")
                        lineas.shift()
                    }
                    else {
                        alert("Error en la entrada")
                    }
                    break;
                case "RFCL3":
                    if (aux2 >= 460 && aux2 <= 500) {
                        pila.pop();
                        pila.push("LIM")
                        lineas.shift()
                    }
                    else {
                        alert("Error en la entrada")
                    }
                    break;
                case "RNPH":
                    if (aux2 >= 6 && aux2 <= 9) {
                        pila.pop();
                        pila.push("LIM")
                        lineas.shift()
                    }
                    else {
                        alert("Error en la entrada")
                    }
                    break;
                case "RNUT":
                    if (aux2 >= 2 && aux2 <= 5) {
                        pila.pop();
                        pila.push("LIM")
                        lineas.shift()
                    }
                    else {
                        alert("Error en la entrada")
                    }
                    break;
                case "RNUT":
                    if (aux2 >= 200 && aux2 <= 250) {
                        pila.pop();
                        pila.push("LIM")
                        lineas.shift()
                    }
                    else {
                        alert("Error en la entrada")
                    }
                    break;
                case "RNUT":
                    if (aux2 >= 460 && aux2 <= 500) {
                        pila.pop();
                        pila.push("LIM")
                        lineas.shift()
                    }
                    else {
                        alert("Error en la entrada")
                    }
                    break;
                default:
                    pila.pop()
                    lineas.shift()
            }

        } else {
            var pos_x = 0
            var pos_y = 1
            console.log("LInea Y")
            while (lineas[0] != tabla_predictiva[pos_x][pos_y] && pos_y < 32) {
                // console.log(tabla_predictiva[pos_x][pos_y])
                pos_y++
            }
            console.log("Seleccion final: ", tabla_predictiva[pos_x][pos_y])
            var pos_x2 = 1
            var pos_y2 = 0
            console.log("LInea X")
            while (pila.peek() != tabla_predictiva[pos_x2][pos_y2] && pos_x2 < 32) {
                // console.log(tabla_predictiva[pos_x2][pos_y2])
                pos_x2++
            }
            console.log("Seleccion final: ", tabla_predictiva[pos_x2][pos_y2])
            if (tabla_predictiva[pos_x2][pos_y] === "") {
                alert("Error en la entrada")
                break;
            } else {
                console.log("INgreso a cambiar atributos: ", tabla_predictiva[pos_x2][pos_y])
                pila.pop();
                console.log(typeof (tabla_predictiva[pos_x2][pos_y]))
                if (typeof (tabla_predictiva[pos_x2][pos_y]) == "object") {
                    console.log("CAMBIANDO VALORES")
                    var aux = tabla_predictiva[pos_x2][pos_y].reverse()
                    console.log("Valores invertidos: ", aux)
                    for (let i in aux) {
                        console.log(aux[i])
                        pila.push(aux[i])
                    }
                } else {
                    pila.push(tabla_predictiva[pos_x2][pos_y])
                }
            }
        }
    }
}

class Stack {
    constructor() {
        this.stack = [];
    }
    push(element) {
        this.stack.push(element);
        return this.stack;
    }
    pop() {
        return this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    size() {
        return this.stack.length;
    }
    print() {
        console.log(this.stack);
    }
}