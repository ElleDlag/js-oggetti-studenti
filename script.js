/*- Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso il for in tutte le proprietà.
- Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/

console.log('\r\n***** ESERCIZIO 1 *****\r\n\r\n')
//esercizio 1
var student1 ={
    'nome': 'Bonnie',
    'cognome': 'Clyde',
    età:'38'
    }
    
    for (var val in student1) {
      console.log(student1[val])
    }

console.log('\r\n\r\n\r\n***** ESERCIZIO 2 *****\r\n\r\n')
    //esercizio2
    
    var students=[
    {'nome': 'Adelmo',
    'cognome': 'Biagi',
    'età':'23'},
    {'nome': 'Marco',
    'cognome': 'Cattaneo',
    'età':'18'
    },
    {'nome': 'Rosalinda',
    'cognome': 'Muniz',
    'età':'43'}
    ]
    
    var n=1;
    students.forEach(function(el,i){
    for(var val in el){
    console.log("studente" + n + ": " + val + " " + el[val])
    }
    n++;
    })


console.log('\r\n\r\n\r\n***** ESERCIZIO 3 *****\r\n\r\n')
    //esercizio 3
    //nuova info students
    students.forEach(function(el){
        el['Ooccupazione'] = prompt('inserisci la tua attuale occupazione')
        console.log(el)
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    