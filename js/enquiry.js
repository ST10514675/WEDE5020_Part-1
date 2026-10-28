const PRICE_PER_GUEST = 85;      
const MIN_CATERING_GUESTS = 10;  
const MAX_TABLE_GUESTS = 12;     

const form = document.getElementById("enquiryForm");
const resultBox = document.getElementById("enquiryResult");
const resultText = document.getElementById("enquiryMessage");

function showError(fieldId, message) {
    document.getElementById(fieldId + "_error").textContent = message;
    document.getElementById(fieldId).classList.add("invalid");
}

function clearErrors() {
    document.querySelectorAll("#enquiryForm .error").forEach(function (el) {
        el.textContent = "";
    });
    document.querySelectorAll("#enquiryForm .invalid").forEach(function (el) {
        el.classList.remove("invalid");
    });
}

function isPastDate(dateString) {
    const chosen = new Date(dateString + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return chosen < today;
}

function formatDate(dateString) {
    return new Date(dateString + "T00:00:00").toLocaleDateString("en-ZA", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

function validateForm(v) {
    let valid = true;

    if (v.fullname === "") {
        showError("fullname", "Please enter your full name.");
        valid = false;
    } else if (!/^\p{L}[\p{L}\s'’-]+$/u.test(v.fullname)) {
        showError("fullname", "Use letters only (at least 2 characters). Spaces, hyphens and apostrophes are allowed.");
        valid = false;
    }

    if (v.email === "") {
        showError("email", "Please enter your email address.");
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
        showError("email", "Enter a valid email address, e.g. name@example.com.");
        valid = false;
    }

    const phone = v.phone.replace(/[\s-]/g, "");
    if (phone === "") {
        showError("phone", "Please enter your phone number.");
        valid = false;
    } else if (!/^(\+27|0)[0-9]{9}$/.test(phone)) {
        showError("phone", "Enter a valid number, e.g. 0817837543 or +27817837543.");
        valid = false;
    }

    if (v.type === "catering" || v.type === "booking") {
        const guests = Number(v.guests);

        if (v.guests === "") {
            showError("guests", "Please enter the number of guests.");
            valid = false;
        } else if (!Number.isInteger(guests) || guests < 1) {
            showError("guests", "Enter a whole number of guests (1 or more).");
            valid = false;
        } else if (v.type === "catering" && guests < MIN_CATERING_GUESTS) {
            showError("guests", "Catering orders start at " + MIN_CATERING_GUESTS + " guests.");
            valid = false;
        } else if (v.type === "booking" && guests > MAX_TABLE_GUESTS) {
            showError("guests", "Table bookings are for up to " + MAX_TABLE_GUESTS + " guests. For larger groups, choose Catering / Event Request.");
            valid = false;
        }

        if (v.date === "") {
            showError("event_date", "Please choose a date.");
            valid = false;
        } else if (isPastDate(v.date)) {
            showError("event_date", "The date cannot be in the past.");
            valid = false;
        }
    }

    if (v.message === "") {
        showError("message", "Please type your message.");
        valid = false;
    } else if (v.message.length < 10) {
        showError("message", "Your message is too short (at least 10 characters).");
        valid = false;
    } else if (v.message.length > 500) {
        showError("message", "Your message is too long (maximum 500 characters).");
        valid = false;
    }

    return valid;
}

function buildResponse(v) {
    const firstName = v.fullname.split(" ")[0];

    if (v.type === "catering") {
        const guests = Number(v.guests);
        const total = guests * PRICE_PER_GUEST;
        return "Thank you, " + firstName + "! Catering for " + guests + " guests on " +
            formatDate(v.date) + " is an estimated R" + total.toFixed(2) +
            " (R" + PRICE_PER_GUEST + " per guest). We will email a confirmed quote to " +
            v.email + " within 24 hours.";
    }

    if (v.type === "booking") {
        return "Good news, " + firstName + "! We have a table available for " + v.guests +
            " guests on " + formatDate(v.date) + ". A confirmation will be sent to " +
            v.email + ".";
    }

    if (v.type === "feedback") {
        return "Thank you for your feedback, " + firstName +
            "! Our team reads every comment and we may contact you on " + v.phone + " to follow up.";
    }

    return "Thank you for your question, " + firstName +
        "! We will reply to " + v.email + " within 24 hours.";
}

form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    clearErrors();
    resultBox.hidden = true;

    const values = {
        fullname: document.getElementById("fullname").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        type: document.getElementById("enquiry_type").value,
        guests: document.getElementById("guests").value.trim(),
        date: document.getElementById("event_date").value,
        message: document.getElementById("message").value.trim()
    };

    if (!validateForm(values)) {

        const firstError = document.querySelector("#enquiryForm .invalid");
        if (firstError) {
            firstError.focus();
        }
        return;
    }

    resultText.textContent = buildResponse(values);
    resultBox.hidden = false;
    resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

form.addEventListener("reset", function () {
    clearErrors();
    resultBox.hidden = true;
});