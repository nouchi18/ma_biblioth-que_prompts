// Fonction pour copier le texte
function copyPrompt(button) {
    const card = button.closest('.card-content');
    const text = card.querySelector('.prompt-text').innerText;

    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.style.backgroundColor = '#27ae60';

        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.backgroundColor = '#333';
        }, 2000);
    });
}

// Recherche simple (filtre visuel)
document.getElementById('searchInput').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.prompt-card');

    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        if(title.includes(term)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Animation simple des onglets
const tabs = document.querySelectorAll('.tabs button');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});
