"use a strict"

/*

Anoncer 3 variables 
- a= Jean 
-b= Paul
-Result

Ajouter un checkName
-> console.log(result)

*/

let a="Jean";
let b="Paul";
let result=checkName(a,b)

function checkName(name1, name2){ //checkName vérifie si les deux noms sont les mêmes
    if(name1===name2){ //rappel les 3 === vérifie si c'est le même type (ici string) et si les caractères sont les mêmes
        return true
    }else{
        return false
    }
}
console.log(result);