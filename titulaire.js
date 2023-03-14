let titulaire1 = new Titulaire("Nestor", "grandPere");
let titulaire2 = new Titulaire("grandMere", "Grandmere");
//console.log(titulaire1);
//console.log(titulaire1.nom)
//titulaire2.identiteTitulaire();
let titulaire3 = new Titulaire("marie", "Marie", 2);
let compte3 = new Compte(titulaire3, 100);
console.log(compte3)
//console.log(titulaire3);
//console.log(compte3);
compte3.crediter(100); // crediter le compte
compte3.debiter(10); // debiter le compte
compte3.afficherSolde();




