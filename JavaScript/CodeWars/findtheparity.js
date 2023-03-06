// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// Minha Solução / My Solution

function findParity(integers){
    let numerosPares = [];
    let numerosImpares = [];
    for(i in integers){
      integers[i] % 2 === 0 ? numerosPares.push(integers[i]) : numerosImpares.push(integers[i]);     
    }

    return numerosPares.length === 1 ? numerosPares[0] : numerosImpares[0];
}

// Melhor Solução / Best Solution

function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);

    return even.length==1? even[0] : odd[0];
}

// Teste 1
console.log(findParity([2,6,8,10,3]))

// Teste 1
console.log(findParity([3,3,3,3,3,3,3,3,3,3,3,3,3,3,35,5,5,5,5,5,5,5,5,5,5,7,7,7,7,1000]))

// Teste 3
console.log(findParity([-100000000007,-18,6,-8,-10,6,12,-24,36]))
