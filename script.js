document.getElementById('copyButton').addEventListener('click', function() {
    const bookmarkletCode = document.getElementById('bookmarkletCode');
    bookmarkletCode.select();
    document.execCommand('copy');
    alert('Code copied to clipboard!');
});
