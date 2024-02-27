//Fonctions de manipulation de chaînes
//Inverser une chaîne: écrivez une fonction qui inverse une chaîne donnée.
function reverseString (here){ 
console.log(here.split('').reverse().join(''));
}
const string = "How do you feel this morning";
reverseString(string);

//Compter les caractères : créez une fonction qui compte le nombre de caractères dans une chaîne.
function compterCaracteres(texte) {
    return texte.length;
  }
  var texte = "Imma GoMyCode product and i'm here to proove you that i'm the best.";
  var nombreDeCaracteres = compterCaracteres(texte);
  
//Mettre les mots en majuscule : implémentez une fonction qui met en majuscule la première lettre de chaque mot dans une phrase.
function capital(str) {
    return str.split(" ").map(function(mot){
        return mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase();
    }).join(" ")
}
var resultat = capital("Je suis entrain de développer.");

// Fonctions du tableau :
// Rechercher le maximum et le minimum : écrivez des fonctions pour rechercher les valeurs maximales et minimales dans un tableau de nombres.
function convertirEnMajuscules(texte) {
    return texte.toUpperCase();
  }
  var texteOriginal = "je suis un apprenti développeur chez gomycode et je m'y plais beaucoup.";
  var texteEnMajuscules = convertirEnMajuscules(texteOriginal);
  
//Fonctions du tableau :
//Rechercher le maximum et le minimum : écrivez des fonctions pour rechercher les valeurs maximales et minimales dans un tableau de nombres
function trouverMaxMin(tableau) {
    var maximum = Math.max(...tableau);
    var minimum = Math.min(...tableau);
    return { maximum, minimum };
  }
  var tableauDeNombres = [50, 27, 92, 1, 7, 3];
  var resultats = trouverMaxMin(tableauDeNombres);

  //Somme du tableau : créez une fonction qui calcule la somme de tous les éléments d'un tableau.
function calculerSomme(tableau) {
    var somme = tableau.reduce(function(acc, valeur) {
      return acc + valeur;
    }, 0); // 0 = valeur initiale
    return somme;
  }
  var tableauDeNombres = [9, 17, 4545, 321, 3, 0, 74];
  var somme = calculerSomme(tableauDeNombres);
  console.log("Tableau de nombres : " + tableauDeNombres);
  console.log("Somme : " + somme);
  
  //Filtrer le tableau : implémentez une fonction qui filtre les éléments d'un tableau en fonction d'une condition donnée.
function filtrerTableau(tableau, condition) {
    var tableauFiltre = tableau.filter(function(element) {
      return condition(element);
    });
    return tableauFiltre;
  }

  var tableauDeNombres = [99, 5, 2, 9, 101, 7, 100, 300];
  var tableauFiltre = filtrerTableau(tableauDeNombres, function(element) {
    return element > 100;
  });

//   Fonctions mathématiques :
// Factorielle : écrivez une fonction pour calculer la factorielle d'un nombre donné.
function calculerFactorielle(nombre) {
    if (nombre < 0) {
      return "La factorielle n'est pas définie pour les nombres négatifs.";
    }
    if (nombre === 0 || nombre === 1) {
      return 1;
    }
    var resultat = 1;
    for (var i = 2; i <= nombre; i++) {
      resultat *= i;
    }
    return resultat;
  }
  var nombre = 5;
  var factorielle = calculerFactorielle(nombre);

  //Vérification des nombres premiers : créez une fonction pour vérifier si un nombre est premier ou non.
function estNombrePremier(nombre) {
    if (nombre < 2) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
      if (nombre % i === 0) {
        return false;
      }
    }
      // Si aucune division exacte n'a été trouvée, le nombre est premier.
    return true;
  }

  //Séquence de Fibonacci : implémentez une fonction pour générer la séquence de Fibonacci jusqu'à un nombre donné de termes.
function genererFibonacci(nbTermes) {
    var sequence = [];
    // Cas particulier : les deux premiers termes de la séquence
    if (nbTermes >= 1) {
      sequence.push(0);
    }
    if (nbTermes >= 2) {
      sequence.push(1);
    }
  
    // Générer les termes suivants de la séquence
    for (var i = 2; i < nbTermes; i++) {
      var terme = sequence[i - 1] + sequence[i - 2];
      sequence.push(terme);
    }
  
    return sequence;
  }
  
  // Exemple d'utilisation pour générer les 10 premiers termes de la séquence de Fibonacci
  var nbTermes = 10;
  var sequenceFibonacci = genererFibonacci(nbTermes);
  
  // Afficher le résultat
  console.log("Séquence de Fibonacci jusqu'à " + nbTermes + " termes : " + sequenceFibonacci);
  