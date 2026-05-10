
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'mg', 
        autoDisplay: true,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');

    setTimeout(function() {
        var userLang = navigator.language || navigator.userLanguage; 
        var targetLang = userLang.split('-')[0];
        if (targetLang !== 'mg') {
            const select = document.querySelector('.goog-te-combo');
            if (select) {
                select.value = targetLang;
                select.dispatchEvent(new Event('change'));
            }
        }
    }, 1000);
}


document.addEventListener('DOMContentLoaded', function() {
    
    // --- Gestion du formulaire NDAO! ---
    const portalForm = document.getElementById('portalForm');
    if (portalForm) {
        portalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;

            if (user.trim() !== "" && pass.trim() !== "") {
                window.location.href = "vision.html";
            } else {
                alert("Fenoy ny banga azafady (Veuillez remplir tous les champs)");
            }
        });
    }

    
    
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.textContent.includes("Teny miafina adino")) {
            link.addEventListener('click', function(e) {
                e.preventDefault(); 
                alert("Mifandraisa amin'ny Mpandrindra ao amin'ny pejy CONTACT raha hitady ny very, azafady tompoko!");
            });
        }
    });

});
