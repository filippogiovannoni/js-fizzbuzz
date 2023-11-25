// Tools

// - For Cycle
// - if / else if
// - console.log

//Ciclo for che stampa numeri da 1 a 100
for (let n = 1; n <= 100; n++) {

    //Verifico se sono multipli tramite l'operatore modulo (%)

    //Se il numero della variabile n è multiplo di 3 e di 5
    if (n % 3 == 0 && n % 5 == 0) {
        //Viene stampato in console FizzBuzz
        console.log('FizzBuzz');
    }
    //Se il numero della variabile n è multiplo di 3
    else if (n % 3 == 0) {
        //Viene stampato in console Fizz
        console.log('Fizz');

        //Se il numero della variabile n è multiplo di 5
    } else if (n % 5 == 0) {
        //Viene stampato in console Buzz
        console.log('Buzz');
    }

    //Altrimenti viene stampato il numero della variabile n
    else {
        console.log(n)
    }
}
