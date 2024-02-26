Code JavaScript pour la gestion du compte (account_management.js) :
javascript
Copy code
// Script pour la gestion du compte utilisateur
function logout() {
    // Simuler une déconnexion de l'utilisateur
    alert("Vous avez été déconnecté.");
    // Redirection vers la page d'accueil
    window.location.href = "index.html";
}

function showLogoutConfirmation() {
    // Afficher une boîte de confirmation pour la déconnexion
    var confirmation = confirm("Voulez-vous vous déconnecter ?");
    if (confirmation) {
        logout();
    }
}
