/*
# Program převede číslo z dvojkové soustavy
# do soustavy desítkové 
*/

/** 
 * logická funkce zjistí, jestli je zadaný formát binární
 * @param {number} BinarniCislo vstupní binární číslo
 * @returns {boolean} je číslo binární?
 */
function jeBinarniCislo(BinarniCislo) {

    let jeBinarni = true;

    //projde všechny znaky a ověří, jestli je zanak 0 nebo 1
    for (let index = 0; index <= BinarniCislo.length - 1; index++) {
        if (BinarniCislo[index] === "0" || BinarniCislo[index] === "1") { }
        else {
            return false; // 
        }
    }
    return jeBinarni;
}


/** 
 * Funkce převede binární číslo na destíkové
 * @param {number} BinarniCislo vstupní binární číslo
 * @returns {number} převedené číslo na desítkový formát
 */
function dvojkovaDoDesitkove(BinarniCislo) {

    let mocnina = 1; // násobí se 2x pro každou iteraci ve for cyklu
    let decimalniCislo = 0; //proměnná do které se postupně zapisují převody 

    if (jeBinarniCislo(BinarniCislo)) {
        // projde každé číslo od poslední pozice a zjistí shodu s číslem 1
        for (let index = BinarniCislo.length - 1; index >= 0; index--) {

            // Decimální číslo = Decimální číslo + (1 * 2pozice indexu) 
            if (BinarniCislo[index] === "1") {
                decimalniCislo = decimalniCislo + (mocnina * BinarniCislo[index]);
            }
            mocnina = mocnina * 2;
        }
        return decimalniCislo;
    }
    else {
        try {
            throw new Error("Zadané číslo není binární!"); // chyba v případě, že vstupní číslo není binární
        } catch (e) {
            console.error(`${e.name}: ${e.message}`); // vypíše chybu do konzole

        }
    }
}

// Příklad použití 
/*
let vstupniCislo = "11011"; // zadejte binární číslo, které chcete převést
let deci = dvojkovaDoDesitkove(vstupniCislo);
let jeToBinarniCislo = jeBinarniCislo(vstupniCislo);
console.log("Binární číslo " + vstupniCislo + " je v desítkové soustavě " + deci + ".");
*/
