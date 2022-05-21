//Paramètres à modifier selon le projet
var extension = ".jpg";

//Array de gestion des éléments graphiques
var imgArray = [];
var dataArray = [];

//chargement automatique de l'ensemble de mes images
for (var i = 0; i <= 26; i++) {
    //on crée les images pour les mettre dans la page
    var img = document.createElement("img");
    //on trouve l'URL de chaque image grâce à notre boucle
    img.src = "assets/anime/anime" + i + extension;
    //on ajoute un id pour des manipulations individuelles
    img.id = i;
    //un style partagé par toutes les images
    img.className = "anime";
    //ajout au conteneur (body)
    document.body.appendChild(img);

    //gestion de l'interactivité pour les images
    img.addEventListener("mouseenter", onEnter);
    img.addEventListener("mouseleave", onLeave);

    //ajout dans la liste de l'image qui vient d'être créée
    imgArray.push(img);

    //autant d'élément d'info que d'images
    var data = document.createElement("div");
    //on a besoin d'un id pour associer l'image à son info-bulle
    data.id = "data" + i;
    //application de la class CSS (voir fichier css)
    data.className = "data";
    data.innerText = "C'est l'image : n°" + i;
    document.body.appendChild(data);

    //remplissage de l'array des datas
    dataArray.push(data);

    //pour gérer le décalage de mise à jour des feuilles de style
    setTimeout(layout, 500);
}

//callback de l'événement souris "enter"
function onEnter(event) {
    //on récupère l'élement unique qui a engendré l'événement
    var img = event.target;
    //par effet d'association, on trouve l'info-bulle qui correspond
    var data = document.getElementById("data" + img.id);
    //apparition de l'info-bulle
    data.style.display = "block";
}

//callback de l'événement souris "leave"
/* Problème : faire disparaître TOUTES les infos-bulles d'un coup et être bien sûr que la page soit vide d'info-bulles.
 */
function onLeave(){
    //traverser la liste des info-bulles pour les faire disparaître
    for (var i = 0; i <= dataArray.length; i++) {
        var data = dataArray[i]; //raccourcis d'écriture
        data.style.display = "none";//fait disparaître la div
    }
}

//fonction de mise en page
//on place en léger décalage x,y chaque info-bulle à partir de son image d'origine
function layout() {
    //on boucle parmi les info-bulles
    for (var i = 0; i <= dataArray.length; i++) {
        var data = dataArray[i]; //raccourcis d'écriture
        var img = imgArray[i]; //raccourcis d'écriture
        //position en x de l'info-bulle = position en x de l'image + n pixels
        data.style.left = img.offsetLeft + deltaX + "px";
        data.style.top = img.offsetTop + deltaY + "px";
    }
}
