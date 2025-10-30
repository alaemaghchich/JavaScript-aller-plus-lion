let produits = [
  { nom: "PC portable", prix: 900, image: "https://www.asus-store.ma/cdn/shop/files/PC-PORTABLE-GAMING-ASUS-ROG-STRIX-17-RTX-3060-Setup-Game_jpg.webp?v=1686312691" },
  { nom: "Clavier mécanique", prix: 45, image: "https://www.gearzone.ma/cdn/shop/products/MagicRefiner_MK14_Template_1.png?v=1617719523" },
  { nom: "Souris sans fil", prix: 25, image: "https://www.yourtech.ma/cdn/shop/products/H0807907bbfe943679a0ed4a36907ea590.jpg?v=1658591089&width=1001" }
];

let catalogue = document.getElementById("catalogue");

produits.forEach(p => {
  let carte = document.createElement("div");
  carte.className = "carte";
  carte.innerHTML = `
    <img src="${p.image}" alt="${p.nom}">
    <h3>${p.nom}</h3>
    <p>Prix : ${p.prix} €</p>
  `;
  catalogue.appendChild(carte);
});
