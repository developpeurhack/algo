/**
 * Compte bancaire de Marie 
 */

class Compte {
  constructor( titulaire, montant = 100) {
    this.titulaire = titulaire;
    this.solde = montant;
    
    
  }
  /**
     * Crediter le compte
     * @param {number} montant
     */

  crediter(montant) {
    this.solde += montant  //+ (2 * this.age); // ( 100€ +  ) : pour 1 an =  + 2€ ==> pour 8 ans +16€
  }

  /**
     * Debiter le compte
     * @param {number} montant
     */

  debiter(montant) {
    this.solde -= montant;
  }
  /**
     * Afficher le solde du compte
     */

  afficherSolde() {
    console.log(` le Compte présente le Solde de : ${this.solde} euros`);
  }
}