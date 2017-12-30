var qs = qsParser(location.href);
window.onload = function() {
    if (qs.github) {
        document.getElementById('github').style.display = 'inline-block';
    }
    if (qs.javascript) {
        document.getElementById('javascript').style.display = 'inline-block';
    }
    if (qs.twitter) {
        document.getElementById('twitter').style.display = 'inline-block';
    }
    if (qs.content) {
        document.getElementById('content').style.display = 'block';
        document.getElementById('content').innerHTML = qs.content;
    }
    
}