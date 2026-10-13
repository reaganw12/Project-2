const jsSubmitButton = document.querySelector('.js-submit-button')

console.log('jsSubmitButton', jsSubmitButton);

//watches for clicks and does a thing
<script>
    document.getElementById("waitlistForm").addEventListener("submit", function(event) {
        // Prevent the default browser handling to ensure custom transitions run safely
        event.preventDefault();

        // Optional: Perform any local checks here if needed before routing
        
        // 🔄 Change the window location to route your user to the new page
        // Replace './thank-you.html' with your actual landing page path or URL
        window.location.href = "./submitted.html";
    });
</script>




