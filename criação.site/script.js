function processXSS() {
    const input = document.getElementById('xss-input').value;
    const outputDiv = document.getElementById('xss-output');
    outputDiv.innerHTML = `<p>resultado escrito:</p><p>${input}</p>`;
}
