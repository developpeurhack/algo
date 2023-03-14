
class Titulaire {
  constructor(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
  }
  identiteTitulaire() {
    console.log(` Le nom :  ${this.nom} le prénom : ${this.prenom}  l'age  : ${this.age}`);
  }
}


