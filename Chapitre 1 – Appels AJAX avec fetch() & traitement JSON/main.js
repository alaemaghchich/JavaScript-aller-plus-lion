  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(respons => respons.json())
  //.then( function(respons){
   // return respons.json(); })

   .then(data => {
    console.log(" les donnee wslok ", data);
   })
   //.then(function(data){
    //console.log("les donnes wslok", data);})

     .catch(error => {
    console.error("Erreur lors de la récupération :", error);
  });
  //.catch(function(eroor){
    //console.eroor("Erreur lors de la récupération :", error)})