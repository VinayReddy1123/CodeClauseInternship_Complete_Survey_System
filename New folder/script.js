document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting

        // You can add code here to process and save survey responses
        alert('Survey submitted!'); // For demonstration purposes
    });
});
