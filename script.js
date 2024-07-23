document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1200, // Duration of animations
        once: true // Whether animations should only happen once or every time you scroll up/down
    });

    // EmailJS initialization
    emailjs.init("62TUU4V_IMDfBiQtz");
    console.log("EmailJS initialized");

    // Email sending function
    window.sendEmail = function(event) {
        event.preventDefault();
        var form = document.getElementById('contactForm');
        console.log("Sending email with form data:", new FormData(form));
        emailjs.sendForm('service_nnla3st', 'template_tfoldhc', form)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Pesan berhasil dikirim melalui email!");
            }, function(error) {
                console.log('FAILED...', error);
                alert("Pesan gagal dikirim melalui email. Silakan coba lagi.");
            });
    };

    // WhatsApp sending function
    window.sendWhatsApp = function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const whatsappURL = `https://wa.me/6281292059125?text=Nama:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0APesan:%20${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    // Search function
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    function performSearch(event) {
        event.preventDefault();
        const query = searchInput.value.toLowerCase().trim();

        // Mapping of keywords to corresponding page URLs
        const keywordToUrl = {
            'home': 'src/home.html',
            'description': 'src/description.html',
            'class photo': 'src/classphoto.html',
            'student': '#' // Replace with actual link if available
        };

        // Check if query matches any keyword
        if (keywordToUrl.hasOwnProperty(query)) {
            const url = keywordToUrl[query];
            if (url !== '#') {
                window.location.href = url;
                alert(`Redirecting to ${query} page.`);
            } else {
                alert(`No specific page found for ${query}.`);
            }
        } else {
            alert('No matches found.');
        }
    }

    searchForm.addEventListener('submit', performSearch);
});
