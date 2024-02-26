// Script de validation du formulaire de connexion
function validateLoginForm() {
    // Récupération des valeurs des champs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validation des champs
    if (username.trim() === "") {
        alert("Veuillez saisir votre nom d'utilisateur.");
        return false; // Empêcher la soumission du formulaire
    }

    if (password.trim() === "") {
        alert("Veuillez saisir votre mot de passe.");
        return false; // Empêcher la soumission du formulaire
    }

    // Si toutes les validations sont passées
    return true; // Autoriser la soumission du formulaire
}
