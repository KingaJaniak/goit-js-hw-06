const formLog = document.querySelector(".login-form");
formLog.addEventListener("submit", handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === "" || password === ""){
        alert("Please complete your login details");
    }else {
        const formData = {
            email: email,
            password: password
        };
console.log(formData);
form.reset();
}};