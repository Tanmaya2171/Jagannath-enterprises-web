function sendMail(event) {
        event.preventDefault();
        
        const submitButton = document.querySelector('.btn-submit');
        submitButton.disabled = true; // Disable button to prevent multiple submissions
        submitButton.textContent = 'ପଠାଯାଉଛି...'; // Show loading state

        let params = {
            user_name: document.getElementById("name").value,
            user_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

                if (!params.user_name || !params.user_email || !params.message) {
            alert("ଦୟାକରି ସମସ୍ତ ଫିଲ୍ଡ ପୁରଣ କରନ୍ତୁ।");
            submitButton.disabled = false;
            submitButton.textContent = 'ପଠାନ୍ତୁ';
            return;
            }

        emailjs.send("service_iwgt56x", "template_olkwxhs", params)
            .then(function(response) {
                alert("ମେସେଜ୍ ସଫଳତାର ସହିତ ପଠାଯାଇଛି! ଆମେ ଶୀଘ୍ର ଆପଣଙ୍କୁ ଯୋଗାଯୋଗ କରିବୁ।");
                document.getElementById("contactForm").reset();
                submitButton.disabled = false;
                submitButton.textContent = 'ପଠାନ୍ତୁ';
            })
            .catch(function(error) {
                console.error("EmailJS Error:", error); // Log error for debugging
                alert("କିଛି ଭୁଲ ହୋଇଛି: " + error.text + "। ଦୟାକରି ପୁନଃଚେଷ୍ଟା କରନ୍ତୁ।");
                submitButton.disabled = false;
                submitButton.textContent = 'ପଠାନ୍ତୁ';
            });
    }
    