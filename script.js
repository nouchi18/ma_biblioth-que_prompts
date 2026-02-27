const prompts = [
    { title: "Portrait Cinématique", category: "CINEMATIC", text: "Ultra-realistic, 8K cinematic portrait of a man, dramatic lighting, orange and blue tones..." },
    { title: "Style Vogue B&W", category: "FASHION", text: "High-resolution black and white Vogue-style magazine cover, studio lighting..." },
    // Ajoutez vos prompts ici
];

function displayPrompts(data) {
    const container = document.getElementById('promptGrid');
    container.innerHTML = '';
    data.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <span class="category">${p.category}</span>
                <h3>${p.title}</h3>
                <code class="prompt-text" id="${p.title}">${p.text}</code>
                <button class="copy-btn" onclick="copyToClipboard('${p.text}')">Copier le Prompt</button>
            </div>
        `;
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert("Prompt copié !");
}

function filterPrompts() {
    const val = document.getElementById('searchInput').value.toLowerCase();
    const filtered = prompts.filter(p => p.title.toLowerCase().includes(val) || p.category.toLowerCase().includes(val));
    displayPrompts(filtered);
}

// Initialisation
displayPrompts(prompts);
