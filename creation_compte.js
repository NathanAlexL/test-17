// Fonction pour valider le formulaire de création de compte
function validateSignupForm() {
    // Récupération des valeurs des champs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Validation des champs
    if (username.trim() === "") {
        alert("Veuillez saisir un nom d'utilisateur.");
        return false; // Empêcher la soumission du formulaire
    }

    if (password.trim() === "") {
        alert("Veuillez saisir un mot de passe.");
        return false; // Empêcher la soumission du formulaire
    }

    if (confirmPassword.trim() === "") {
        alert("Veuillez confirmer votre mot de passe.");
        return false; // Empêcher la soumission du formulaire
    }

    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return false; // Empêcher la soumission du formulaire
    }

    // Si toutes les validations sont passées
    return true; // Autoriser la soumission du formulaire
}
