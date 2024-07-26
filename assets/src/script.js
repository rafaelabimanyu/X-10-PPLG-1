document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1200,
        once: true 
    });

    emailjs.init("62TUU4V_IMDfBiQtz");
    console.log("EmailJS initialized");

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
        const allTextElements = document.body.querySelectorAll("*:not(script):not(style)");

        let found = false;

        allTextElements.forEach(element => {
            if (element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) { 
                const text = element.textContent.toLowerCase();
                if (text.includes(query)) {
                    element.style.backgroundColor = "grey"; 
                    found = true;
                } else {
                    element.style.backgroundColor = ""; 
                }
            }
        });

        if (!found) {
            alert('No matches found.');
        } else {
            alert('Matches found. Highlighted in yellow.');
        }

        const keywordToUrl = {
            'home': 'home.html',
            'description': 'description.html',
            'class photo': 'classphoto.html',
            'student': 'student.html',
            'contact': 'contact.html'
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
        }
    }

    searchForm.addEventListener('submit', performSearch);
});
