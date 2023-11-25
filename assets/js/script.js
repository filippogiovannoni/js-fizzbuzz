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

// Operatore modulo (%): verifico se un numero è multiplo di 3 quando per esempio:
// Ho il numero 6, il 3 ci sta dentro 2 volte e il resto è 0, quindi 0 == 0 TRUE, viene loggato 'Fizz' dalle condizionali
// Ho il numero 7, il 3 ci sta dentro 2 volte e il resto è 1, quindi 0 == 1 FALSE, viene loggato solamente il numero
