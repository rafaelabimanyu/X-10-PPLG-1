document.addEventListener('DOMContentLoaded', function() {
    const floatingText = document.getElementById('floatingText');
    floatingText.addEventListener('mouseenter', function() {
        floatingText.classList.add('active');
    });
    floatingText.addEventListener('mouseleave', function() {
        floatingText.classList.remove('active');
    });
});