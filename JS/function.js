var  c_def = window.localStorage.getItem('score_defaite');
var c_ega = window.localStorage.getItem('score_egalite');
var c_vic = window.localStorage.getItem('score_victoire');

var compteur = [c_def, c_ega, c_vic];

 if (!c_def || !c_ega || !c_vic ) {
     console.log(compteur);
     console.log("choupido");
     window.localStorage.setItem('score_defaite',0);
     window.localStorage.setItem('score_egalite',0);
     window.localStorage.setItem('score_victoire',0);
     compteur = [0,0,0]; }


 else{console.log("oula")
     compteur = [c_def, c_ega, c_vic];
 }; 

const obj = ["pierre", "feuille", "ciseaux"];

const vic = ["perdu", "gagné", "égalité"];

var victoire = [

    [2, 0, 1],
    [1, 2, 0],
    [0, 1, 2]
];


function chifoumi(x) {

    var robot = Math.floor(Math.random() * 3);

    var resultat = vic[victoire[x][robot]];

    document.getElementsByClassName("bataille_rob")[0].innerText = "..."
    document.getElementsByClassName("bataille_moi")[0].innerText = obj[x]; 
    setTimeout(() =>{document.getElementsByClassName("bataille_rob")[0].innerText = obj[robot]},1500);
    setTimeout(() =>{document.getElementsByClassName("bataille_res")[0].innerText = resultat},2000);
    document.getElementsByClassName("bataille_res")[0].innerText = "VS"

    if (resultat == vic[0]) { compteur[0]++ };
    if (resultat == vic[1]) { compteur[1]++ };
    if (resultat == vic[2]) { compteur[2]++ };

    //cookies dans la page

    window.localStorage.setItem ('score_defaite', compteur[0]);
    window.localStorage.setItem ('score_egalite' , compteur[1]);
    window.localStorage.setItem ('score_victoire' ,compteur[2]);

    setTimeout(() =>{document.getElementsByClassName("score_def")[0].innerText = window.localStorage.getItem('score_defaite');
    document.getElementsByClassName("score_vic")[0].innerText = window.localStorage.getItem('score_egalite');
    document.getElementsByClassName("score_ega")[0].innerText = window.localStorage.getItem('score_victoire')},2100);

}


