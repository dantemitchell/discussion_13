var useBillingCheckbox = document.querySelector('input[name="useBilling"]');
var billingTextarea = document.getElementById('billing');
var homeTextarea = document.getElementById('home');

useBillingCheckbox.addEventListener('change', function() {
    if (useBillingCheckbox.checked) {
        homeTextarea.value = billingTextarea.value;
    } else {
        homeTextarea.value = '';
    }
});