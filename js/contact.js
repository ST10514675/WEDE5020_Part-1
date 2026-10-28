const RECIPIENT = "dlaminikevin79@gmail.com";

const form = document.getElementById("contactForm");
const resultBox = document.getElementById("contactResult");
const previewText = document.getElementById("emailPreview");
const sendLink = document.getElementById("sendEmailLink");

function showError(fieldId, message) {
    document.getElementById(fieldId + "_error").textContent = message;
    document.getElementById(fieldId).classList.add("invalid");
}

function clearErrors() {
    document.querySelectorAll("#contactForm .error").forEach(function (el) {
        el.textContent = "";
    });
    document.querySelectorAll("#contactForm .invalid").forEach(function (el) {
        el.classList.remove("invalid");
    });
}

function validateForm(v) {
    let valid = true;

    if (v.name === "") {
        showError("contact_name", "Please enter your name.");
        valid = false;
    } else if (!/^\p{L}[\p{L}\s'’-]+$/u.test(v.name)) {
        showError("contact_name", "Use letters only (at least 2 characters). Spaces, hyphens and apostrophes are allowed.");
        valid = false;
    }

    if (v.email === "") {
        showError("contact_email", "Please enter your email address.");
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
        showError("contact_email", "Enter a valid email address, e.g. name@example.com.");
        valid = false;
    }

    const phone = v.phone.replace(/[\s-]/g, "");
    if (phone !== "" && !/^(\+27|0)[0-9]{9}$/.test(phone)) {
        showError("contact_phone", "Enter a valid number, e.g. 0817837543 or +27817837543.");
        valid = false;
    }

    if (v.type === "") {
        showError("contact_type", "Please choose a message type.");
        valid = false;
    }

    if (v.message === "") {
        showError("contact_message", "Please type your message.");
        valid = false;
    } else if (v.message.length < 10) {
        showError("contact_message", "Your message is too short (at least 10 characters).");
        valid = false;
    } else if (v.message.length > 500) {
        showError("contact_message", "Your message is too long (maximum 500 characters).");
        valid = false;
    }

    return valid;
}

form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    clearErrors();
    resultBox.hidden = true;

    const values = {
        name: document.getElementById("contact_name").value.trim(),
        email: document.getElementById("contact_email").value.trim(),
        phone: document.getElementById("contact_phone").value.trim(),
        type: document.getElementById("contact_type").value,
        message: document.getElementById("contact_message").value.trim()
    };

    if (!validateForm(values)) {
        
        const firstError = document.querySelector("#contactForm .invalid");
        if (firstError) {
            firstError.focus();
        }
        return;
    }

    const subject = "Kevin's Cafe website: " + values.type + " from " + values.name;
    const body =
        "Name: " + values.name + "\n" +
        "Email: " + values.email + "\n" +
        "Phone: " + (values.phone === "" ? "Not provided" : values.phone) + "\n" +
        "Message type: " + values.type + "\n\n" +
        "Message:\n" + values.message;

    previewText.textContent = "To: " + RECIPIENT + "\nSubject: " + subject + "\n\n" + body;

    sendLink.href = "mailto:" + RECIPIENT +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    resultBox.hidden = false;
    resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
});


form.addEventListener("reset", function () {
    clearErrors();
    resultBox.hidden = true;
});