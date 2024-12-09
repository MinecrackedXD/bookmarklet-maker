function generateBookmarklet() {
    const inputBox = document.getElementById('inputBox');
    const outputBox = document.getElementById('outputBox');
    const copyButton = document.getElementById('copyButton');

    const code = inputBox.value.trim();

    if (code) {
        // Ensuring the format is correct by directly adding 'javascript:' before the code.
        const bookmarkletCode = `javascript:(${code});`;
        outputBox.value = bookmarkletCode;
        copyButton.style.display = 'inline-block';
    } else {
        outputBox.value = '';
        copyButton.style.display = 'none';
    }
}

function copyCode() {
    const outputBox = document.getElementById('outputBox');
    outputBox.select();
    document.execCommand('copy');
    alert('Code copied to clipboard!');
}
