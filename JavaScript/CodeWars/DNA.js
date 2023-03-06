// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


// Minha Solução / My Solution
function DNAStrand(dna){
    let dnaConvertido = "";
    for(letras of dna){
        if(letras == 'A'){
            dnaConvertido = dnaConvertido.concat('T'); // Se a letra for igual a A trocar por T
        }else if(letras == 'T'){
            dnaConvertido = dnaConvertido.concat('A'); // Se a letra for igual a T trocar por A
        }else if(letras == 'C'){
            dnaConvertido = dnaConvertido.concat('G'); // Se a letra for igual a C trocar por G
        }else if (letras == 'G'){
          dnaConvertido = dnaConvertido.concat('C'); // Se a letra for igual a G trocar por C
        }
    }

    return dnaConvertido;
}

// Melhor Solução / Best Solution
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

// Teste 1
console.log(DNAStrand("AAAA"))

// Teste 2
console.log(DNAStrand("AATTGC"))

// Teste 3
console.log(DNAStrand("GTAT"))