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
