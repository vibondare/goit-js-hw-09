const feedbackForm = document.querySelector(".feedback-form");
const input = document.querySelector(".feedback-form input");
const textarea = document.querySelector(".feedback-form textarea");

feedbackForm.addEventListener("input", saveDataFromInputAndTextarea);
feedbackForm.addEventListener("submit", formSubmit);

function saveDataFromInputAndTextarea(event) {
    event.preventDefault();

    const feedbackFormState = {
        email: input.value.trim(),
        message: textarea.value.trim(),
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));

    console.log(feedbackFormState);
}

function formSubmit(event) {
    event.preventDefault();

    if (input.value.trim() && textarea.value.trim()) {
        const email = input.value.trim();
        const message = textarea.value.trim();
        
        console.log({email, message});
        
        localStorage.removeItem("feedback-form-state")
        feedbackForm.reset();
    } else {
        return alert('All fields have to be filled in!');
    }
}

const savedData = localStorage.getItem("feedback-form-state");

if (savedData) {
    const parsedSavedData = JSON.parse(savedData);

    const savedEmail = parsedSavedData.email;
    const savedMessage = parsedSavedData.message;

    input.value = savedEmail;
    textarea.value = savedMessage;
}
