window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        emailjs.sendForm('service_8sgpquq', 'template_qjlabbh', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
            event.preventDefault();

    });
};

