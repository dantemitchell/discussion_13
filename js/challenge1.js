var toggleCheckbox = document.getElementById("toggle");

var emailBox = document.getElementById("emailBox");

toggleCheckbox.addEventListener("change", function() {
    if (toggleCheckbox.checked) {
        emailBox.classList.remove("hidden");
    } else {
        emailBox.classList.add("hidden");
    }
});