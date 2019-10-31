var myText = "Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

//primo modo
//splitto la parola usando lo spazio come splitter e carico gli elementi in un array
//la variabile a contiene il primo confronto per inizare il ciclo
//confronto ogni parola dell'array word con a
//se la parola è più lunga di a allora sostituisco quella parola
//in questo modo trovo la parola più lunga

function wordLongest1(){
    var word = myText.split(" ");
    var a = word[0]
        word.forEach(el => {
            if(el.length > a.length){
                a = el
            }
        });  
        console.log(a)
}
//secondo modo
//splitto la parola usando lo spazio come splitter e carico gli elementi in un array
//riordino le parole in base alla lunghezza con la funzione sort
//per correggere il tipo ordinamento richiamo la funzione anonima di ordinamento, in questo caso inverso
//che verifica se il numero b è maggiore di a con una sottrazione
//se il risultato è minore di 0 significa che a è più piccolo di b
//quindi viene riportato alla fine dell'array
//il sort continua fino alla lunghezza dell'array
//una volta terminato prendo il primo valore con chiave zero dell'array inversamente riordinato
function wordLongest2(){
    var word = myText.split(" ");
    word.sort((a,b)=>{
        return b.length - a.length
    })
    console.log(word[0])
    return word[0]
}

   




//wordLongest();

wordLongest1()
wordLongest2()