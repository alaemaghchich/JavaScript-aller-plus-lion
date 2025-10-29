let produits = [
  { nom: "PC portable", prix: 900 },
  { nom: "Souris", prix: 25 },
  { nom: "Clavier", prix: 40 },
  { nom: "Écran", prix: 150 },
  { nom: "nigga", prix: 99},
];

let liste = document.getElementById("produits");

// kanfiltriw ghir lproduct li 9al mn 100€
let produitsFiltres = produits.filter(produit => produit.prix < 100);

// Si aucun produit ne correspond, afficher un message
if (produitsFiltres.length === 0) {
  liste.innerHTML = "<li>Aucun produit en promotion.</li>";
  //n9dro nktboha b7al hayda : 
  //let li = document.createElement("li")
  //li.liste.innerHTML = "Aucun produit en promotion."
} else {
  produitsFiltres.forEach(produit => {
    let li = document.createElement("li");
    li.textContent = `${produit.nom} – ${produit.prix} €`;
    //li.textContent = produit.nom + " – " + produit.prix + " €";
    liste.appendChild(li);
  });
}