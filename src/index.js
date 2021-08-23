const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let numMass = [];
    let a = 0;
    let b = 10;

    for (let i = 0; i < (expr.length / 10); i++) {
        numMass[i] = expr.slice(a, b);
        a = a + 10;
        b = b + 10;
    }

  
    let dotMass = [];
    let timeDot = [];
    let c = 0;
    let d = 2;
    let buffer;

    for (let f = 0; f < numMass.length; f++) {
     buffer = '';
     c = 0;
     d = 2;

        for (let g = 0; g < 5; g++){
        timeDot[g] = numMass[f].slice(c, d);
        c = c + 2;
        d = d + 2;
        buffer = buffer + dotDash(timeDot[g])
        dotMass[f] = buffer;
        
         
       
      
    } 

    }

function dotDash(twoNum) { 
    if (twoNum === '10') {
        return '.'
    } else if (twoNum === '11') {
    return '-';
    } else if (twoNum === '**') {
    return ' ';
    } else {
    return '';
    }
}


for (let h = 0; h < dotMass.length; h++) {
    if (dotMass[h] === '     ') {
        dotMass[h] = ' ';
    }
}



let strMain = '';
let listProt = Object.getOwnPropertyNames(MORSE_TABLE);


for (let j = 0; j < dotMass.length; j++) {
    for (let k = 0; k < listProt.length; k++) {
        if ( dotMass[j] === listProt[k]) {
            strMain = strMain + MORSE_TABLE[listProt[k]];
        } 
    } if ( dotMass[j] === ' ') {
        strMain = strMain + ' ';
    }
}


  return strMain;
 
}


module.exports = {
    decode
}
